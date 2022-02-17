import axios from "axios";

export const updateProfile = (token, body, id) => {
    const url = `${process.env.NEXT_PUBLIC_HOST}user/edit`
    // console.log(body)
    return axios.patch(url, body, {
        headers: {
            "x-access-token": token,
        }
    })
}