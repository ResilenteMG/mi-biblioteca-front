import React, { useState, useEffect } from 'react';
import BookListUI from '../../components/Books/BookListUI';
import { getBooks, deleteBook } from '../../services/bookService';

export default function BookListPage() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    try {
      const data = await getBooks(); 
      setBooks(data);
    } catch (err) {
      console.error("Error:", err);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("¿Deseas retirar este volumen de la colección?")) {
      try {
        await deleteBook(id);
        setBooks(books.filter(book => book.id !== id));
      } catch (err) {
        alert("No se pudo eliminar el libro.");
      }
    }
  };

  return <BookListUI books={books} onDelete={handleDelete} />;
}