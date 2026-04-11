import axios from 'axios';

const BASE_URL = '/api';

export const getBooks = () =>
    axios.get(`${BASE_URL}/books`).then(res => res.data);

export const getBookById = (id) =>
    axios.get(`${BASE_URL}/books/${id}`).then(res => res.data);

export const createBook = (bookData) =>
    axios.post(`${BASE_URL}/books`, bookData).then(res => res.data);

export const updateBook = (id, bookData) =>
    axios.put(`${BASE_URL}/books/${id}`, bookData).then(res => res.data);

export const deleteBook = (id) =>
    axios.delete(`${BASE_URL}/books/${id}`);

export const getBooksByCategory = (category) =>
    axios.get(`${BASE_URL}/books/category/${category}`).then(res => res.data);
