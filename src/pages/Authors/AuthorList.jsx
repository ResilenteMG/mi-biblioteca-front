import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuthors, deleteAuthor } from '../../services/authorService';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

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
        <div className='bg-[#f4f1ec] min-h-screen flex flex-col'>
            <Navbar />
            <main className='flex-1 max-w-6xl mx-auto w-full px-8 py-12'>
                <div className='flex items-center justify-between mb-10'>
                    <h2 className='font-serif text-4xl font-bold text-gray-800'>Autores</h2>
                    <button
                        onClick={() => navigate('/authors/new')}
                        className='font-mono text-xs tracking-widest text-white bg-gray-800 hover:bg-gray-600 transition-colors px-4 py-2'
                    >
                        + NUEVO AUTOR
                    </button>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {authors.map(author => (
                        <div key={author.id} className='bg-white border border-[#d6d0c4] p-6 flex flex-col gap-3 shadow-sm'>
                            <div>
                                <p className='font-serif text-xl font-bold text-gray-800'>
                                    {author.name} {author.surname}
                                </p>
                                <p className='font-mono text-xs tracking-widest text-gray-500 mt-1'>
                                    {author.nationality} · {author.birthYear}
                                </p>
                                <p className='font-mono text-xs tracking-widest text-gray-400'>
                                    {author.category}
                                </p>
                                <p className='font-mono text-xs tracking-widest text-gray-400 mt-1'>
                                    {author.alive ? 'Vivo' : 'Fallecido'}
                                </p>
                            </div>
                            <div className='flex gap-2 mt-auto pt-3 border-t border-[#d6d0c4]'>
                                <button
                                    onClick={() => navigate(`/authors/${author.id}/edit`)}
                                    className='font-mono text-xs tracking-widest text-gray-700 border border-gray-400 px-3 py-1 hover:bg-gray-100 transition-colors'
                                >
                                    EDITAR
                                </button>
                                <button
                                    onClick={() => handleDelete(author.id)}
                                    className='font-mono text-xs tracking-widest text-white bg-gray-700 px-3 py-1 hover:bg-red-600 transition-colors'
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

export default AuthorList;
