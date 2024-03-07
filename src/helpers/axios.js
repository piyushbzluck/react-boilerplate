import axios from "axios";

export const authHeaders = () => {
  const authToken =
    localStorage.getItem("token") && JSON.parse(localStorage.getItem("token"));

  return {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  };
};

const Axios = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}`,
});

export default Axios;
