import axios from "axios";

const axiosPrivate = axios.create({});

axiosPrivate.interceptors.request.use(function (config) {
    // Do something before request is sent
    if (!config.headers.authorization) {
        config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    }
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

export default axiosPrivate;