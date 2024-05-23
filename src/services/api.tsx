import axios from "axios";

export const client = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});



// https://dev.fakestoreapi.com     => dev
// https://stage.fakestoreapi.com   => stage
// https://fakestoreapi.com         => production