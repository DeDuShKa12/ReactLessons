import {axiosServices} from "./axiosServices";
import {urls} from "../configs";


const accessTokenKey = 'access'
const refreshTokenKey = 'refresh'



const authService = {
    login: async function (cred) {
        const response = await axiosServices.post(urls.auth.login, cred);
        if (response.status === 200){
            this.setToken(response.data)
        }
        return response
    },
    refresh: async function (refresh) {
       const response = await axiosServices.post(urls.auth.refresh, {refresh});

       if (response.status === 200) {
           this.setToken(response.data)
       }
       return response
    },
    me: ()=> axiosServices.get(urls.auth.me),


    setToken: ({access, refresh}) => {
        localStorage.setItem(accessTokenKey, access)
        localStorage.setItem(refreshTokenKey, refresh)
    },
    getAccessToken: () => localStorage.getItem(accessTokenKey),
    getRefreshToken: () => localStorage.getItem(refreshTokenKey),
    deleteTokens: () => {
        localStorage.removeItem(accessTokenKey)
        localStorage.removeItem(refreshTokenKey)
    },
    isAuthenticated: () => !!localStorage.getItem(accessTokenKey)
}

export {authService}