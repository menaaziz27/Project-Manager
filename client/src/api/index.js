import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000', withCredentials: true });

export const register = data => API.post('/api/auth/register', data);
export const login = data => API.post('/api/auth/login', data);
export const logout = () => API.get('/api/auth/logout');

export const getProjects = () => API.get('/api/projects/me');
export const createProject = project => API.post('/api/projects', project);
export const deleteProject = id => API.delete(`/api/projects/${id}`);
export const getProjectWithTodos = id => API.get(`/api/projects/${id}`);
export const searchForProject = term => API.get(`/api/projects?q=${term}`);

export const fetchTasks = projectId => API.get(`/api/projects/${projectId}/tasks`);
export const createTask = (projectId, content) => API.post(`/api/projects/${projectId}/tasks`, content);
export const deleteTask = taskId => API.delete(`/api/tasks/${taskId}`);
export const updateTask = (taskId, data) => API.put(`/api/tasks/${taskId}`, data);
