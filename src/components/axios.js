import axios from "axios";

export const request = axios.create({
  baseURL: "https://collinsoduorportfolio.herokuapp.com/api/v1/",
});
