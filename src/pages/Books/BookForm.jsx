import React, { useState } from 'react';
import axios from 'axios';

const BookForm = () => {
    const [title, setTitle] = useState('');
    const [isbn, setIsbn] = useState('');
    const [year, setYear] = useState('');

    const saveBook = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/api/books', { title, isbn, year })
            .then(() => alert("Libro guardado"))
            .catch(err => console.log(err));
    };

    return (
        <form onSubmit={saveBook} className="p-8 space-y-4">
            <input placeholder="Title" onChange={e => setTitle(e.target.value)} className="border p-2 w-full" />
            <input placeholder="ISBN" onChange={e => setIsbn(e.target.value)} className="border p-2 w-full" />
            <input placeholder="Year" type="number" onChange={e => setYear(e.target.value)} className="border p-2 w-full" />
            <button type="submit" className="bg-blue-500 text-white p-2">Save Book</button>
        </form>
    );
};

export default BookForm;