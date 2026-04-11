import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createAuthor, updateAuthor, getAuthorById } from '../../services/authorService';

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

    return (
        <div className="p-8 max-w-lg mx-auto">
            <h2 className="text-2xl font-bold mb-6">{isEditing ? 'Editar autor' : 'Nuevo autor'}</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input name="name" placeholder="Nombre" value={form.name} onChange={handleChange} className="border p-2 w-full rounded" required />
                <input name="surname" placeholder="Apellido" value={form.surname} onChange={handleChange} className="border p-2 w-full rounded" required />
                <input name="nationality" placeholder="Nacionalidad" value={form.nationality} onChange={handleChange} className="border p-2 w-full rounded" />
                <input name="birthYear" placeholder="Año de nacimiento" type="number" value={form.birthYear} onChange={handleChange} className="border p-2 w-full rounded" />
                <input name="category" placeholder="Categoría literaria" value={form.category} onChange={handleChange} className="border p-2 w-full rounded" />
                <label className="flex items-center gap-2">
                    <input name="alive" type="checkbox" checked={form.alive} onChange={handleChange} />
                    Sigue vivo
                </label>
                <div className="flex gap-2">
                    <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
                        {isEditing ? 'Guardar cambios' : 'Crear autor'}
                    </button>
                    <button type="button" onClick={() => navigate('/authors')} className="bg-gray-400 text-white px-4 py-2 rounded">
                        Cancelar
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AuthorForm;
