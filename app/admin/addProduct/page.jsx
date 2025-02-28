'use client'
import { assets } from '@/public/assets';
import axios from 'axios';
import Image from 'next/image';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const page = () => {

  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    title: '',
    description: '',
    category: 'Sport',
  })

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value })); 
    console.log(data);
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('description', data.description);
    formData.append('category', data.category);
    formData.append('image', image);
    const response = await axios.post('/api/blog', formData);
    if (response.data.success) {
      toast.success(response.data.msg);
      setImage(false);
      setData({
        title: '',
        description: '',
        category: 'Travel',
      })
    }
    else {
      toast.error('Error')
    }
  }

  return (
    <div>
      <form onSubmit={onSubmitHandler} className='pt-5 px-5 md:pt-12 md:pl-16'>
        <p className='text-xl font-semibold font-heading text-black'>
          Upload Picture
        </p>
        <label htmlFor="image">
          <Image className='mt-4'
            src={!image ? assets.upload_area : URL.createObjectURL(image)}
            alt=''
            width={140}
            height={70}
          />
        </label>
        <input
          type="file"
          id='image'
          hidden
          required
          onChange={(e) => setImage(e.target.files[0])}
        />
        <p className='text-xl mt-4 font-semibold font-heading text-black'>Blog title</p>
        <input name='title' onChange={onChangeHandler} value={data.title} className='w-full md:w-[500px] mt-4 py-3 rounded-lg pl-2 border border-lightGray' type="text" placeholder='Type here' required />
        <p className='text-xl mt-4 font-semibold font-heading text-black'>Blog Description</p>
        <textarea name='description' onChange={onChangeHandler} value={data.description} className='w-full md:w-[500px] mt-4 py-3 rounded-lg pl-2 border border-lightGray' type="text" placeholder='Write content here' rows={6} required />
        <p className='text-xl mt-4 font-semibold font-heading text-black'>Blog Category</p>
        <select name="category" onChange={onChangeHandler} value={data.category} className='w-40 mt-4 px-4 py-3 border rounded-lg text-lightGray'>
          <option value="Sport">Sport</option>
          <option value="Travel">Travel</option>
          <option value="Development">Development</option>
        </select>
        <br />
        <button type='submit' className='text-white w-40 mt-8 h-12 font-heading text-base bg-purple border rounded-lg transition ease-in-out duration-500 hover:bg-transparent hover:text-purple hover:border-purple hover:shadow-sm'>
          ADD
        </button>
      </form>
    </div>
  );
}

export default page;
