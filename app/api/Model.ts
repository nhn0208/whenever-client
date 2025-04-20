import * as httpRequest from '@/lib/db'


export const getAllModel = async () => {
    try {
        let path = '/models'
        const response = await httpRequest.get(path);
        console.log(response);
        
        return response
    } catch (error) {
        console.log("Error fetching data", error);
    }
}

export const getModelBySlug = async (slug: string) => {
    try {
        let path=`/models/${slug}`
        const response = await httpRequest.get(path)
        console.log(response)
        return response
    }
    catch (error) {
        console.log("Error fetching data",error);
        
    }
}

export const getModelById = async (id: string) => {
    try {
        let path=`/models/${id}`
        const response = await httpRequest.get(path)
        
        return response
    }
    catch (error) {
        console.log("Error fetching data",error);
        
    }
}

export const getModelByCategory = async (category: string) => {
    try {
        let path=`/models/category/${category}`
        const response = await httpRequest.get(path)
        //console.log(response)
        return response
    }
    catch (error) {
        console.log("Error fetching data",error);
        
    }
}

export const getModelBySearch = async (search: string) => {
    try {
        let path=`/models/search/${search}`
        const response = await httpRequest.get(path)
        //console.log(response)
        return response
    }
    catch (error) {
        console.log("Error fetching data",error);
        
    }
}