import Link from 'next/link';
import React from 'react';

const NotFound = () => {
  return (
    <div className='flex flex-col justify-center items-center h-[60vh] text-purple-600 space-x-4 '>
      <h3 className='text-4xl font-bold '>This page is not found</h3>
      <Link href="/"><button className='btn bg-purple-600 text-white my-5'>Back To Home</button></Link>
    </div>
  );
};

export default NotFound;