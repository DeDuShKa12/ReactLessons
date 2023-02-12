import {axiosServices} from "./axiosServices";
import {urls} from "../configs";

const userService = {
    create: (user) => axiosServices.post(urls.users, user)
}

export {
    userService
}