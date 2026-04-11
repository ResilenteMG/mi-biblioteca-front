import React from 'react';

export default function BookListUI({ books, onDelete }) {
  return (
    <div className="min-h-screen bg-[#f4f1ec] p-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-serif text-gray-900 text-center mb-12 uppercase tracking-widest">
          The Master Collection
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {books && books.map((book) => (
            <div key={book.id} className="group flex flex-col items-center">
              <div className="bg-white p-3 shadow-2xl border border-gray-200 transition-transform group-hover:-translate-y-3">
                <img 
                  src={book.image || 'https://via.placeholder.com/300x450'} 
                  alt={book.title} 
                  className="w-full h-80 object-cover mb-4" 
                />
                <h3 className="font-serif text-lg font-bold text-gray-800 text-center uppercase leading-tight">
                  {book.title}
                </h3>
                <div className="w-8 h-px bg-orange-300 mx-auto my-2"></div>
                <p className="text-[10px] text-gray-500 text-center tracking-widest uppercase">
                  ISBN: {book.isbn}
                </p>
                <button 
                  onClick={() => onDelete(book.id)} 
                  className="w-full mt-4 text-[10px] text-red-700 font-bold hover:underline"
                >
                  ELIMINAR VOLUMEN
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}