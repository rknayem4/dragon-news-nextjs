import React from 'react';
import Marquee from 'react-fast-marquee';

const BrakingNews = () => {
  return (
    <div className='my-4 bg-gray-100 p-4 flex justify-center items-center gap-5'>
      <span className='bg-[#D72050] py-2 px-5 text-white font-semibold'>Latest</span>
    <Marquee pauseOnHover={true} speed={'60'}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui facere consequatur ducimus similique quaerat consectetur dolor veritatis ab accusantium nam nesciunt a, reiciendis cumque voluptatem magni ratione deserunt nisi fuga.
    </Marquee>
    </div>
  );
};

export default BrakingNews;