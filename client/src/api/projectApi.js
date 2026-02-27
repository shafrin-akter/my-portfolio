import api from './axios';

export const getProjects = async (page = 1, limit = 12, tech) => {
  const params = { page, limit };
  if (tech) params.tech = tech;
  const { data } = await api.get('/projects', { params });
  return data;
};

export const getFeaturedProjects = async () => {
  const { data } = await api.get('/projects/featured');
  return data;
};

export const getProject = async (id) => {
  const { data } = await api.get(`/projects/${id}`);
  return data;
};

export const createProject = async (formData) => {
  const { data } = await api.post('/projects', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return data;
};

export const updateProject = async (id, formData) => {
  const { data } = await api.put(`/projects/${id}`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return data;
};

export const deleteProject = async (id) => {
  const { data } = await api.delete(`/projects/${id}`);
  return data;
};
