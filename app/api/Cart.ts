import * as httpRequest from '@/lib/db'


export const getAllCartByCustomerId = async (customerId: string) => {
    try {
        let path = `/cart/${customerId}`
        const response = await httpRequest.get(path);
        //console.log(response.data);
        
        return response.data;
    } catch (error) {
        console.log("Error fetching data", error);
    }
}

export const addProductToCart = async (body : {}) => {
    try {
        let path=`/cart/add`
        const response = await httpRequest.post(path,body)
        //console.log(response)
    }
    catch (error) {
        console.log("Error fetching data",error);
        
    }
}

export const increaseProductInCart = async (id: string) => {
    try {
        let path = `/cart/increase/${id}`
        const response = await httpRequest.patch(path)
        //console.log(response.data)
        //return response.data
    }
    catch (error) {
        console.log("Error fetching data", error)
    }
}

export const decreaseProductInCart = async (id: string) => {
    try {
        let path = `/cart/decrease/${id}`
        const response = await httpRequest.patch(path)
       // console.log(response.data)
        //return response.data
    }
    catch (error) {
        console.log("Error fetching data", error)
    }
}

export const deleteProductInCart = async (id: string) => {
    try {
        let path = `/cart/delete/${id}`
        await httpRequest.del(path)
       // console.log(response.data)
        //return response.data
    }
    catch (error) {
        console.log("Error fetching data", error)
    }
}