import React from 'react';

export default function AuthorFormUI({ formData, setFormData, onSubmit, onClear }) {
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  return (
    <div className="flex justify-center py-10">
      <form 
        onSubmit={onSubmit} 
        className="bg-[#fdfaf5] p-10 rounded-[30px] shadow-xl w-full max-w-2xl border border-gray-100"
      >
        <h2 className="text-3xl font-bold text-[#2c3e50] text-center mb-8 tracking-widest uppercase">
          Registrar Autor
        </h2>

        <div className="space-y-6 text-left">
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Nombre</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-gray-300 py-2 outline-none focus:border-green-700 transition-colors"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Apellido</label>
            <input
              type="text"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-gray-300 py-2 outline-none focus:border-green-700 transition-colors"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Nacionalidad</label>
              <input
                type="text"
                name="nationality"
                value={formData.nationality}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-gray-300 py-2 outline-none focus:border-green-700 transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Año de Nacimiento</label>
              <input
                type="number"
                name="birthYear"
                value={formData.birthYear}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-gray-300 py-2 outline-none focus:border-green-700 transition-colors"
              />
            </div>
          </div>

          <div className="flex items-center space-x-3 pt-4">
            <input
              type="checkbox"
              name="alive"
              checked={formData.alive}
              onChange={handleChange}
              className="w-5 h-5 accent-green-700"
            />
            <span className="text-sm text-gray-600 font-medium">
              {formData.alive ? '✅ El autor sigue con vida' : '❌ El autor ha fallecido'}
            </span>
          </div>
        </div>

        <div className="mt-10 flex justify-center space-x-4">
          <button 
            type="button" 
            onClick={onClear}
            className="bg-[#a30000] text-white px-10 py-3 rounded-full font-bold hover:bg-red-800 transition-all shadow-md"
          >
            Borrar
          </button>
          <button 
            type="submit" 
            className="bg-[#006335] text-white px-10 py-3 rounded-full font-bold hover:bg-green-800 transition-all shadow-md"
          >
            Aceptar
          </button>
        </div>
      </form>
    </div>
  );
}