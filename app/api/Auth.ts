import * as httpRequest from '@/lib/db'

export const login = async (body: any) => {
    try {
        let path=`/auth/login`
        const response = await httpRequest.post(path,body)
        //console.log(response)
        return response
    }
    catch (error) {
        console.log("Error fetching data",error);
        
    }
}
export const isLogin = async () => {
    try {
        let path=`/auth/check-auth`
        const response = await httpRequest.get(path)
        //console.log(response)
        return response.data
    }
    catch (error) {
        console.log("Error fetching data",error);
        
    }
}

export const logout = async () => {
    try {
        let path=`/auth/logout`
        const response = await httpRequest.post(path)
        //console.log(response)
        return response.message
    }
    catch (error) {
        console.log("Error fetching data",error);
        
    }
}

export const requestOTP = async (body : any) => {
    try {
        let path=`/auth/signup/request-otp`
        const response = await httpRequest.post(path,body)
        //console.log(response)
        return response
    }
    catch (error) {
        console.log("Error fetching data",error);
        
    }
}

export const verifyOTP = async (body : any) => {
    try {
        let path=`/auth/signup/verify-otp`
        const response = await httpRequest.post(path,body)
        //console.log(response)
        return response
    }
    catch (error) {
        console.log("Error fetching data",error);
        
    }
}

export const signUp = async (body : any) => {
    try {
        let path=`/auth/signup/create-user`
        const response = await httpRequest.post(path,body)
        //console.log(response)
        return response
    }
    catch (error) {
        console.log("Error fetching data",error);
        
    }
}