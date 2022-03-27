import axios from "axios";

export const CheckOutProduct = (body, token) => {
  const URL = `${process.env.NEXT_PUBLIC_HOST}checkout/createcheckout`;
  return axios.post(URL, body, { headers: { "x-access-token": token } });
};

export const getTrackOrder = (body, token) => {
  console.log("BODY UTILS", body);
  console.log("TOKEN UTILS", token);
  const URL = `${process.env.NEXT_PUBLIC_HOST}checkout/ordertracking/${body}`;
  return axios.get(URL, { headers: { "x-access-token": token } });
};
