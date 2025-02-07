import Link from 'next/link';
import React from 'react';

const Sidebar = () => {
  return (
    <div className='w-28 md:w-80 h-screen relative py-12 border-r border-lightGray'>
      <div className='w-1/2 md:w-4/5 absolute right-0 space-y-5'>
        <Link
          className='flex item-center justify-center border rounded-lg mr-3 border-purple text-lg text-purple font-heading font-semibold px-3 py-2 bg-white transition ease-in-out duration-500 hover:bg-purple hover:text-white hover:border-purple hover:shadow-sm'
          href='/admin/addProduct'>
          Add blogs
        </Link>
        <Link
          className='flex item-center justify-center border rounded-lg mr-3 border-purple text-purple text-lg font-heading font-semibold px-3 py-2 bg-white transition ease-in-out duration-500 hover:bg-purple hover:text-white hover:border-purple hover:shadow-sm'
          href='/admin/blogList'>
          Blog lists
        </Link>
        <Link className='flex item-center justify-center border rounded-lg mr-3 border-purple text-purple text-lg font-heading font-semibold px-3 py-2 bg-white transition ease-in-out duration-500 hover:bg-purple hover:text-white hover:border-purple hover:shadow-sm'
          href='/admin/subscription'>
          Subscriptions
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
