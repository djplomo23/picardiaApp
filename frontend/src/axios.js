import Axios from 'axios';

export const axios = Axios.create({
    baseURL: 'https://backpicardias.herokuapp.com',
    headers: { 'Content-Type': 'application/json' },
    timeout: 3000,
});