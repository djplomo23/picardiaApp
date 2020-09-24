import Axios from 'axios';

export const axios = Axios.create({
    baseURL: process.env.PROXY,
    headers: { 'Content-Type': 'application/json' },
    timeout: 3000,
});