import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createBook, updateBook, getBookById } from '../../services/bookService';
import { getAuthors } from '../../services/authorService';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

const BookForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const isEditing = Boolean(id);

    const [form, setForm] = useState({
        title: '', isbn: '', publicationYear: '',
        image: '', category: '', author: { id: '' }
    });
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        getAuthors().then(setAuthors).catch(err => console.error(err));
        if (isEditing) {
            getBookById(id).then(data => setForm(data)).catch(err => console.error(err));
        }
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'authorId') {
            setForm(prev => ({ ...prev, author: { id: Number(value) } }));
        } else {
            setForm(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const action = isEditing ? updateBook(id, form) : createBook(form);
        action.then(() => navigate('/books')).catch(err => console.error(err));
    };

    const inputClass = 'w-full border border-[#d6d0c4] bg-white px-4 py-3 font-mono text-sm text-gray-800 focus:outline-none focus:border-gray-600';

    return (
        <div className='bg-[#f4f1ec] min-h-screen flex flex-col'>
            <Navbar />
            <main className='flex-1 max-w-xl mx-auto w-full px-8 py-12'>
                <h2 className='font-serif text-4xl font-bold text-gray-800 mb-10'>
                    {isEditing ? 'Editar libro' : 'Nuevo libro'}
                </h2>

                <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                    <input name='title' placeholder='Título' value={form.title} onChange={handleChange} className={inputClass} required />
                    <input name='isbn' placeholder='ISBN' value={form.isbn} onChange={handleChange} className={inputClass} />
                    <input name='publicationYear' placeholder='Año de publicación' type='number' value={form.publicationYear} onChange={handleChange} className={inputClass} />
                    <input name='image' placeholder='URL de imagen' value={form.image} onChange={handleChange} className={inputClass} />
                    <input name='category' placeholder='Categoría' value={form.category} onChange={handleChange} className={inputClass} />
                    <select name='authorId' value={form.author?.id || ''} onChange={handleChange} className={inputClass} required>
                        <option value=''>-- Selecciona un autor --</option>
                        {authors.map(a => (
                            <option key={a.id} value={a.id}>{a.name} {a.surname}</option>
                        ))}
                    </select>

                    <div className='flex gap-3 mt-4'>
                        <button type='submit' className='font-mono text-xs tracking-widest text-white bg-gray-800 hover:bg-gray-600 transition-colors px-6 py-3'>
                            {isEditing ? 'GUARDAR CAMBIOS' : 'CREAR LIBRO'}
                        </button>
                        <button type='button' onClick={() => navigate('/books')} className='font-mono text-xs tracking-widest text-gray-700 border border-[#d6d0c4] px-6 py-3 hover:bg-gray-100 transition-colors'>
                            CANCELAR
                        </button>
                    </div>
                </form>
            </main>
            <Footer />
        </div>
    );
};

export default BookForm;
