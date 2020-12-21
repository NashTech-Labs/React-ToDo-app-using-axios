import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://5fd080cc1f23740016631bc7.mockapi.io'
});

axiosInstance.defaults.headers.common['Content-Type'] = 'application/json';

axiosInstance.interceptors.response.use(response => {
    return response;
}, error => {
    const {status, statusText, config} = error.response;

    if (error.message === 'Network Error' && !error.response) {
        alert(error.message);
    }
    if (status === 404) {
        alert(status + ': ' + statusText);
    }
    if (status === 400 && (config.method === 'get' || config.method === 'post')) {
        alert(status + ': ' + statusText);
    }
    if (status === 500) {
        alert(status + ': ' + statusText);
    }
    if (JSON.stringify(error.config.hasOwnProperty('errorHandle') && error.config.errorHandle === false)) {
        return Promise.reject(error.message);
    }
    if (error.response) {
        return error.response.data.message;
    }
});

export default axiosInstance;
