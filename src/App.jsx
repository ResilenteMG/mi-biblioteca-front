import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AuthorList from "./pages/Authors/AuthorList";
import BookList from "./pages/Books/BookList";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/libros" element={<BookList />} />
        <Route path="/autores" element={<AuthorList />} />
      </Routes>
    </Router>
  );
}

export default App;