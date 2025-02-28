'use client'
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Footer = () => {

  const [email, setEmail] = useState('')

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('email',email);
    const response = await axios.post('/api/email',formData);
    if (response.data.success){
      toast.success(response.data.msg);
      setEmail('');
    }
    else{
      toast.error('Error')
    }
  }

  return (
    <div>
      <div className='py-32 bg-purple w-full relative'>
        <div className='hidden md:block absolute z-999 -top-20 left-0'>
          <Image src='/Mask1.png' alt='' width={400} height={300} />
        </div>
        <div className='text-center'>
          <h1 className='text-2xl md:text-3xl lg:text-5xl font-bold font-heading text-white md:w-6/12 w-4/5 m-auto'>Get our stories delivered From us to your inbox weekly.</h1>
          <form onSubmit={onSubmitHandler} className='flex gap-3 items-center justify-center my-8'>
            <input
              type="email"
              placeholder="Your Email"
              onChange={(e)=>setEmail(e.target.value)}
              value={email}
              className="p-3 md:w-52 w-1/2 rounded-lg bg-purple text-white border focus:outline-none"
            />
            <button type='submit' className='text-purple w-fit px-8 py-3 text-base font-semibold border border-white bg-white rounded-lg transition ease-in-out duration-500 hover:bg-purple hover:text-white hover:border-white hover:shadow-sm'>
              Get Started
            </button>
          </form>
          <p className='text-lg m-auto font-heading text-lightGray md:w-2/5 w-1/2'>
            Get a response tomorrow if you submit by 9pm today. If we received after 9pm will get a reponse the following day.
          </p>
        </div>
        <div className='hidden md:block absolute z-0 -bottom-0 right-0 h-1/3 w-1/3'>
          <Image src='/Mask2.png' alt='' fill />
        </div>
      </div>

      <div className='mt-20'>
        <Link className='' href="/">
          <Image className='m-auto my-8' src="/Logo.png" alt='' width={120} height={40} />
        </Link>
        <ul className='flex items-center justify-center gap-8 md:gap-16'>
          <Link href='/' className='text-base text-center py-2 rounded-md hover:text-purple'>Home</Link>
          <Link href='/blog' className='text-base text-center py-2 rounded-md hover:text-purple'>Blog</Link>
          <Link href='/about' className='text-base text-center py-2 rounded-md hover:text-purple'>About</Link>
          <Link href='/contact' className='text-base text-center py-2 rounded-md hover:text-purple'>Contact Us</Link>
        </ul>

        <p className='text-gray w-4/5 m-auto text-center font-heading text-lg border-t-2 border-lightGray mt-8 py-10'>
          Copyright &copy; 2025. All Right Reserved
        </p>
      </div>


    </div>
  );
}

export default Footer;
