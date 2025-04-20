'use client'
import { getModelByCategory } from '@/app/api/Model'
import ModelCard from '@/components/ModelCard'
import { ModelProps } from '@/lib/interface'
import { LoaderCircle } from 'lucide-react'
import { useState, useEffect} from 'react'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const BottomsPages = () => {
  const [models, setModels] = useState<ModelProps[]>()
  const [originalModels, setOriginalModels] = useState<ModelProps[]>() // Store original data
  const [sortBy, setSortBy] = useState<string>('') // State for sorting
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    // Fetch models by category 'tees'
    getModelByCategory("bottoms").then(data => {
      setModels(data)
      setOriginalModels(data) // Store original data for sorting
      setLoading(false)
    })
  }, [])

  useEffect(() => {
    if (!originalModels) return

    let sortedModels = [...originalModels]

    // Apply sorting
    if (sortBy === 'alphabet-az') {
        sortedModels.sort((a, b) => a.name.localeCompare(b.name))
    } else if (sortBy === 'alphabet-za') {
        sortedModels.sort((a, b) => b.name.localeCompare(a.name))
    } else if (sortBy === 'price-low-high') {
        sortedModels.sort((a, b) => a.price - b.price)
    } else if (sortBy === 'price-high-low') {
        sortedModels.sort((a, b) => b.price - a.price)
    }

    setModels(sortedModels)
  }, [sortBy]) // Re-run when sortBy or originalModels changes

  const handleSortChange = (value: string) => {
    if (value === 'none') {
        setSortBy('') // Clear sorting
        setModels(originalModels) // Reset to original models
    } else {
        setSortBy(value) // Apply sorting
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <LoaderCircle className="animate-spin" size={24} />
      </div>
    )
  }
  return (
    <div className='w-full p-10'>
      <div className='flex items-center justify-end gap-2'>
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
      <div className='flex justify-center w-full flex-wrap px-10 gap-10'>
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

export default BottomsPages