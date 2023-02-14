import axios from 'axios';

const baseURL = "http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon";

const api = axios.create({
    baseURL: baseURL
});

export default api;