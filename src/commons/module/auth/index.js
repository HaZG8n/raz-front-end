import axios from "axios";

export const login = (body) => {
  const URL = `${process.env.NEXT_PUBLIC_HOST}auth/login`;
  return axios.post(URL, body);
};

export const SignUp = (body) => {
  const URL = `${process.env.NEXT_PUBLIC_HOST}auth/signup`;
  return axios.post(URL, body);
};

export const logout = (token) => {
  const URL = `${process.env.NEXT_PUBLIC_HOST}auth/logout`;
  return axios.post(URL, token);
};

export const forgotPass = (body) => {
  const URL = `${process.env.NEXT_PUBLIC_HOST}auth/forgotpassword `;
  return axios.post(URL, body);
};

export const resetPass = (body) => {
  const URL = `${process.env.NEXT_PUBLIC_HOST}auth/resetpassword `;
  return axios.post(URL, body);
};

export const GetUserProfile = (token) => {
  const URL = `${process.env.NEXT_PUBLIC_HOST}user/profile `;
  return axios.get(URL, { headers: { "x-access-token": token } });
};
