"use client"
import { useRouter } from 'next/navigation';
import React from 'react';

const Pagination = ({ page, hasPrev, hasNext }) => {

  const router = useRouter()

  return (
    <div className='flex justify-between mt-12'>
      <button
        className='w-24 rounded-lg border-none p-4 bg-red-600 text-white cursor-pointer disabled:bg-[crimson] disabled:cursor-not-allowed'
        disabled={!hasPrev}
        onClick={() => router.push(`?page=${page - 1}`)}
      >
        Previous
      </button>
      <button
        className='w-24 rounded-lg border-none p-4 bg-red-600 text-white cursor-pointer disabled:bg-[crimson] disabled:cursor-not-allowed'
        disabled={!hasNext}
        onClick={() => router.push(`?page=${page + 1}`)}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;