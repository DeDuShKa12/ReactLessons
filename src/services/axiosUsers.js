import {axiosService} from "./axiosService";

const axiosUsers = {
    getAll: () => axiosService.get('/users'),
    getPosts: (id) => axiosService.get(`/posts?userId=${id}`)
}

export {axiosUsers}