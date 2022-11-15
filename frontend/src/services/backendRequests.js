import axiosInstance from './axiosInstance';

export const getTestMessage = async () => {
  const res = await axiosInstance.get('/test');

  return res.data.message;
};
