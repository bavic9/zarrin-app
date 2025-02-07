"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import Link from "next/link";

const Authlinks = () => {

    const [open, setOpen] = useState(false)

    return (
        <>
            <div
                className="w-8 h-8 mr-5 flex md:hidden justify-between flex-col cursor-pointer "
                onClick={() => setOpen(!open)}
            >
                <div className='cursor-pointer w-full h-[40px] relative'>
                    <Image
                        src='/Menu.png'
                        alt=''
                        fill
                    />
                </div>
            </div>

            {open && (
                <div className="absolute top-[73px] bg-white left-0 py-10 w-[100vw] flex flex-col items-center justify-center gap-12 text-2xl z-10
                shadow-[0px_10px_10px_rgba(0,0,0,0.3)]
                ">
                    <Link href='/blog' className='text-lg font-medium w-24 text-center rounded-md hover:text-purple'>Blog</Link>
                    <Link href='/about' className='text-lg w-24 font-medium text-center rounded-md hover:text-purple'>About</Link>
                    <div className='relative block w-full max-w-[53px] ease-in duration-300 overflow-hidden focus-within:max-w-[200px]'>
                        <input
                            className='block appearance-none w-full bg-[white] text-transparent cursor-pointer transition ease-in duration-150 
                        p-[5px] rounded-lg border-[none] outline-none placeholder:text-white focus-within:placeholder:text-gray placeholder:text-base 
                      focus-within:bg-white focus-within:text-gray focus-within:shadow-[inset_0px_0px_10px_rgba(0,0,0,0.1)] focus-within:pr-[50px]'
                            type="text"
                            placeholder='Search here ...'
                        />
                        <Image className='absolute translate-x-2/4 -translate-y-2/4 pointer-events-none right-[calc(53px_/_2)] top-2/4' src='/search.png' alt='' width={22} height={22} />
                    </div>
                    <Link href='/contact' className='text-white px-8 py-3 text-base bg-purple border rounded-lg transition ease-in-out duration-500 hover:bg-transparent hover:text-purple hover:border-purple hover:shadow-sm'>
                        Contact Us
                    </Link>
                </div>
            )}
        </>
    );
}

export default Authlinks;
