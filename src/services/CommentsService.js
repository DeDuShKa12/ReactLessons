import {axiosService} from "./axiosService";
import {urls} from "../configs";

const commentsService = {
    getAll: ()=> axiosService(urls.comments)
}

export {
    commentsService
}