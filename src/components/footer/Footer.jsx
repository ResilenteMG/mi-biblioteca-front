function Footer() {
    return (
        <footer className='bg-[#f4f1ec] border-t border-[#d6d0c4] py-10 mt-16'>
            <div className='max-w-6xl mx-auto px-8 flex flex-col lg:flex-row items-center justify-between gap-6'>

                <div className='flex flex-col items-center lg:items-start gap-1'>
                    <h2 className='text-2xl font-serif leading-tight font-bold text-gray-700'>Library</h2>
                    <p className='font-mono text-xs tracking-widest text-gray-500'>Gracias por leernos</p>
                </div>

                <div className='flex flex-col items-center lg:items-start gap-1'>
                    <p className='font-mono text-sm tracking-widest text-gray-600'>Contacto</p>
                    <p className='font-mono text-sm tracking-widest text-gray-500'>+34 600 123 456</p>
                </div>

                <p className='font-mono text-xs tracking-widest text-gray-400'>Copyright 2026</p>

            </div>
        </footer>
    );
}

export default Footer;