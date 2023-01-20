import {axiosService} from "./axiosService";

const axiosUsers = {
    getAll: () => axiosService.get('/users'),
    // getById: (id) => axiosService.get(`/users/${id}`)
    getPosts: () => axiosService.get(`/posts`)
}

export {axiosUsers}