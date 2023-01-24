import axios from "axios";
import {axiosServices} from "./axiosServices";
import {urls} from "../configs";

const carServices = {
    getAll: () => axiosServices.get(urls.cars),
    create: (newCar) => axiosServices.post(urls.cars, newCar),
    updateById: (id, newDate) => axiosServices.put(`${urls.cars}/${id}`, newDate),
    deleteById: (id) => axiosServices.delete(`${urls.cars}/${id}`)
}

export {
    carServices
}