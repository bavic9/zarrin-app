import React from 'react';
import Image from 'next/image';


const BlogTableItem = ({title,date,deleteBlog,mongoId}) => {

  const BlogDate = new Date(date);

  return (
    <tr className='w-full bg-white border-b border-gray text-base font-heading hover:bg-purple hover:text-white transition ease-in-out duration-700'>
      <td className='px-6 py-5'>
        {title?title:'no title'}
      </td>
      <td className='px-6 py-5'>
        {BlogDate.toDateString()}
      </td>
      <td onClick={()=>deleteBlog(mongoId)} className='px-6 py-5 cursor-pointer hover:scale-y-150 transition ease-in-out duration-300'>
        <Image src='/delete.png' alt='' width={15} height={15} />
      </td>
    </tr>
  );
}

export default BlogTableItem;
