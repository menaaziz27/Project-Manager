import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000', withCredentials: true });

export const register = data => API.post('/api/auth/register', data);
export const login = data => API.post('/api/auth/login', data);
export const logout = () => API.get('/api/auth/logout');

export const getProjects = () => API.get('/api/projects/me');
export const getProjectWithTodos = id => API.get(`/api/projects/${id}`);
export const fetchTasks = projectId => API.get(`/api/projects/${projectId}/tasks`);
// export const createProject= (projectId, todoId) => API.get(`/api/projects/${projectId}/todos/${todoId}`);
export const createTask = (projectId, content) => API.post(`/api/projects/${projectId}/tasks`, content);
