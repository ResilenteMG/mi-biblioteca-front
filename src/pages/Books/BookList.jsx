import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getBooks, deleteBook } from '../../services/bookService';

const BookList = () => {
    const [books, setBooks] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getBooks().then(setBooks).catch(err => console.error(err));
    }, []);

    const handleDelete = (id) => {
        if (confirm('¿Eliminar este libro?')) {
            deleteBook(id).then(() =>
                setBooks(prev => prev.filter(b => b.id !== id))
            );
        }
    };

    return (
        <div className="p-8">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold">Libros</h2>
                <button
                    onClick={() => navigate('/books/new')}
                    className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                    + Nuevo libro
                </button>
            </div>
            <div className="space-y-4">
                {books.map(book => (
                    <div key={book.id} className="p-4 border rounded flex justify-between items-center">
                        <div className="flex gap-4 items-center">
                            {book.image && <img src={book.image} alt={book.title} className="w-16 h-20 object-cover rounded" />}
                            <div>
                                <p className="font-bold text-lg">{book.title}</p>
                                <p className="text-gray-600">ISBN: {book.isbn} · {book.publicationYear}</p>
                                <p className="text-gray-500 text-sm">{book.category}</p>
                                {book.author && <p className="text-sm text-gray-500">Autor: {book.author.name} {book.author.surname}</p>}
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <button
                                onClick={() => navigate(`/books/${book.id}/edit`)}
                                className="bg-blue-500 text-white px-3 py-1 rounded"
                            >
                                Editar
                            </button>
                            <button
                                onClick={() => handleDelete(book.id)}
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

export default BookList;
