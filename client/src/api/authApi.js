import api from './axios';

export const fetchMe = async () => {
  const { data } = await api.get('/auth/me');
  return data;
};

export const getUsers = async () => {
  const { data } = await api.get('/auth/users');
  return data;
};

export const updateUserRole = async (uid, role) => {
  const { data } = await api.put(`/auth/role/${uid}`, { role });
  return data;
};
