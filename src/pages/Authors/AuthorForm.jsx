import React, { useState } from 'react';
import AuthorFormUI from '../../components/Authors/AuthorFormUI';
import { createAuthor } from '../../services/authorService';

export default function AuthorFormPage() {
  const [formData, setFormData] = useState({ name: '', surname: '', nationality: '', birthYear: '', alive: true });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Usamos el servicio que mostraste en tu captura
      await createAuthor({ ...formData, birthYear: parseInt(formData.birthYear) });
      alert("¡Autor registrado con éxito!");
      handleClear();
    } catch (error) {
      alert("Error al conectar con el servidor");
    }
  };

  const handleClear = () => setFormData({ name: '', surname: '', nationality: '', birthYear: '', alive: true });

  return <AuthorFormUI formData={formData} setFormData={setFormData} onSubmit={handleSubmit} onClear={handleClear} />;
}