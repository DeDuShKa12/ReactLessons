import axios from "axios";
import {baseURL} from "../config";

const axiosServices = axios.create({baseURL})

export {axiosServices}