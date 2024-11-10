'use client'
import { getAllModel } from '@/app/api/Model'
import ModelCard from '@/components/ModelCard'
import { ModelProps } from '@/lib/interface'
import { useState, useEffect} from 'react'

const ShopAllPage = () => {
    const [models, setModels] = useState<ModelProps[] | undefined>()

    useEffect(() => {
        getAllModel().then(data=> setModels(data))
      }, [])
  return (
    <div className='w-full'>
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

export default ShopAllPage