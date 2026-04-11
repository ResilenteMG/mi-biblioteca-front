import React, { useState, useEffect } from 'react';
import BookFormUI from '../../components/Books/BookFormUI';
import { createBook } from '../../services/bookService';
import { getAuthors } from '../../services/authorService';

export default function BookForm({ onBookAdded }) {
  const [authors, setAuthors] = useState([]);
  const [formData, setFormData] = useState({ 
    title: '', 
    isbn: '', 
    publicationYear: '',
    image: '',
    authorId: '' 
  });

  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const data = await getAuthors();
        setAuthors(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchAuthors();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const dataToSend = {
        ...formData,
        publicationYear: formData.publicationYear ? parseInt(formData.publicationYear) : null
      };
      await createBook(dataToSend);
      setFormData({ title: '', isbn: '', publicationYear: '', image: '', authorId: '' });
      if (onBookAdded) onBookAdded();
      alert("Libro registrado con éxito");
    } catch (err) {
      console.error(err);
      alert("Error al registrar el libro");
    }
  };

  const handleClear = () => {
    setFormData({ title: '', isbn: '', publicationYear: '', image: '', authorId: '' });
  };

  return (
    <BookFormUI 
      formData={formData} 
      setFormData={setFormData} 
      authors={authors}
      onSubmit={handleSubmit} 
      onClear={handleClear} 
    />
  );
}