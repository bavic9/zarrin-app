import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Hero = () => {
  return (
    <div className='bg-purple text-white font-heading relative'>
      <div className='hidden md:block absolute z-999 top-[-80px] left-0'>
        <Image src='/Mask1.png' alt='' width={400} height={300} />
      </div>
      <div className='flex flex-col md:flex-row max-w-[90vw] m-auto py-28 gap-10 space-y-8'>
        {/* left side? */}
        <div className='flex flex-1 flex-col gap-5 mt-5 lg:w-[60%] ml-5'>
          <p className='mt-1 text-base font-medium'>Featured post</p>
          <h1 className='text-5xl md:text-6xl lg:text-7xl w-[80%] font-bold my-5 leading-tight'>How AI will Change the Future</h1>
          <p className='text-sm lg:w-[50%] pr-6 mb-5 leading-6'>
            The future of AI will see home robots having enhanced intelligence,
            increased capabilities, and becoming more personal and possibly cute.
            For example, home robots will overcome navigation, direction
          </p>
          <button className='text-black w-fit px-8 py-3 text-base font-semibold bg-white rounded-lg transition ease-in-out duration-500'>
            <Link href='/'>Read more</Link>
          </button>
        </div>

        {/* right side */}
        <div className=' md:w-[40%] lg:h-[400px] h-[300px] relative md:z-10'>
          <Image src='/hero1.png' fill alt='' />
        </div>
      </div>
      <div className='hidden md:block absolute z-0 bottom-0 right-0'>
        <Image src='/Mask2.png' alt='' width={400} height={300} />
      </div>
    </div>

  );
}

export default Hero;