"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Card from '../card/Card';
import { blog_data } from '@/public/assets';
import axios from 'axios';

const CardList = () => {

    const [blogs, setBlogs] = useState([]);

    const fetchBlogs = async () => {
        const response = await axios.get('/api/blog');
        setBlogs(response.data.blogs);
        console.log(response.data.blogs);
    }


    useEffect(() => {
        fetchBlogs();
    },[])

    return (
        <div className='w-11/12 m-auto md:mt-52 md:mb-20'>
            <div>
                <div className='flex items-center justify-between mb-10'>
                    <h1 className='md:text-3xl text-xl text-black font-bold font-heading'>Our Resent Post</h1>
                    <button className='text-white md:px-8 px-5 py-3 text-base bg-purple border rounded-lg transition ease-in-out duration-500 hover:bg-transparent hover:text-purple hover:border-purple hover:shadow-sm'>
                        <Link href='/blog'>View All</Link>
                    </button>
                </div>
                <div>
                    <div className='hidden md:flex flex-row md:w-full w-11/12 md:border-none border border-lightGray m-auto gap-10 p-6 md:p-0 rounded-xl'>
                        <div className='relative h-60 md:h-96 md:w-4/5 w-full'>
                            <Image src='/hero2.png' fill alt='' />
                        </div>

                        <div className=' rounded-xl md:w-3/5 py-8 md:py-6 md:px-5 bg-white text-black font-body'>
                            <div className='flex items-center gap-3 mb-2'>
                                <h1 className='font-semibold text-lg text-black'>DEVELOPMENT</h1>
                                <p className='text-gray text-base'>16 March 2024</p>
                            </div>
                            <h1 className='font-heading text-3xl md:w-4/5 font-bold mb-3'>How to make a Game look more attractive with New VR & AI Technology</h1>
                            <p className='text-base text-gray mb-7'>
                                Google has been investing in AI for many years and bringing its benefits
                                to individuals, businesses and communities. Whether it’s publishing state-of-the-art
                                research, building helpful products or developing tools and resources that enable
                                others, we’re committed to making AI accessible to everyone.
                            </p>
                            <Link href='/blog' className='text-purple w-fit md:mt-8 px-8 py-3 text-base font-semibold border border-purple rounded-lg transition ease-in-out duration-500'>
                                Read more
                            </Link>
                        </div>
                    </div>

                    <div className='md:my-16 flex md:flex-row flex-wrap flex-col items-center justify-between'>
                        {
                            blogs.slice(0, 3).map((item, index) => {
                                return <Card
                                    key={index}
                                    image={item.image}
                                    title={item.title}
                                    description={item.description}
                                    category={item.category}
                                    id={item._id}
                                />
                            })
                        }
                    </div>
                </div>
            </div>

            <div>
                <div className='flex items-center justify-between mb-10'>
                    <h1 className='md:text-3xl text-xl text-black font-bold font-heading'>Popular Post</h1>
                    <button className='text-white md:px-8 px-5 py-3 text-base bg-purple border rounded-lg transition ease-in-out duration-500 hover:bg-transparent hover:text-purple hover:border-purple hover:shadow-sm'>
                        <Link href='/blog'>View All</Link>
                    </button>
                </div>
                <div className='md:my-16 flex md:flex-row flex-wrap flex-col items-center justify-between'>
                    {
                        blogs.map((item, index) => {
                            return <Card
                                key={index}
                                image={item.image}
                                title={item.title}
                                description={item.description}
                                id={item._id}
                                category={item.category}
                            />
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default CardList;
