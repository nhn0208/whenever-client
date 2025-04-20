import axios from 'axios';

const httpRequest = axios.create({
    baseURL: 'https://blog-woad-kappa-78.vercel.app',
    withCredentials: true,
    headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' },
});
export const get = async (path:string, config = {}) => {
    try {
        const response = await httpRequest.get(path, config);
        return response.data;
    } catch (error:any) {
        if (error.response && error.response.status === 401) {
            
        }
    }
};
export const post = async (path: string, body = {}, config = {}) => {
    try {
        const response = await httpRequest.post(path, body, config);
        
        return response.data;
    } catch (error:any) {
        if (error.response && error.response.status === 401) {
           
        } else {
            
        }
    }
};
export const del = async (path:any, config = {}) => {
    try {
        const response = await httpRequest.delete(path, config);
        return response.data;
    } catch (error:any) {
        if (error.response && error.response.status === 401) {
            
        } else {
            
        }
    }
};
export const put = async (path:any, body = {}, config = {}) => {
    try {
        const response = await httpRequest.put(path, body, config);
        return response.data;
    } catch (error:any) {
        if (error.response && error.response.status === 401) {
            
        } else {
            
        }
    }
};
export const patch = async (path:any, body = {}, config = {}) => {
    try {
        const response = await httpRequest.patch(path, body, config);
        return response.data;
    } catch (error:any) {
        if (error.response && error.response.status === 401) {
            
        } else {
            
        }
    }
};