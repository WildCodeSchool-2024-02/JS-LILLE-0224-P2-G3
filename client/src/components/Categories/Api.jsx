import axios from "axios";

const key = import.meta.env.API_KEY;

const axiosCreate = axios.create({
  baseURL: "https://api.rawg.io/api",
});

const getCategories = axiosCreate.get(`/genres?key=${key}`);

const getByName = (search) =>
  axiosCreate.get(`/games?search=${search}&key=${key}`);

const getGamesByGenre = (idGenre) =>
  axiosCreate.get(`/games?genres=${idGenre}&key=${key}`);

export default {
  getCategories,
  getByName,
  getGamesByGenre,
};
