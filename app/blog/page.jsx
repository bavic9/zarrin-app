"use client"
import Card from '@/Components/card/Card';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const BlogPage = () => {

    const [menu, setMenu] = useState('All')
    const [blogs, setBlogs] = useState([]);

    const fetchBlogs = async () => {
        const response = await axios.get('/api/blog');
        setBlogs(response.data.blogs);
        console.log(response.data.blogs);
    }


    useEffect(() => {
        fetchBlogs();
    }, [])

    return (
        <div className=' bg-slate-50 py-10 md:py-20 relative md:z-10'>
            <div className='lg:w-[45%] md:w-[50%] w-[90%] m-auto'>
                <h1 className=' text-gray uppercase font-semibold font-body text-sm md:text-base text-center'>our blogs</h1>
                <h1 className='md:text-3xl text-2xl font-heading font-bold text-center text-black py-5'>Find our all blogs from here</h1>
                <p className='md:text-base text-sm text-gray text-center'>
                    our blogs are written from very research research and well known writers writers so that  we can provide you the best blogs and articles articles for you to read them all along
                </p>
            </div>

            <div className='flex justify-center gap-6 my-16 text-lg font-heading'>
                <button onClick={()=>setMenu('All')} className={menu==='All'?'bg-purple text-white py-1 px-4 rounded-sm':''}>All</button>
                <button onClick={()=>setMenu('Sport')} className={menu==='Sport'?'bg-purple text-white py-1 px-4 rounded-sm':''}>Sport</button>
                <button onClick={()=>setMenu('Travel')} className={menu==='Travel'?'bg-purple text-white py-1 px-4 rounded-sm':''}>Travel</button>
                <button onClick={()=>setMenu('Development')} className={menu==='Development'?'bg-purple text-white py-1 px-4 rounded-sm':''}>Development</button>
            </div>

            <div className='md:my-16 flex md:flex-row flex-wrap flex-col items-center justify-between w-[90%] m-auto'>
                {
                    blogs.filter((item)=> menu==='All'?true:item.category===menu).map((item, index) => {
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
    );
}

export default BlogPage;
