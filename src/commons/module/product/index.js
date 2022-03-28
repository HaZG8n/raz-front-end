import axios from "axios";

export const addProduct = (body, token) => {
  const URL = `${process.env.NEXT_PUBLIC_HOST}product/createproduct`;
  return axios.post(URL, body, {
    headers: { "x-access-token": token, "content-type": "multipart/form-data" },
  });
};
export const GetProductDetail = (id, token) => {
  const URL = `${process.env.NEXT_PUBLIC_HOST}product/${id}`;
  return axios.get(URL, { headers: { "x-access-token": token } });
};

export const getAllProduct = (param) => {
  console.log("utils",param);
  const queryParam = {
    search: (param.search ?? '').replace('+', ' '),
    sortBy: param.sortBy ?? "createdAt",
    sort: param.sort??"ASC",
    per_page: param.per_page ?? '9',
    page: param.page ?? '1',
    price:param.price??20000000
  }
  console.log("utils 2",queryParam);
  const URL = `${process.env.NEXT_PUBLIC_HOST}product?search=${queryParam.search}&sortBy=${queryParam.sortBy}&sort=${queryParam.sort}&per_page=${queryParam.per_page}&page=${queryParam.page}&min=0&max=${queryParam.price}`;
  return axios.get(URL);
};

export const getMyProduct = (token) => {
  const URL = `${process.env.NEXT_PUBLIC_HOST}product/getproductbyseler`;
  return axios.get(URL, { headers: { "x-access-token": token } });
};

export const deleteMyProduct = (id, token) => {
  const URL = `${process.env.NEXT_PUBLIC_HOST}product/${id}`;
  return axios.delete(URL, { headers: { "x-access-token": token } });
};

export const getOrder = (token) => {
  const URL = `${process.env.NEXT_PUBLIC_HOST}checkout`;
  return axios.get(URL, { headers: { "x-access-token": token } });
};

export const getProduct = (filter, sort, page) => {
  const URL = `${process.env.NEXT_PUBLIC_HOST}product?sortBy=${filter}&sort=${sort}&per_page=9&page=${page}`;
  return axios.get(URL);
};

export const searchProduct = (query) => {
  const URL = `${process.env.NEXT_PUBLIC_HOST}product`;
  return axios.get(URL);
};
