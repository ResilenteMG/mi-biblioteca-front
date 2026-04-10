import axios from 'axios';

// Apunta a la API 
const BASE_URL = 'http://localhost:8080/api';


export const getBooks = () => 
    axios.get(`${BASE_URL}/books`).then(res => res.data);


export const getBookById = (id) => 
    axios.get(`${BASE_URL}/books/${id}`).then(res => res.data);


export const createBook = (bookData) => 
    axios.post(`${BASE_URL}/books`, bookData).then(res => res.data);


export const deleteBook = (id) => 
    axios.delete(`${BASE_URL}/books/${id}`);