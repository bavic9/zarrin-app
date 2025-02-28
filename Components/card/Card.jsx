import { blog_data } from '@/public/assets';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const Card = ({title,description,category,image,id}) => {
  return (
    <div className='md:w-1/3 md:h-[520px] mb-5 hover:shadow-lg p-4 rounded-xl'>
      <Link href={`/blog/${id}`} className='relative w-full'>
        <Image src={image} alt='' width={400} height={400} className=' rounded-xl h-[300px]' />
      </Link>
      <div className='pt-8 text-start bg-transparent text-black font-body'>
        <div className='flex items-center gap-3 mb-4'>
          <h1 className='font-semibold text-base text-black'>{category}</h1>
          <p className='text-gray text-sm'>16 March 2024</p>
        </div>
        <h1 className='font-heading text-xl font-bold mb-5'>{title}</h1>
        <p className='text-sm text-gray mb-5'  dangerouslySetInnerHTML={{__html:description.slice(0, 120)}} ></p>
        <button className='text-purple pb-3 w-fit underline hover:no-underline text-base font-semibold'>
          <Link href={`/blog/${id}`}>Read more...</Link>
        </button>
      </div>
    </div>
  );
}

export default Card;
