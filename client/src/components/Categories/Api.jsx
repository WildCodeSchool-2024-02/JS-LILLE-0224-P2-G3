import axios from "axios";

const key = "fb5c5861fcf14a6c906d2a2ee9ad282b"
const axiosCreate = axios.create({
    baseURL: 'https://api.rawg.io/api'
})

const getCategories = axiosCreate.get(`/genres?key=${key}`);


const getByName = (search) => axiosCreate.get(`/games?search=${search}&key=${key}`)

export default {
    getCategories,
    getByName
}