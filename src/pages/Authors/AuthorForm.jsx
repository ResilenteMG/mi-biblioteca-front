import React, { useState } from 'react';
import AuthorFormUI from '../../components/Authors/AuthorFormUI';
import { createAuthor } from '../../services/authorService';

export default function AuthorForm({ onAuthorAdded }) {
  const [formData, setFormData] = useState({ 
    name: '', 
    surname: '',
    nationality: '',
    birthYear: '',
    alive: true 
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const dataToSend = {
        ...formData,
        birthYear: formData.birthYear ? parseInt(formData.birthYear) : null,
        alive: Boolean(formData.alive)
      };
      await createAuthor(dataToSend);
      setFormData({ name: '', surname: '', nationality: '', birthYear: '', alive: true });
      if (onAuthorAdded) onAuthorAdded();
      alert("Autor guardado correctamente");
    } catch (err) {
      console.error(err);
      alert("Error al conectar con el servidor");
    }
  };

  const handleClear = () => {
    setFormData({ name: '', surname: '', nationality: '', birthYear: '', alive: true });
  };

  return (
    <AuthorFormUI 
      formData={formData} 
      setFormData={setFormData} 
      onSubmit={handleSubmit} 
      onClear={handleClear} 
    />
  );
}