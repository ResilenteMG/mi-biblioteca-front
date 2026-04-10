import React, { useState } from 'react';
import axios from 'axios';

const AuthorForm = () => {
    const [name, setName] = useState('');
    const [nationality, setNationality] = useState('');

    const saveAuthor = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/api/authors', { name, nationality })
            .then(() => alert("Autor guardado"))
            .catch(err => console.log(err));
    };

    return (
        <form onSubmit={saveAuthor} className="p-8 space-y-4">
            <input placeholder="Name" onChange={e => setName(e.target.value)} className="border p-2 w-full" />
            <input placeholder="Nationality" onChange={e => setNationality(e.target.value)} className="border p-2 w-full" />
            <button type="submit" className="bg-green-500 text-white p-2">Save Author</button>
        </form>
    );
};

export default AuthorForm;