import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const books = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", cover: "https://covers.openlibrary.org/b/id/8432047-L.jpg" },
  { title: "1984", author: "George Orwell", cover: "https://covers.openlibrary.org/b/id/7222246-L.jpg" },
  { title: "To Kill a Mockingbird", author: "Harper Lee", cover: "https://covers.openlibrary.org/b/id/8225261-L.jpg" },
  { title: "Brave New World", author: "Aldous Huxley", cover: "https://covers.openlibrary.org/b/id/8113108-L.jpg" }
];

function Carousel() {
  const [current, setCurrent] = useState(0);
  const total = books.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((c) => (c + 1) % total);
    }, 3000);
    return () => clearInterval(interval);
  }, [total]);

  return (
    <section className="bg-[#f4f1ec] px-8 py-12 max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-serif font-bold text-gray-800 uppercase tracking-tighter">
          Destacados
        </h2>
        <div className="flex gap-4">
          <Link to="/libros" className="text-xs font-bold uppercase tracking-widest border-b border-gray-800 hover:text-orange-800 transition">
            Ver Libros
          </Link>
          <Link to="/autores" className="text-xs font-bold uppercase tracking-widest border-b border-gray-800 hover:text-orange-800 transition">
            Ver Autores
          </Link>
        </div>
      </div>

      <div className="flex gap-6 overflow-hidden">
        {books.map((book, index) => (
          <div key={index} className="min-w-[200px] transition-all duration-500">
            <img src={book.cover} alt={book.title} className="w-full h-72 object-cover shadow-md mb-2" />
            <h3 className="text-sm font-bold text-gray-900 truncate">{book.title}</h3>
            <p className="text-xs text-gray-500 italic">{book.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Carousel;