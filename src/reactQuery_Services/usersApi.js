import axios from "axios";

const api = axios.create({
  baseURL: "Base_URL_HERE",
});

export const getUsers = () =>
  api.get("/users").then((response) => response.data);

export const getUser = (id) =>
  api.get(`/users/${id}`).then((response) => response.data);

// eslint-disable-next-line @typescript-eslint/no-shadow
export const updateUser = ({ id, ...updateUser }) =>
  api.put(`/users/${id}`, updateUser).then((response) => response.data);
