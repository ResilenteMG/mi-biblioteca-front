import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthorList from './pages/Authors/AuthorList'; // Importas tu componente
import AuthorForm from './pages/Authors/AuthorForm';
import BookList from './pages/Books/BookList';
import BookForm from './pages/Books/BookForm';
import Home from './pages/Home';
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
        <Route path="/books" element={<BookList />} />
        <Route path="/books/new" element={<BookForm />} />
      </Routes>
      <div className='bg-[#f4f1ec] min-h-screen'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/authors" element={<AuthorList />} />
          <Route path="/authors/new" element={<AuthorForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;