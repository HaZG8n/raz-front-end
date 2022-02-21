import axios from "axios";

export const updateProfile = (token, body) => {
  const url = `${process.env.NEXT_PUBLIC_HOST}user/edit`;
  // console.log(body)
  return axios.patch(url, body, {
    headers: {
      "x-access-token": token,
    },
  });
};

export const editPassword = (token, body) => {
  const url = `${process.env.NEXT_PUBLIC_HOST}user/edit/password`;
  return axios.patch(url, body, {
    headers: {
      "x-access-token": token,
    },
  });
};
