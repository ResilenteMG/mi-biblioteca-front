import { useState, useEffect } from 'react';

const books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", cover: "https://covers.openlibrary.org/b/id/7222246-L.jpg" },
    { title: "1984", author: "George Orwell", cover: "https://covers.openlibrary.org/b/id/8575708-L.jpg" },
    { title: "To Kill a Mockingbird", author: "Harper Lee", cover: "https://covers.openlibrary.org/b/id/8810494-L.jpg" },
    { title: "Brave New World", author: "Aldous Huxley", cover: "https://covers.openlibrary.org/b/id/8267955-L.jpg" },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", cover: "https://covers.openlibrary.org/b/id/8231432-L.jpg" },
    { title: "Fahrenheit 451", author: "Ray Bradbury", cover: "https://covers.openlibrary.org/b/id/8406786-L.jpg" },
];

function Carousel() {
    const [current, setCurrent] = useState(0);
    const visible = 4;
    const total = books.length - visible + 1;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent(c => (c + 1) % total);
        }, 3000);
        return () => clearInterval(interval);
    }, [total]);

    return (
        <section className='px-8 py-12 max-w-6xl mx-auto'>

            {/* Cabecera con título */}
            <div className='flex items-center justify-between mb-8'>
                <h3 className='font-mono text-sm tracking-widest text-gray-600 uppercase'>
                    Destacados
                </h3>
            </div>

            {/* Libros visibles */}
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
                {books.slice(current, current + visible).map((book, i) => (
                    <div key={i} className='flex flex-col gap-2 cursor-pointer group'>
                        <img
                            src={book.cover}
                            alt={book.title}
                            className='w-full h-80 object-cover shadow-sm group-hover:shadow-md transition-shadow'
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

            {/* Indicador de posición */}
            <div className='flex justify-center gap-2 mt-8'>
                {Array.from({ length: total }).map((_, i) => (
                    <div
                        key={i}
                        className={`w-1.5 h-1.5 rounded-full transition-colors ${
                            i === current ? 'bg-gray-700' : 'bg-gray-300'
                        }`}
                    />
                ))}
            </div>

        </section>
    );
}

export default Carousel;
