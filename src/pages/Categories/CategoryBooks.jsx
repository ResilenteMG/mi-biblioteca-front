import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getBooksByCategory } from '../../services/bookService';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

const CategoryBooks = () => {
    const { category } = useParams();
    const [books, setBooks] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getBooksByCategory(decodeURIComponent(category))
            .then(setBooks)
            .catch(err => console.error(err));
    }, [category]);

    return (
        <div className='bg-[#f4f1ec] min-h-screen flex flex-col'>
            <Navbar />
            <main className='flex-1 max-w-6xl mx-auto w-full px-8 py-12'>
                <div className='flex items-center gap-4 mb-10'>
                    <button
                        onClick={() => navigate('/categories')}
                        className='font-mono text-xs tracking-widest text-gray-500 hover:text-gray-800 transition-colors'
                    >
                        ← CATEGORÍAS
                    </button>
                    <h2 className='font-serif text-4xl font-bold text-gray-800 uppercase'>
                        {decodeURIComponent(category)}
                    </h2>
                </div>

                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6'>
                    {books.map(book => (
                        <div key={book.id} className='flex flex-col gap-2 group'>
                            <img
                                src={book.image || 'https://via.placeholder.com/200x300?text=Sin+portada'}
                                alt={book.title}
                                referrerPolicy='no-referrer'
                                className='w-full h-64 object-cover shadow-sm group-hover:shadow-md transition-shadow'
                            />
                            <p className='font-mono text-xs tracking-widest text-gray-800 mt-1'>{book.title}</p>
                            <p className='font-mono text-xs tracking-widest text-gray-400'>
                                {book.author ? `${book.author.name} ${book.author.surname}` : ''}
                            </p>
                            <p className='font-mono text-xs tracking-widest text-gray-400'>{book.publicationYear}</p>
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default CategoryBooks;
