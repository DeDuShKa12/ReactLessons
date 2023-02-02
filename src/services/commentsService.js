import {axiosServices} from "./axiosServices";
import {urls} from "../config";

const commentsService = {
    getAll:()=> axiosServices.get(urls.comments)
}
export {commentsService}