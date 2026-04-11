function Banner() {
    const books = [
        { title: "Cada Historia Cuenta", author: "Autor inventado", cover: "https://covers.openlibrary.org/b/id/8226198-L.jpg" },
        { title: "Cada Historia Cuenta", author: "Autor inventado", cover: "https://covers.openlibrary.org/b/id/8739161-L.jpg" },
        { title: "Cada Historia Cuenta", author: "Autor inventado", cover: "https://covers.openlibrary.org/b/id/8228691-L.jpg" },
        { title: "Cada Historia Cuenta", author: "Autor inventado", cover: "https://covers.openlibrary.org/b/id/8739036-L.jpg" },
    ];

    return (
        <section className='px-8 py-16 max-w-6xl mx-auto'>

            {/* Título */}
            <h2 className='text-center font-serif font-bold text-5xl tracking-widest text-gray-800 mb-6'>
                The Master Collection
            </h2>

            {/* Subtítulo monospace */}
            <p className='text-center font-mono text-sm tracking-widest text-gray-600 leading-relaxed max-w-2xl mx-auto mb-10'>
                A meticulously preserved digital catalogue of 12,480 rare volumes,
                spanning three centuries of human thought and creative excellence.
            </p>

            {/* Contador */}
            <p className='text-center font-mono text-2xl tracking-widest text-gray-700 mb-12'>
                12,450 volumes
            </p>

            {/* Grid de libros */}
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
                {books.map((book, i) => (
                    <div key={i} className='flex flex-col gap-2'>
                        <img
                            src={book.cover}
                            alt={book.title}
                            className='w-full h-80 object-cover rounded-sm shadow-sm'
                        />
                        <p className='font-mono text-xs tracking-widest text-gray-800 mt-1'>
                            {book.title}
                        </p>
                        <p className='font-mono text-xs tracking-widest text-gray-400'>
                            {book.author}
                        </p>
                    </div>
                ))}
            </div>

        </section>
    );
}

export default Banner;