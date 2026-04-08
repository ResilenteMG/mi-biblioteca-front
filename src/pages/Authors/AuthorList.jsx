import React, { useState, useEffect } from 'react';
import { getAuthors } from '../../services/authorService';
import './AuthorList.css';

const AuthorList = () => {
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const data = await getAuthors();
        setAuthors(data);
      } catch (error) {
        console.error("Error al obtener autores:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchAuthors();
  }, []);

  if (loading) return <div className="loading">Cargando catálogo...</div>;

  return (
    <div className="table-container">
      <h2 className="table-title">Catálogo de Autores</h2>
      <table className="author-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Nacionalidad</th>
            <th>Año Nac.</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {authors.map((author) => (
            <tr key={author.id}>
              <td><strong>{author.name} {author.lastname}</strong></td>
              <td>{author.nationality}</td>
              <td>{author.yearBirth}</td>
              <td>
                <span className={`badge ${author.aliveLivingSta ? 'active' : 'deceased'}`}>
                  {author.aliveLivingSta ? 'Activo' : 'Fallecido'}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AuthorList;