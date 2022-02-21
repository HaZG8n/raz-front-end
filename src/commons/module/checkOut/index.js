import axios from "axios";

export const CheckOutProduct = (body, token) => {
  const URL = `${process.env.NEXT_PUBLIC_HOST}checkout/createcheckout`;
  return axios.post(URL, body, { headers: { "x-access-token": token } });
};

export const getTrackOrder = (body, token) => {
  const URL = `${process.env.NEXT_PUBLIC_HOST}checkout/ordertracking`;
  return axios.get(URL, body, { headers: { "x-access-token": token } });
};
