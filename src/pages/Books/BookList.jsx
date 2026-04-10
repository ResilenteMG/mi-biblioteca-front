import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AuthorList = () => {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/authors')
            .then(res => setAuthors(res.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div className="p-8">
            <h2 className="text-3xl font-bold mb-6">Authors</h2>
            <div className="space-y-4">
                {authors.map((author) => (
                    <div key={author.id} className="p-4 border-b">
                        <p className="font-bold text-lg">{author.name}</p>
                        <p className="text-gray-600">{author.nationality}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AuthorList;