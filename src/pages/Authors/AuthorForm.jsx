import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createAuthor, updateAuthor, getAuthorById } from '../../services/authorService';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

const AuthorForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const isEditing = Boolean(id);

    const [form, setForm] = useState({
        name: '', surname: '', nationality: '',
        birthYear: '', alive: true, category: ''
    });

    useEffect(() => {
        if (isEditing) {
            getAuthorById(id).then(data => setForm(data)).catch(err => console.error(err));
        }
    }, [id]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const action = isEditing ? updateAuthor(id, form) : createAuthor(form);
        action.then(() => navigate('/authors')).catch(err => console.error(err));
    };

    const inputClass = 'w-full border border-[#d6d0c4] bg-white px-4 py-3 font-mono text-sm text-gray-800 focus:outline-none focus:border-gray-600';

    return (
        <div className='bg-[#f4f1ec] min-h-screen flex flex-col'>
            <Navbar />
            <main className='flex-1 max-w-xl mx-auto w-full px-8 py-12'>
                <h2 className='font-serif text-4xl font-bold text-gray-800 mb-10'>
                    {isEditing ? 'Editar autor' : 'Nuevo autor'}
                </h2>

                <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                    <input name='name' placeholder='Nombre' value={form.name} onChange={handleChange} className={inputClass} required />
                    <input name='surname' placeholder='Apellido' value={form.surname} onChange={handleChange} className={inputClass} required />
                    <input name='nationality' placeholder='Nacionalidad' value={form.nationality} onChange={handleChange} className={inputClass} />
                    <input name='birthYear' placeholder='Año de nacimiento' type='number' value={form.birthYear} onChange={handleChange} className={inputClass} />
                    <input name='category' placeholder='Categoría literaria' value={form.category} onChange={handleChange} className={inputClass} />
                    <label className='flex items-center gap-3 font-mono text-sm text-gray-700'>
                        <input name='alive' type='checkbox' checked={form.alive} onChange={handleChange} className='w-4 h-4' />
                        Sigue vivo
                    </label>

                    <div className='flex gap-3 mt-4'>
                        <button type='submit' className='font-mono text-xs tracking-widest text-white bg-gray-800 hover:bg-gray-600 transition-colors px-6 py-3'>
                            {isEditing ? 'GUARDAR CAMBIOS' : 'CREAR AUTOR'}
                        </button>
                        <button type='button' onClick={() => navigate('/authors')} className='font-mono text-xs tracking-widest text-gray-700 border border-[#d6d0c4] px-6 py-3 hover:bg-gray-100 transition-colors'>
                            CANCELAR
                        </button>
                    </div>
                </form>
            </main>
            <Footer />
        </div>
    );
};

export default AuthorForm;
