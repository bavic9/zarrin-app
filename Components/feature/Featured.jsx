import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Featured = () => {
    return (
        <div className='my-24'>
            <div className='md:relative flex flex-col md:block w-[90%] m-auto md:border-none border border-lightGray p-6 md:p-0 rounded-xl'>
                <div className='relative h-[200px] md:h-[400px]'>
                    <Image src='/Container.png' fill alt='' />
                </div>

                <div className=' md:absolute -bottom-[90px] right-0 rounded-xl md:w-[60%] py-8 md:py-10 md:px-5 bg-white text-black font-body md:shadow-xl'>
                    <div className='flex items-center gap-3 mb-4'>
                        <h1 className='font-semibold text-lg text-black'>DEVELOPMENT</h1>
                        <p className='text-gray text-base'>16 March 2024</p>
                    </div>
                    <h1 className='font-heading text-3xl md:w-[80%] font-bold mb-5'>How to make a Game look more attractive with New VR & AI Technology</h1>
                    <p className='text-base text-gray mb-5'>
                        Google has been investing in AI for many years and bringing its benefits
                        to individuals, businesses and communities. Whether it’s publishing state-of-the-art
                        research, building helpful products or developing tools and resources that enable
                        others, we’re committed to making AI accessible to everyone.
                    </p>
                    <button className='text-purple w-fit px-8 py-3 text-base font-semibold border border-purple rounded-lg transition ease-in-out duration-500'>
                        <Link href='/'>Read more</Link>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Featured;
