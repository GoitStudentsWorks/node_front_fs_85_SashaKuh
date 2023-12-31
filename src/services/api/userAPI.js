import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://backend-water.onrender.com/api/',
});

export const setAuthHeader = token => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  localStorage.setItem('token', token);
};

const removeToken = () => {
  delete instance.defaults.headers.common['Authorization'];
  localStorage.removeItem('token');
};

export const clearAuthHeader = () => {
  instance.defaults.headers.common.Authorization = '';
  localStorage.removeItem('token');
};

export const signup = async newUser => {
  const { data } = await instance.post('/auth/signup', newUser);
  setAuthHeader(data.token);
  return data;
};

export const signin = async body => {
  const { data } = await instance.post('/auth/signin', body);
  setAuthHeader(data.token);

  return data;
};

export const signout = async () => {
  await instance.post('auth/signout');
  removeToken();
};

export const refreshUser = async token => {
  setAuthHeader(token);
  const { data } = await instance.get('users/current');

  return data;
};

export const updateAvatar = async (newPhotoFile, token) => {
  setAuthHeader(token);
  const { data } = await instance.patch('users/avatar', newPhotoFile, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return data.avatar;
};

export const updateUsers = async (updateUser, token) => {
  setAuthHeader(token);
  const { data } = await instance.patch(`users/update`, updateUser);

  return data;
};

export const addWaterRate = async (body, token) => {
  setAuthHeader(token);
  const { data } = await instance.patch(`water/rate`, body);

  return data;
};
