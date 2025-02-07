import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import Authlinks from '../authLinks/Authlinks';

const Navbar = () => {

    return (
        <div className='md:m-auto md:px-20 py-8 flex justify-between items-center relative z-10'>
            <Link className='pl-5 lg:pl-0' href="/">
                <Image src="/Logo.png" alt='' width={120} height={40} />
            </Link>
            
            <div className='md:flex hidden font-heading text-black items-center gap-6 justify-end lg:w-3/5 md:w-full'>
                <div className='flex'>
                    <Link href='/blog' className='text-base w-24 text-center py-2 rounded-md hover:text-purple'>Blog</Link>
                    <Link href='/about' className='text-base w-24 text-center py-2 rounded-md hover:text-purple'>About</Link>
                </div>
                <div className='relative block w-full max-w-14 ease-in duration-300 overflow-hidden focus-within:max-w-52'>
                    <input
                        className='block appearance-none w-full bg-white text-transparent cursor-pointer transition ease-in duration-150 
                        p-2 rounded-lg border-[none] outline-none placeholder:text-white placeholder:text-base focus-within:placeholder:text-gray 
                      focus-within:bg-white focus-within:text-gray focus-within:shadow-[inset_0px_0px_10px_rgba(0,0,0,0.1)] focus-within:pr-12'
                        type="text"
                        placeholder='Search here ...'
                    />
                    <Image className='absolute translate-x-2/4 -translate-y-2/4 pointer-events-none right-[calc(53px_/_2)] top-2/4' src='/search.png' alt='' width={22} height={22} />
                </div>
                <Link href='/contact' className='text-white px-8 py-3 text-base bg-purple border rounded-lg transition ease-in-out duration-500 hover:bg-transparent hover:text-purple hover:border-purple hover:shadow-sm'>
                    Contact Us
                </Link>
            </div>
            <Authlinks />    
        </div>
    );
}

export default Navbar;
