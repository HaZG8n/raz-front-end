import axios from "axios";

export const addProduct = (body, token) => {
  const URL = `${process.env.NEXT_PUBLIC_HOST}product/createproduct`;
  return axios.post(URL, body, { headers: { "x-access-token": token } });
};
export const GetProductDetail = (id, token) => {
  const URL = `${process.env.NEXT_PUBLIC_HOST}product/${id}`;
  return axios.get(URL, { headers: { "x-access-token": token } });
};

export const getAllProduct = (page) => {
  const URL = `${process.env.NEXT_PUBLIC_HOST}product?sort=ASC&per_page=9&page=${page}`;
  return axios.get(URL);
};


export const getMyProduct = (token) => {
  const URL = `${process.env.NEXT_PUBLIC_HOST}product/getproductbyseler`
  return axios.get(URL, { headers: { "x-access-token": token } })
}

export const getOrder = (token) => {
  const URL = `${process.env.NEXT_PUBLIC_HOST}checkout`;
  return axios.get(URL, { headers: { "x-access-token": token } });
};

