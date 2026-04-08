import React, { useState } from 'react';
import './AuthorForm.css';

const AuthorForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    nationality: '',
    yearBirth: '',
    aliveLivingSta: true
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
      console.log("Datos listos para el backend:", formData);
      
    } catch (error) {
      console.error("Error al registrar autor:", error);
    }
  };

  return (
    <div className="container-form">
      <div className="card-form">
        <h2>Registrar Autor</h2>
        <form onSubmit={handleSubmit}>
          <div className="group">
            <label>Nombre</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="group">
            <label>Apellidos</label>
            <input type="text" name="lastname" value={formData.lastname} onChange={handleChange} required />
          </div>
          <div className="row">
            <div className="group">
              <label>Nacionalidad</label>
              <input type="text" name="nationality" value={formData.nationality} onChange={handleChange} />
            </div>
            <div className="group">
              <label>Año Nac.</label>
              <input type="number" name="yearBirth" value={formData.yearBirth} onChange={handleChange} />
            </div>
          </div>
          <div className="checkbox-group">
            <input type="checkbox" name="aliveLivingSta" checked={formData.aliveLivingSta} onChange={handleChange} />
            <label>¿En activo?</label>
          </div>
          <button type="submit" className="btn-save">Guardar en Base de Datos</button>
        </form>
      </div>
    </div>
  );
};

export default AuthorForm;