import axios from "axios";
const AxiosInition = () => {
  axios.defaults.headers.common["Authorization"] =
    "1.c2Vya2Fua2FyYWNhc3VsdUBnbWFpbC5jb20=.xPYeK4m9d99AM1KI9xX6RDPK";
  axios.defaults.baseURL = "https://musicdb.jobs.otsimo.com/api/";
};
export default AxiosInition;
