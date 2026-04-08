import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthorList from './pages/Authors/AuthorList'; // Importas tu componente
import AuthorForm from './pages/Authors/AuthorForm';
// Importa también el Header de Sergio si ya lo tiene listo

function App() {
  return (
    <Router>
      {/* Aquí iría el <Header /> de Sergio */}
      <Routes>
        {/* Definimos que la ruta principal o /authors muestre tu lista */}
        <Route path="/" element={<AuthorList />} />
        <Route path="/authors" element={<AuthorList />} />
        <Route path="/authors/new" element={<AuthorForm />} />
      </Routes>
    </Router>
  );
}

export default App;