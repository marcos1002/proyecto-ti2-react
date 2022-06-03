import axios from 'axios';
const {
  REACT_APP_API_URL: url
} = process.env;

const find = async id => {
  const { data } = await axios.get(`${url}/users`);
  return data;
};

const insert = async data => {
  return await axios.post(`${url}/users`, data, { headers: { 'Content-Type': 'multipart/form-data' } });
};

const findFile = async (id, file) => {
  const { data } = await axios.get(`${url}/users/${id}/${file}`, {
    responseType: 'blob'
  });
  return data;
};

const generateCard = async id => {
  await axios.get(`${url}/users/${id}/card`);
};

export default {
  find,
  insert,
  findFile,
  generateCard
};