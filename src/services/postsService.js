import {axiosServices} from "./axiosServices";
import {urls} from "../config";

const postsService = {
    getAll: ()=> axiosServices.get(urls.posts)
}

export {postsService}