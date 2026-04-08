import React, { useEffect, useState } from 'react';
import { getAuthors } from '../../services/authorService';
import './AuthorList.css';

const AuthorList = () => {
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        // --- DATOS DE PRUEBA (MOCK DATA) ---
        const mockAuthors = [
          { id: 1, name: "Gabriel", lastname: "García Márquez", nationality: "Colombiana", yearBirth: 1927, aliveLivingSta: false },
          { id: 2, name: "Isabel", lastname: "Allende", nationality: "Chilena", yearBirth: 1942, aliveLivingSta: true },
          { id: 3, name: "Julio", lastname: "Cortázar", nationality: "Argentina", yearBirth: 1914, aliveLivingSta: false }
        ];

        // Cuando Juanlu esté listo, usaremos: setAuthors(await getAuthors());
        setAuthors(mockAuthors); 
      } catch (error) {
        console.error("No se pudieron cargar los autores");
      } finally {
        setLoading(false);
      }
    };

    fetchAuthors();
  }, []);

  if (loading) return <div className="author-container">Cargando catálogo...</div>;

  return (
    <div className="author-container">
      <h1 className="author-title">Catálogo de Autores</h1>
      
      <div className="author-table-container">
        <table className="author-table">
          <thead>
            <tr>
              <th>Nombre Completo</th>
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
                  <span className={`status-badge ${author.aliveLivingSta ? 'status-active' : 'status-deceased'}`}>
                    {author.aliveLivingSta ? "Activo" : "Fallecido"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AuthorList;