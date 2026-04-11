import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <header className='bg-[#f4f1ec] border-b border-[#d6d0c4] shadow-sm'>
            <div className='max-w-6xl mx-auto px-8 py-4 flex items-center justify-between'>

                <Link to='/' className='text-2xl font-serif font-bold text-gray-800'>
                    Library
                </Link>

                <nav className='flex items-center gap-6'>
                    <Link to='/categories' className='text-lg font-medium text-gray-800 hover:text-gray-500 transition-colors'>
                        Categorías
                    </Link>
                    <Link to='/authors' className='text-lg font-medium text-gray-800 hover:text-gray-500 transition-colors'>
                        Autores
                    </Link>
                    <Link to='/books' className='text-lg font-medium text-gray-800 hover:text-gray-500 transition-colors'>
                        Libros
                    </Link>
                </nav>

            </div>
        </header>
    );
}

export default Navbar;
