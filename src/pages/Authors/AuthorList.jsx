import React, { useState, useEffect } from 'react';
import AuthorListUI from '../../components/Authors/AuthorListUI';
import AuthorForm from './AuthorForm'; 
import { getAuthors, deleteAuthor } from '../../services/authorService';

export default function AuthorList() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    loadAuthors();
  }, []);

  const loadAuthors = async () => {
    try {
      const data = await getAuthors();
      setAuthors(data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("¿Eliminar?")) {
      await deleteAuthor(id);
      loadAuthors(); 
    }
  };

  return (
    <div className="bg-[#f4f1ec] min-h-screen pb-20">
      <AuthorListUI authors={authors} onDelete={handleDelete} />
      <div className="flex items-center justify-center my-12">
        <div className="h-[1px] bg-orange-200 w-1/4"></div>
        <span className="px-4 font-serif italic text-gray-400">Registrar Nuevo Autor</span>
        <div className="h-[1px] bg-orange-200 w-1/4"></div>
      </div>
      <div className="max-w-4xl mx-auto px-4">
        <AuthorForm onAuthorAdded={loadAuthors} />
      </div>
    </div>
  );
}