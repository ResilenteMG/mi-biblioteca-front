import React from 'react';

export default function AuthorFormUI({ formData, setFormData, onSubmit, onClear }) {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#f4f1ec] p-4">
      <div className="bg-[#fdf9f1] w-full max-w-2xl p-10 rounded-2xl shadow-xl border border-orange-100">
        <h2 className="text-3xl font-serif font-bold text-gray-800 mb-8 text-center uppercase tracking-widest">
          Registro de Autor
        </h2>
        <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-1">Nombre</label>
            <input type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="p-2 border border-gray-300 rounded focus:ring-2 focus:ring-orange-200 outline-none" required />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-1">Apellidos</label>
            <input type="text" value={formData.surname} onChange={(e) => setFormData({...formData, surname: e.target.value})} className="p-2 border border-gray-300 rounded focus:ring-2 focus:ring-orange-200 outline-none" required />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-1">Año Nacimiento</label>
            <input type="number" value={formData.birthYear} onChange={(e) => setFormData({...formData, birthYear: e.target.value})} className="p-2 border border-gray-300 rounded focus:ring-2 focus:ring-orange-200 outline-none" required />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-1">¿Está vivo?</label>
            <select value={formData.alive} onChange={(e) => setFormData({...formData, alive: e.target.value === 'true'})} className="p-2 border border-gray-300 rounded bg-white outline-none">
              <option value="true">Vivo</option>
              <option value="false">Fallecido</option>
            </select>
          </div>
          <div className="md:col-span-2 flex justify-end gap-4 mt-6">
            <button type="button" onClick={onClear} className="px-8 py-2 bg-red-800 text-white rounded-full font-bold hover:bg-red-900 transition shadow-md">Borrar</button>
            <button type="submit" className="px-8 py-2 bg-green-800 text-white rounded-full font-bold hover:bg-green-900 transition shadow-md">Aceptar</button>
          </div>
        </form>
      </div>
    </div>
  );
}