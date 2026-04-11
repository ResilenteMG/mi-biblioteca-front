import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createBook, updateBook, getBookById } from '../../services/bookService';
import { getAuthors } from '../../services/authorService';

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

    return (
        <div className="p-8 max-w-lg mx-auto">
            <h2 className="text-2xl font-bold mb-6">{isEditing ? 'Editar libro' : 'Nuevo libro'}</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input name="title" placeholder="Título" value={form.title} onChange={handleChange} className="border p-2 w-full rounded" required />
                <input name="isbn" placeholder="ISBN" value={form.isbn} onChange={handleChange} className="border p-2 w-full rounded" />
                <input name="publicationYear" placeholder="Año de publicación" type="number" value={form.publicationYear} onChange={handleChange} className="border p-2 w-full rounded" />
                <input name="image" placeholder="URL de imagen" value={form.image} onChange={handleChange} className="border p-2 w-full rounded" />
                <input name="category" placeholder="Categoría" value={form.category} onChange={handleChange} className="border p-2 w-full rounded" />
                <select name="authorId" value={form.author?.id || ''} onChange={handleChange} className="border p-2 w-full rounded" required>
                    <option value="">-- Selecciona un autor --</option>
                    {authors.map(a => (
                        <option key={a.id} value={a.id}>{a.name} {a.surname}</option>
                    ))}
                </select>
                <div className="flex gap-2">
                    <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
                        {isEditing ? 'Guardar cambios' : 'Crear libro'}
                    </button>
                    <button type="button" onClick={() => navigate('/books')} className="bg-gray-400 text-white px-4 py-2 rounded">
                        Cancelar
                    </button>
                </div>
            </form>
        </div>
    );
};

export default BookForm;
