import axios from "axios";


export const addProduct = (body, token) => {
    const URL = process.env.NEXT_PUBLIC_HOST + 'product/createproduct'
    return axios.post(URL, body, { headers: { 'x-access-token': token } })
}
export const GetProductDetail = (id, token) => {
  const URL = `${process.env.NEXT_PUBLIC_HOST}product/${id}`;
  return axios.get(URL, { headers: { "x-access-token": token } });
};

export const getAllProduct = () => {
  const URL = `${process.env.NEXT_PUBLIC_HOST}product/`;
  return axios.get(URL);
};
