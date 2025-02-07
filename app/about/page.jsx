import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AboutPage = () => {
    return (
        <div className=' bg-slate-50 py-10 md:py-20 relative md:z-10'>
            <div className='lg:w-[45%] md:w-[50%] w-[90%] m-auto'>
                <h1 className='md:text-3xl text-2xl font-heading font-bold text-center text-black py-5'>Creative Blog Writting and publishing site</h1>
                <p className='md:text-base text-sm text-gray text-center'>
                    Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
                </p>
            </div>
            <div className='relative h-[200px] md:h-[400px] w-[90%] m-auto md:my-16 my-10'>
                <Image src='/about.png' alt='' fill />
            </div>
            <div className='w-[90%] m-auto'>
                <p className='md:text-lg text-sm font-heading font-medium uppercase py-5 md:py-8 text-gray'>How we work</p>
                <div className='flex flex-col md:flex-row gap-5 justify-between'>
                    <h1 className='text-2xl md:text-3xl text-black font-heading font-bold md:w-[20%]'>I will show you how our team works</h1>
                    <p className='text-gray text-base font-heading md:w-[28%] md:pt-10'>Bring to the table win-win market strategies to ensure perfect articles. </p>
                </div>

                <div className='flex md:flex-row flex-col items-center md:gap-6 md:mt-10 mt-5'>
                    <div className='border-none shadow-md rounded-lg my-5 p-5 text-lightGray hover:text-white hover:bg-purple transition ease-in duration-500'>
                        <h1 className='text-4xl md:text-6xl font-heading font-bold'>01</h1>
                        <p className='py-3 text-black font-heading md:text-lg text-base md:font-bold font-semibold'>Brainstorming</p>
                        <p className='font-body text-sm md:text-base pb-6'>
                            Bring to the table win-win survival strategies to
                            ensure proactive domination. At the end of the day,
                            going forward, a new normal that has evolved from
                            generation X is on the runway heading towards a streamlined
                            cloud solution. User generated
                        </p>
                        <button className='text-white w-fit underline hover:no-underline text-base font-semibold'>
                            <Link href='/'>Learn More</Link>
                        </button>
                    </div>

                    <div className='border-none shadow-md rounded-lg my-5 p-5 text-lightGray hover:text-white hover:bg-purple transition ease-in duration-500'>
                        <h1 className='text-4xl md:text-6xl font-heading font-bold'>02</h1>
                        <p className='py-3 text-black font-heading md:text-lg text-base md:font-bold font-semibold'>Analysing</p>
                        <p className='font-body text-sm md:text-base pb-6'>
                            Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the
                            digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information
                            highway will close the loop on focusing solely on the bottom line solely on the bottom line.
                        </p>
                        <button className='text-white w-fit underline hover:no-underline text-base font-semibold'>
                            <Link href='/'>Learn More</Link>
                        </button>
                    </div>

                    <div className='border-none shadow-md rounded-lg my-5 p-5 text-lightGray hover:text-white hover:bg-purple transition ease-in duration-500'>
                        <h1 className='text-4xl md:text-6xl font-heading font-bold'>03</h1>
                        <p className='py-3 text-black font-heading md:text-lg text-base md:font-bold font-semibold'>News Publishing</p>
                        <p className='font-body text-sm md:text-base pb-6'>
                            Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to
                            corporate strategy foster collaborative thinking to further the overall value proposition. Organically
                            grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
                        </p>
                        <button className='text-white w-fit underline hover:no-underline text-base font-semibold'>
                            <Link href='/'>Learn More</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;
