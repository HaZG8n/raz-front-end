import axios from "axios";

const URL = process.env.NEXT_PUBLIC_HOST

export const addProduct = (body, token) => {
    const urlAddProduct = URL + 'product/createproduct'
    return axios.post(urlAddProduct, body, { headers: { 'x-access-token': token } })
}