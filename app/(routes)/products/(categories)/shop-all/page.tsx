'use client'

import React, { useEffect, useState } from 'react'
import { getAllModel } from '@/app/api/Model'
import ModelCard from '@/components/ModelCard'
import { ModelProps } from '@/lib/interface'
import { ChevronDown, LoaderCircle } from 'lucide-react'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { 
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent 
} from '@/components/ui/dropdown-menu'
import {
  Checkbox
} from "@/components/ui/checkbox" 

const ShopAllPage = () => {
    const [models, setModels] = useState<ModelProps[]>([])
    const [originalModels, setOriginalModels] = useState<ModelProps[]>([]) // Store original data
    const [loading, setLoading] = useState(false)
    const [sortBy, setSortBy] = useState<string>('') // State for sorting
    const [selectedSizes, setSelectedSizes] = useState<string[]>([]) // State for selected sizes

    const handleSizeChange = (size: string) => {
        setSelectedSizes(prev =>
            prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]
        )
    }

    const handleSortChange = (value: string) => {
        if (value === 'none') {
            setSortBy('') // Clear sorting
            setModels(originalModels) // Reset to original models
        } else {
            setSortBy(value) // Apply sorting
        }
    }

    useEffect(() => {
      setLoading(true)
      getAllModel().then(data => {
          setModels(data)
          setOriginalModels(data) // Store original data for sorting and filtering
          setLoading(false)
      })
    }, []) // Re-run when the search query changes

    useEffect(() => {
        let filteredModels = [...originalModels]

        // Apply size filtering
        if (selectedSizes.length > 0) {
            filteredModels = filteredModels.filter(model =>
                model.products.some(product => selectedSizes.includes(product.size))
            )
        }

        // Apply sorting
        if (sortBy === 'best-selling') {
            filteredModels.sort((a, b) => b.sold - a.sold)
        } else if (sortBy === 'alphabet-az') {
            filteredModels.sort((a, b) => a.name.localeCompare(b.name))
        } else if (sortBy === 'alphabet-za') {
            filteredModels.sort((a, b) => b.name.localeCompare(a.name))
        } else if (sortBy === 'price-low-high') {
            filteredModels.sort((a, b) => a.price - b.price)
        } else if (sortBy === 'price-high-low') {
            filteredModels.sort((a, b) => b.price - a.price)
        } else if (sortBy === 'date-latest') {
            filteredModels.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
        } else if (sortBy === 'date-oldest') {
            filteredModels.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())
        }

        setModels(filteredModels) // Update the state with the filtered and sorted array
    }, [sortBy, selectedSizes]) // Re-run when sortBy, selectedSizes, or originalModels changes

    if (loading) {
        return (
            <div className='flex items-center justify-center w-full h-screen'>
                <LoaderCircle className='animate-spin' width={50} height={50} />
            </div>
        )
    }
    return (
        <div className="w-full py-2 px-4 lg:px-10">
          <div className='flex items-center justify-between gap-2 mb-4 text-xs lg:text-base'>
            <div className='flex items-center gap-2'>
                <h1 className='text-slate-500'>FILTER:</h1>
                <DropdownMenu>
                    <DropdownMenuTrigger className='flex items-center gap-2 text-slate-500'>
                        <h1>SIZE</h1>
                        <ChevronDown width={24} height={24} />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <div className="flex flex-col gap-2 p-4">
                            <div className="flex items-center gap-2">
                                <Checkbox
                                    id="size-s"
                                    checked={selectedSizes.includes("Size S")}
                                    onClick={() => handleSizeChange("Size S")}
                                />
                                <label htmlFor="size-s">Size S</label>
                            </div>
                            <div className="flex items-center gap-2">
                                <Checkbox
                                    id="size-m"
                                    checked={selectedSizes.includes("Size M")}
                                    onClick={() => handleSizeChange("Size M")}
                                />
                                <label htmlFor="size-m">Size M</label>
                            </div>
                            <div className="flex items-center gap-2">
                                <Checkbox
                                    id="size-l"
                                    checked={selectedSizes.includes("Size L")}
                                    onClick={() => handleSizeChange("Size L")}
                                />
                                <label htmlFor="size-l">Size L</label>
                            </div>
                            <div className="flex items-center gap-2">
                                <Checkbox
                                    id="one-size"
                                    checked={selectedSizes.includes("ONE SIZE")}
                                    onClick={() => handleSizeChange("ONE SIZE")}
                                />
                                <label htmlFor="one-size">One Size</label>
                            </div>
                        </div>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <div className='flex items-center gap-2'>
                <h1 className='text-slate-500'>SORT BY</h1>
                <Select onValueChange={handleSortChange}> {/* Use handleSortChange */}
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Featured" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectItem value="none">Sort by</SelectItem> {/* Clear sorting */}
                            <SelectItem value="best-selling">Best Selling</SelectItem>
                            <SelectItem value="alphabet-az">Alphabet A-Z</SelectItem>
                            <SelectItem value="alphabet-za">Alphabet Z-A</SelectItem>
                            <SelectItem value="price-low-high">Price, Low to High</SelectItem>
                            <SelectItem value="price-high-low">Price, High to Low</SelectItem>
                            <SelectItem value="date-latest">Date, New To Old</SelectItem>
                            <SelectItem value="date-oldest">Date, Old To New</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
          </div>
          <div className='flex justify-center w-full flex-wrap lg:px-10 lg:gap-10'>
            { models ? models.map((model,index) => (
              <ModelCard key={index} model={model}/>
            )) : (
              <div>No model</div>
            )}
          </div>
          {/* <div>
            <PaginationComponent/>
          </div> */}
          </div>
    )
}

export default ShopAllPage