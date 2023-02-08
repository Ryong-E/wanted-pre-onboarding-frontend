import axios from 'axios';

const authApi = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

export const loginUserApi = async (email, password) => {
  try {
    const data = await authApi.post('auth/signin', { email, password });
    return data;
  } catch (error) {
    throw error.response;
  }
};

export const registerUserApi = async (email, password) => {
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
