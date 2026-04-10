import { useState } from 'react';

function Navbar() {
    const [open, setOpen] = useState(false);
    return (
        <header className='flex flex-col p-4 bg-[#f4f1ec] lg:flex-row items-center justify-center'>
            <div className='flex justify-center items-center w-full lg:w-[40%] lg:gap-8'>

                <h1 className='text-2xl font-serif leading-tight font-bold text-gray-700'>Library</h1>

                <button className='lg:hidden' onClick={() => setOpen(!open)}>
                    {open ? 'X' : '☰'}
                </button>
            </div>


            <nav className={`${open ? 'flex' : 'hidden'} w-full lg:flex justify-center lg:w-[60%]`} >
                <ul className='flex flex-col lg:flex-row items-center w-[50%]' >
                    <li className='w-full text-center p-2' >
                        <a href="/" className='text-xl font-medium' onClick={() => setOpen(false)}>categorias</a>
                    </li>
                    <li className='w-full text-center p-2'>
                        <a href="/" className='text-xl font-medium' onClick={() => setOpen(false)}>Autores</a>
                    </li>
                    <li className='w-full text-center p-2'>
                        <a href="/" className='text-xl font-medium' onClick={() => setOpen(false)}>Libros</a>
                    </li>

                </ul>
            </nav>
           
        </header>
    )
}
export default Navbar;