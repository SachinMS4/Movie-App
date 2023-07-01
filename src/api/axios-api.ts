import axios from "axios";

export const get = (url: string, params: any = {}) => {
    return axios.get(url, {
        headers: {
            accept: 'application/json',
        },
        params: {api_key: '1001cf476e9abff27f533980790d59a8', ...params}
    });
};