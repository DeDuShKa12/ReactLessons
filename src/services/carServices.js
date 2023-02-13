import {axiosServices} from "./axiosServices";
import {urls} from "../configs";

const carServices = {
    getAll: (page=1) => axiosServices.get(urls.cars.cars, {params:{page}}),
    create: (newCar) => axiosServices.post(urls.cars.cars, newCar),
    updateById: (id, page, newDate) => axiosServices.put(`${urls.cars}/${page}/${id}`, newDate),
    deleteById: (id) => axiosServices.delete(`${urls.cars}/${id}`)
}

export {
    carServices
}