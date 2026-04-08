import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthorList from './pages/Authors/AuthorList'; // Importas tu componente
// Importa también el Header de Sergio si ya lo tiene listo

function App() {
  return (
    <Router>
      {/* Aquí iría el <Header /> de Sergio */}
      <Routes>
        {/* Definimos que la ruta principal o /authors muestre tu lista */}
        <Route path="/" element={<AuthorList />} />
        <Route path="/authors" element={<AuthorList />} />
      </Routes>
    </Router>
  );
}

export default App;