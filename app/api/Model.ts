import * as httpRequest from '@/lib/db'


export const getAllModel = async () => {
    try {
        let path = '/models'
        const response = await httpRequest.get(path);
        console.log(response);
        
        return response.data;
    } catch (error) {
        console.log("Error fetching data", error);
    }
}

export const getModelBySlug = async (slug: string) => {
    try {
        let path=`/models/${slug}`
        const response = await httpRequest.get(path)
        console.log(response.data)
        return response.data
    }
    catch (error) {
        console.log("Error fetching data",error);
        
    }
}

export const getModelById = async (_id: string) => {
    try {
        let path=`/models/${_id}`
        const response = await httpRequest.get(path)
        
        return response.data
    }
    catch (error) {
        console.log("Error fetching data",error);
        
    }
}

export const getModelByCategory = async (category: string) => {
    try {
        let path=`/models/category/${category}`
        const response = await httpRequest.get(path)
        console.log(response)
        return response.data
    }
    catch (error) {
        console.log("Error fetching data",error);
        
    }
}
