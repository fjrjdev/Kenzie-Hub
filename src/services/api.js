import axios from "axios";

export const ApiData = axios.create({
  baseURL: "https://kenziehub.herokuapp.com",
});
