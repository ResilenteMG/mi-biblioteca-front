import { useState } from 'react';

function Navbar() {
    const [open, setOpen] = useState(false);
    return (
        <header className='flex flex-col flex-wrap p-4 bg-[#f4f1ec]'>
            <div className='flex justify-around items-center w-full'>
                <button onClick={() => setOpen(!open)}>
                    {open ? 'X' : '☰'}
                </button>
                <h1 className='text-2xl font-serif leading-tight font-bold text-gray-700'>Biblioteca</h1>
            </div>
            
            {open && (
            <nav className="flex" onClick={() => setOpen(false)}>
                <ul className='flex flex-col w-full'>
                    <li className='w-full text-center p-2' >
                        <a href="/">Home</a>
                    </li>
                    <li className='w-full text-center p-2'>
                        <a href="/">Autores</a>
                    </li>
                    <li className='w-full text-center p-2'>
                        <a href="/">Libros</a>
                    </li>
            
                </ul>
            </nav>
            )}
        </header>
    )
}
export default Navbar;