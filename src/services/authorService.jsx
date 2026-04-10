import axios from 'axios';

// endpoints del backend
const BASE_URL = 'http://localhost:8080/api';

export const getAuthors = () => 
    axios.get(`${BASE_URL}/authors`).then(res => res.data);

export const getAuthorById = (id) => 
    axios.get(`${BASE_URL}/authors/${id}`).then(res => res.data);

export const createAuthor = (authorData) => 
    axios.post(`${BASE_URL}/authors`, authorData).then(res => res.data);

export const deleteAuthor = (id) => 
    axios.delete(`${BASE_URL}/authors/${id}`);