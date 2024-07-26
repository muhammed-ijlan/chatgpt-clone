import axios from 'axios';

// Create an Axios instance
const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_APP_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Request Interceptor
axiosInstance.interceptors.request.use(
    (config) => {
        // Add auth token to headers before request is sent
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        // Do something with request error
        return Promise.reject(error);
    }
);

// Response Interceptor
axiosInstance.interceptors.response.use(
    (response) => {
        // Any status code that lies within the range of 2xx causes this function to trigger
        return response;
    },
    (error) => {
        // Any status codes that falls outside the range of 2xx causes this function to trigger
        if (error.response && error.response.status === 401) {
            // Handle unauthorized error, for example, redirect to login
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
