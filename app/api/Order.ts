import * as httpRequest from '@/lib/db'


export const createNewOrder = async (body: any) => {
    try {
        let path = `/order`
        const response = await httpRequest.post(path,body);
        return response
    } catch (error) {
        console.log("Error fetching data", error);
    }
}
export const getAllOrder = async (userId: string) => {
    try {
        let path = `/order/customer/${userId}`
        const response = await httpRequest.get(path);
        return response
    } catch (error) {
        console.log("Error fetching data", error);
    }
}