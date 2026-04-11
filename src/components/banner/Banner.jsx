import { useState, useEffect } from 'react';
import { getBooks } from '../../services/bookService';

function Banner() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        getBooks().then(data => setBooks(data.slice(0, 4))).catch(err => console.error(err));
    }, []);

    return (
        <section className='px-8 py-16 max-w-6xl mx-auto'>
            <h2 className='text-center font-serif font-bold text-5xl tracking-widest text-gray-800 mb-6'>
                LOS MEJORES LIBROS
            </h2>
            <p className='text-center font-mono text-sm tracking-widest text-gray-600 leading-relaxed max-w-2xl mx-auto mb-10'>
                Un catálogo digital meticulosamente elegido para el disfrute del lector
                que abarca todos los generos.
            </p>
            <p className='text-center font-mono text-2xl tracking-widest text-gray-700 mb-12'>
                {books.length} volumes
            </p>

            <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
                {books.map((book) => (
                    <div key={book.id} className='flex flex-col gap-2'>
                        <img
                            src={book.image || 'https://via.placeholder.com/200x300?text=Sin+portada'}
                            alt={book.title}
                            referrerPolicy="no-referrer"
                            className='w-full h-80 object-cover rounded-sm shadow-sm'
                        />
                        <p className='font-mono text-xs tracking-widest text-gray-800 mt-1'>
                            {book.title}
                        </p>
                        <p className='font-mono text-xs tracking-widest text-gray-400'>
                            {book.author ? `${book.author.name} ${book.author.surname}` : ''}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Banner;
