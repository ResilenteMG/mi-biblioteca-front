import React from 'react';

export default function AuthorListUI({ authors, onDelete }) {
  return (
    <div className="min-h-screen bg-[#f4f1ec] p-8">
      <div className="max-w-5xl mx-auto bg-[#fdf9f1] p-8 rounded-2xl shadow-lg border border-orange-100">
        <h2 className="text-3xl font-serif font-bold text-gray-800 mb-8 text-center uppercase tracking-widest">Catálogo de Autores</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b-2 border-orange-200 text-gray-700 uppercase text-sm font-serif">
                <th className="p-4 text-center">Nombre Completo</th>
                <th className="p-4 text-center">Nacionalidad</th>
                <th className="p-4 text-center">Estado</th>
                <th className="p-4 text-center">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {authors.map((author) => (
                <tr key={author.id} className="border-b border-orange-50 hover:bg-white transition text-center">
                  <td className="p-4 font-medium">{author.name} {author.surname}</td>
                  <td className="p-4 text-gray-600 uppercase text-xs tracking-wider">{author.nationality}</td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${author.alive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                      {author.alive ? 'VIVO' : 'FALLECIDO'}
                    </span>
                  </td>
                  <td className="p-4">
                    <button onClick={() => onDelete(author.id)} className="text-red-600 hover:text-red-900 font-bold text-sm">ELIMINAR</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}