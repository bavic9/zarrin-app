"use client"
import BlogTableItem from '@/Components/adminComponents/BlogTableItem';
import axios from 'axios';
import { toast } from 'react-toastify';
import React, { useEffect, useState } from 'react';

const page = () => {

  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    const response = await axios.get('/api/blog');
    setBlogs(response.data.blogs);
    console.log(response.data.blogs);
  }

  const deleteBlog = async (mongoId)=> {
    const response = await axios.delete('/api/blog',{
      params:{
        id:mongoId
      }
    })
    toast.success(response.data.msg);
    fetchBlogs();
  }

  useEffect(() => {
    fetchBlogs()
  }, [])

  return (
    <div className='py-10 px-16'>
      <h1 className='font-heading text-xl font-bold text-purple '>All Blogs</h1>
      <div className='relative max-h-[80vh] w-[850px] overflow-x-auto mt-6 border-gray border scrollbar-hide'>
        <table className='w-full text-sm text-gray text-left'>
          <thead className='text-base text-purple bg-slate-50 uppercase font-heading'>
            <tr>
              <th scope='col' className='hidden sm:block py-6 px-6'>
                Blog Title
              </th>
              <th scope='col' className='py-6 px-6'>
                Date
              </th>
              <th scope='col' className='py-6 px-6'>
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((item, index) => {
              return <BlogTableItem
                key={index}
                mongoId={item._id}
                title={item.title}
                date={item.date}
                deleteBlog={deleteBlog}
              />
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default page;
