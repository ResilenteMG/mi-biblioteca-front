import { useState, useEffect } from 'react';
import { getBooks } from '../../services/bookService';

function Carousel() {
    const [books, setBooks] = useState([]);
    const [current, setCurrent] = useState(0);
    const visible = 4;

    useEffect(() => {
        getBooks().then(setBooks).catch(err => console.error(err));
    }, []);

    const total = Math.max(books.length - visible + 1, 1);

    useEffect(() => {
        if (books.length === 0) return;
        const interval = setInterval(() => {
            setCurrent(c => (c + 1) % total);
        }, 3000);
        return () => clearInterval(interval);
    }, [total, books.length]);

    return (
        <section className='px-8 py-12 max-w-6xl mx-auto'>
            <div className='flex items-center justify-between mb-8'>
                <h3 className='font-mono text-sm tracking-widest text-gray-600 uppercase'>
                    Destacados
                </h3>
            </div>

            <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
                {books.slice(current, current + visible).map((book) => (
                    <div key={book.id} className='flex flex-col gap-2 cursor-pointer group'>
                        <img
                            src={book.image || 'https://via.placeholder.com/200x300?text=Sin+portada'}
                            alt={book.title}
                            referrerPolicy="no-referrer"
                            className='w-full h-80 object-cover shadow-sm group-hover:shadow-md transition-shadow'
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

            <div className='flex justify-center gap-2 mt-8'>
                {Array.from({ length: total }).map((_, i) => (
                    <div
                        key={i}
                        className={`w-1.5 h-1.5 rounded-full transition-colors ${i === current ? 'bg-gray-700' : 'bg-gray-300'
                            }`}
                    />
                ))}
            </div>
        </section>
    );
}

export default Carousel;
