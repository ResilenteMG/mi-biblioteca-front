import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getBooks, deleteBook } from '../../services/bookService';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

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
        <div className='bg-[#f4f1ec] min-h-screen flex flex-col'>
            <Navbar />
            <main className='flex-1 max-w-6xl mx-auto w-full px-8 py-12'>
                <div className='flex items-center justify-between mb-10'>
                    <h2 className='font-serif text-4xl font-bold text-gray-800'>Libros</h2>
                    <button
                        onClick={() => navigate('/books/new')}
                        className='font-mono text-xs tracking-widest text-white bg-gray-800 hover:bg-gray-600 transition-colors px-4 py-2'
                    >
                        + NUEVO LIBRO
                    </button>
                </div>

                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6'>
                    {books.map(book => (
                        <div key={book.id} className='flex flex-col gap-2 group'>
                            <img
                                src={book.image || 'https://via.placeholder.com/200x300?text=Sin+portada'}
                                alt={book.title}
                                referrerPolicy='no-referrer'
                                className='w-full h-64 object-cover shadow-sm group-hover:shadow-md transition-shadow'
                            />
                            <p className='font-mono text-xs tracking-widest text-gray-800 mt-1'>{book.title}</p>
                            <p className='font-mono text-xs tracking-widest text-gray-400'>
                                {book.author ? `${book.author.name} ${book.author.surname}` : ''}
                            </p>
                            <p className='font-mono text-xs tracking-widest text-gray-400'>{book.category} · {book.publicationYear}</p>
                            <div className='flex gap-2 mt-1'>
                                <button
                                    onClick={() => navigate(`/books/${book.id}/edit`)}
                                    className='font-mono text-xs tracking-widest text-gray-700 border border-gray-400 px-2 py-1 hover:bg-gray-100 transition-colors'
                                >
                                    EDITAR
                                </button>
                                <button
                                    onClick={() => handleDelete(book.id)}
                                    className='font-mono text-xs tracking-widest text-white bg-gray-700 px-2 py-1 hover:bg-red-600 transition-colors'
                                >
                                    ELIMINAR
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default BookList;
