import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:3000/users/";

const getPublicContent = () => {
  return axios.get(`${API_URL}movies`);
};

const getUserDetails = () => {
  return axios.get(`${API_URL}details`, { headers: authHeader() });
};

const userService = {
  getPublicContent,
  getUserDetails,
};

export default userService;
