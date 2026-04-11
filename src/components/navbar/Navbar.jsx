import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex flex-col p-4 bg-[#f4f1ec] lg:flex-row items-center justify-between shadow-sm border-b border-orange-100">
      <div className="flex justify-between items-center w-full lg:w-[30%]">
        <Link to="/" className="text-2xl font-serif font-bold text-gray-800 tracking-tighter">
          LIBRARY
        </Link>
        <button className="lg:hidden text-2xl" onClick={() => setOpen(!open)}>
          {open ? '✕' : '≡'}
        </button>
      </div>

      <nav className={`${open ? 'flex' : 'hidden'} w-full lg:flex justify-end lg:w-[70%]`}>
        <ul className="flex flex-col lg:flex-row items-center gap-8 py-4 lg:py-0">
          <li>
            <Link 
              to="/" 
              className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 hover:text-orange-800 transition"
              onClick={() => setOpen(false)}
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link 
              to="/libros" 
              className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 hover:text-orange-800 transition"
              onClick={() => setOpen(false)}
            >
              Libros
            </Link>
          </li>
          <li>
            <Link 
              to="/autores" 
              className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 hover:text-orange-800 transition"
              onClick={() => setOpen(false)}
            >
              Autores
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;