import React from 'react';

export default function BookFormUI({ formData, setFormData, authors, onSubmit, onClear }) {
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="flex justify-center py-10">
      <form 
        onSubmit={onSubmit} 
        className="bg-[#fdfaf5] p-10 rounded-[30px] shadow-xl w-full max-w-2xl border border-gray-100"
      >
        <h2 className="text-3xl font-bold text-[#2c3e50] text-center mb-8 tracking-widest uppercase">
          Registrar Libro
        </h2>

        <div className="space-y-6 text-left">
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Título del Volumen</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-gray-300 py-2 outline-none focus:border-green-700 transition-colors"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Código ISBN</label>
              <input
                type="text"
                name="isbn"
                value={formData.isbn}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-gray-300 py-2 outline-none focus:border-green-700 transition-colors"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Año de Publicación</label>
              <input
                type="number"
                name="publicationYear"
                value={formData.publicationYear}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-gray-300 py-2 outline-none focus:border-green-700 transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase mb-1">URL de la Imagen (Portada)</label>
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="http://ejemplo.com/imagen.jpg"
              className="w-full bg-transparent border-b border-gray-300 py-2 outline-none focus:border-green-700 transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Autor Responsable</label>
            <select
              name="authorId"
              value={formData.authorId}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-gray-300 py-2 outline-none focus:border-green-700 transition-colors cursor-pointer"
              required
            >
              <option value="">Seleccione un autor de la lista</option>
              {authors.map((auth) => (
                <option key={auth.id} value={auth.id}>
                  {auth.name} {auth.surname}
                </option>
              ))}
            </select>
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