import axios from "axios";

export const login = (body) => {
  const URL = `${process.env.NEXT_PUBLIC_HOST}auth/login`;
  return axios.post(URL, body);
};

export const SignUp = (body) => {
  const URL = `${process.env.NEXT_PUBLIC_HOST}auth/signup`;
  return axios.post(URL, body);
};
