import axios from "axios"
// import { BASE_URL, url } from "./constant"

// export const get_api = (BASE_URL, endpoint) => {
//     return axios
//         .get(BASE_URL + endpoint)
//         .then((res) => {
//             console.log(res);
//         })
// }

export const get_data = (url, endpoint) => {
    return axios
        .get(url + endpoint)
        .then((res) => {
            return res.data
        }).catch((err) => {
            console.log(err, 'errr');
            return err;
        })
}

export const post_data = (url, endpoint, data) => {
    return axios
        .post(url + endpoint, data)
        .then((res) => {
            console.log(res);
            return res.data;
        }).catch((err) => {
            console.log(err, 'errr');
            return err;
        })
}

export const delete_data = (url, endpoint, id) => {
    return axios
        .delete(url + endpoint + id)
}

export const update_data = (url, endpoint, id) => {
    return axios
        .put(url + endpoint + id)
        .then((res) => {
            console.log(res, 'update');
        })
}