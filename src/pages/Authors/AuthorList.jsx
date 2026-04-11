import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuthors, deleteAuthor } from '../../services/authorService';

const AuthorList = () => {
    const [authors, setAuthors] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getAuthors().then(setAuthors).catch(err => console.error(err));
    }, []);

    const handleDelete = (id) => {
        if (confirm('¿Eliminar este autor?')) {
            deleteAuthor(id).then(() =>
                setAuthors(prev => prev.filter(a => a.id !== id))
            );
        }
    };

    return (
        <div className="p-8">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold">Autores</h2>
                <button
                    onClick={() => navigate('/authors/new')}
                    className="bg-green-600 text-white px-4 py-2 rounded"
                >
                    + Nuevo autor
                </button>
            </div>
            <div className="space-y-4">
                {authors.map(author => (
                    <div key={author.id} className="p-4 border rounded flex justify-between items-center">
                        <div>
                            <p className="font-bold text-lg">{author.name} {author.surname}</p>
                            <p className="text-gray-600">{author.nationality} · {author.birthYear} · {author.category}</p>
                            <p className="text-sm text-gray-500">{author.alive ? 'Vivo' : 'Fallecido'}</p>
                        </div>
                        <div className="flex gap-2">
                            <button
                                onClick={() => navigate(`/authors/${author.id}/edit`)}
                                className="bg-blue-500 text-white px-3 py-1 rounded"
                            >
                                Editar
                            </button>
                            <button
                                onClick={() => handleDelete(author.id)}
                                className="bg-red-500 text-white px-3 py-1 rounded"
                            >
                                Eliminar
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AuthorList;
