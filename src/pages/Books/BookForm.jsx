import React, { useState, useEffect } from 'react';
import BookFormUI from '../../components/Books/BookFormUI';
import { createBook } from '../../services/bookService';
import { getAuthors } from '../../services/authorService';

export default function BookFormPage() {
  const [authors, setAuthors] = useState([]);
  const [formData, setFormData] = useState({ title: '', isbn: '', authorId: '', image: '' });

  useEffect(() => {
    const loadAuthors = async () => {
      try {
        const data = await getAuthors();
        setAuthors(data);
      } catch (err) {
        console.error("Error al cargar autores:", err);
      }
    };
    loadAuthors();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createBook(formData);
      alert("Libro añadido a la colección");
      handleClear();
    } catch (err) {
      alert("Error al guardar el libro");
    }
  };

  const handleClear = () => setFormData({ title: '', isbn: '', authorId: '', image: '' });

  return (
    <BookFormUI 
      formData={formData} 
      setFormData={setFormData} 
      onSubmit={handleSubmit} 
      onClear={handleClear} 
      authors={authors} 
    />
  );
}