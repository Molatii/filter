import axios from "axios";

const API_URL = "http://localhost:3000/users";

const registerUser = (username, password) => {
  return axios.post(`${API_URL}/add`, {
    username,
    password,
  });
};

const login = (username, password) => {
  return axios
    .post(`${API_URL}/login`, {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
        // eslint-disable-next-line no-console
        console.log(response.data);
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  registerUser,
  login,
  logout,
};

export default authService;
