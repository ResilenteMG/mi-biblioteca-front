import axios from 'axios';

const API_URL = 'http://localhost:8080/api/authors';

export const getAuthors = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createAuthor = async (authorData) => {
  const response = await axios.post(`${API_URL}/new`, authorData);
  return response.data;
};