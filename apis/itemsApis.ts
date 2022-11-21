import axios from "axios";

const itemsApi = axios.create({
    baseURL: '/api'
})

export default itemsApi;