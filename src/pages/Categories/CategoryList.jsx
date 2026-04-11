import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getBooks } from '../../services/bookService';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

const CategoryList = () => {
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getBooks().then(books => {
            const unique = [...new Set(books.map(b => b.category).filter(Boolean))].sort();
            setCategories(unique);
        }).catch(err => console.error(err));
    }, []);

    return (
        <div className='bg-[#f4f1ec] min-h-screen flex flex-col'>
            <Navbar />
            <main className='flex-1 max-w-6xl mx-auto w-full px-8 py-12'>
                <h2 className='font-serif text-4xl font-bold text-gray-800 mb-10'>Categorías</h2>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                    {categories.map(category => (
                        <div
                            key={category}
                            onClick={() => navigate(`/categories/${encodeURIComponent(category)}`)}
                            className='bg-white border border-[#d6d0c4] p-8 flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors shadow-sm'
                        >
                            <p className='font-mono text-sm tracking-widest text-gray-700 text-center uppercase'>
                                {category}
                            </p>
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default CategoryList;
