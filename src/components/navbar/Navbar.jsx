import { useState } from 'react';

function Navbar() {
    const [open, setOpen] = useState(false);
    return (
        <header >
            <div>
                <button onClick={() => setOpen(!open)}>
                    {open ? 'X' : '☰'}
                </button>
                <h1>Biblioteca</h1>
            </div>
            
            { (
            <nav>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/">Autores</a>
                    </li>
                    <li>
                        <a href="/">Libros</a>
                    </li>
            
                </ul>
            </nav>
            )}
        </header>
    )
}
export default Navbar;