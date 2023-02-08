import axios from 'axios';
const todoApi = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export const getTodosApi = async () => {
  const result = await todoApi.get('todos', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
      'Content-Type': 'application/json',
    },
  });
  return result;
};

export const createTodoApi = async (todo) => {
  const result = await todoApi.post(
    'todos',
    { todo },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
        'Content-Type': 'application/json',
      },
    },
  );
  return result;
};

export const updateTodoApi = async (todo, id, isCompleted) => {
  const result = await todoApi.put(
    `todos/${id}`,
    { todo, isCompleted },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
        'Content-Type': 'application/json',
      },
    },
  );
  return result;
};

export const deleteTodoApi = async (id) => {
  const result = await todoApi.delete(`todos/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
      'Content-Type': 'application/json',
    },
  });
  return result;
};

todoApi.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  },
);
