import React, { useState, useEffect } from 'react';
import AuthorListUI from '../../components/Authors/AuthorListUI';
import { getAuthors, deleteAuthor } from '../../services/authorService';

export default function AuthorListPage() {
  const [authors, setAuthors] = useState([]);

  const fetchAuthors = async () => {
    try {
      const data = await getAuthors(); // getAuthors ya devuelve res.data según tu captura
      setAuthors(data);
    } catch (err) {
      console.error("No se pudieron cargar los autores");
    }
  };

  useEffect(() => { fetchAuthors(); }, []);

  const handleDelete = async (id) => {
    if (window.confirm("¿Estás seguro de que deseas eliminar este autor?")) {
      try {
        await deleteAuthor(id);
        setAuthors(authors.filter(a => a.id !== id));
      } catch (err) {
        alert("Error al intentar eliminar");
      }
    }
  };

  return <AuthorListUI authors={authors} onDelete={handleDelete} />;
}