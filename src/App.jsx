import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthorList from './pages/Authors/AuthorList';
import AuthorForm from './pages/Authors/AuthorForm';
import BookList from './pages/Books/BookList';
import BookForm from './pages/Books/BookForm';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/authors" element={<AuthorList />} />
        <Route path="/authors/new" element={<AuthorForm />} />
        <Route path="/authors/:id/edit" element={<AuthorForm />} />
        <Route path="/books" element={<BookList />} />
        <Route path="/books/new" element={<BookForm />} />
        <Route path="/books/:id/edit" element={<BookForm />} />
      </Routes>
    </Router>
  );
}

export default App;
