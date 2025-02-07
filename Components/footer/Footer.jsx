import Image from 'next/image';
import Link from 'next/link';
// import styles from './footer.module.css'
import React from 'react';

const Footer = () => {
  return (
    <div>
      <div className='py-32 bg-purple w-full relative'>
        <div className='hidden md:block absolute z-999 top-[-80px] left-0'>
          <Image src='/Mask1.png' alt='' width={400} height={300} />
        </div>
        <div className='text-center'>
          <h1 className='text-2xl md:text-3xl lg:text-5xl font-bold font-heading text-white md:w-[45%] w-[80%] m-auto'>Get our stories delivered From us to your inbox weekly.</h1>
          <div className='flex gap-3 items-center justify-center my-8'>
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 md:w-[200px] w-[50%] rounded-lg focus:outline-none"
            />
            <button className='text-white w-fit px-8 py-3 text-base font-semibold border border-white rounded-lg transition ease-in-out duration-500'>
              <Link href='/'>Get Started</Link>
            </button>

          </div>
          <p className='text-lg m-auto font-heading text-lightGray md:w-[40%] w-[80%]'>
            Get a response tomorrow if you submit by 9pm today. If we received after 9pm will get a reponse the following day.
          </p>
        </div>
        <div className='hidden md:block absolute z-0 -bottom-0 right-0 h-[150px] w-[400px]'>
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

        <p className='text-gray w-[80%] m-auto text-center font-heading text-lg border-t-2 border-lightGray mt-8 py-10'>
          Copyright &copy; 2025. All Right Reserved
        </p>
      </div>


    </div>
  );
}

export default Footer;
