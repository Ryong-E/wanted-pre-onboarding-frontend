import axios from 'axios';

const authApi = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

export const loginUser = async (email, password) => {
  try {
    console.log(process.env.REACT_APP_BASE_URL);
    const data = await authApi.post('auth/signin', { email, password });
    return data;
  } catch (error) {
    throw error.response;
  }
};

export const registerUser = async (email, password) => {
  try {
    const data = await authApi.post('auth/signup', { email, password });
    return data;
  } catch (error) {
    throw error.response;
  }
};

authApi.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  },
);
