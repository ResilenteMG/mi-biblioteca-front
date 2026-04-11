import React from 'react';

export default function BookFormUI({ formData, setFormData, onSubmit, onClear, authors }) {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#f4f1ec] p-4">
      <div className="bg-[#fdf9f1] w-full max-w-2xl p-10 rounded-2xl shadow-xl border border-orange-100">
        <h2 className="text-3xl font-serif font-bold text-gray-800 mb-8 text-center uppercase tracking-widest">Registrar Libro</h2>
        <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col md:col-span-2">
            <label className="text-gray-700 font-medium mb-1 text-sm uppercase">Título del Volumen</label>
            <input type="text" value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})} className="p-2 border border-gray-300 rounded focus:ring-2 focus:ring-orange-200 outline-none font-serif" required />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-1 text-sm uppercase">ISBN</label>
            <input type="text" value={formData.isbn} onChange={(e) => setFormData({...formData, isbn: e.target.value})} className="p-2 border border-gray-300 rounded focus:ring-2 focus:ring-orange-200 outline-none" required />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-1 text-sm uppercase">Autor Responsable</label>
            <select value={formData.authorId} onChange={(e) => setFormData({...formData, authorId: e.target.value})} className="p-2 border border-gray-300 rounded bg-white outline-none" required>
              <option value="">Seleccione autor...</option>
              {authors.map(a => <option key={a.id} value={a.id}>{a.name} {a.surname}</option>)}
            </select>
          </div>
          <div className="flex flex-col md:col-span-2">
            <label className="text-gray-700 font-medium mb-1 text-sm uppercase">URL de Portada (Imagen)</label>
            <input type="text" value={formData.image} onChange={(e) => setFormData({...formData, image: e.target.value})} className="p-2 border border-gray-300 rounded focus:ring-2 focus:ring-orange-200 outline-none" placeholder="https://..." />
          </div>
          <div className="md:col-span-2 flex justify-end gap-4 mt-6">
            <button type="button" onClick={onClear} className="px-8 py-2 bg-red-800 text-white rounded-full font-bold shadow-md hover:bg-red-900 transition">Borrar</button>
            <button type="submit" className="px-8 py-2 bg-green-800 text-white rounded-full font-bold shadow-md hover:bg-green-900 transition">Aceptar</button>
          </div>
        </form>
      </div>
    </div>
  );
}