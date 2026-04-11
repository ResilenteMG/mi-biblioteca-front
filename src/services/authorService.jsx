import axios from 'axios';


const BASE_URL = '/api';

export const getAuthors = () =>
    axios.get(`${BASE_URL}/authors`).then(res => res.data);

export const getAuthorById = (id) =>
    axios.get(`${BASE_URL}/authors/${id}`).then(res => res.data);

export const createAuthor = (authorData) =>
    axios.post(`${BASE_URL}/authors/new`, authorData).then(res => res.data);

export const updateAuthor = (id, authorData) =>
    axios.put(`${BASE_URL}/authors/${id}`, authorData).then(res => res.data);

export const deleteAuthor = (id) =>
    axios.delete(`${BASE_URL}/authors/${id}`);

export const getAuthorsByCategory = (category) =>
    axios.get(`${BASE_URL}/authors/category/${category}`).then(res => res.data);

