import * as httpRequest from '@/lib/db'


export const getProductBySlug = async (slug: string) => {
    try {
        let path=`/products/${slug}`
        const response = await httpRequest.get(path)
        
        return response.data
    }
    catch (error) {
        console.log("Error fetching data",error);
        
    }
}

export const getProductById = async (_id: string) => {
    try {
        let path=`/products/${_id}`
        const response = await httpRequest.get(path)
        
        return response.data
    }
    catch (error) {
        console.log("Error fetching data",error);
        
    }
}

export const getProductByModelId = async (id: string) => {
    try {
        let path=`/products/model/${id}`
        const response = await httpRequest.get(path)
        
        return response.data
    }
    catch (error) {
        console.log("Error fetching data",error);
        
    }
}

export const getProductByModelSlug = async (slug: string) => {
    try {
        let path=`/products/model/${slug}`
        const response = await httpRequest.get(path)
        
        return response.data
    }
    catch (error) {
        console.log("Error fetching data",error);
        
    }
}