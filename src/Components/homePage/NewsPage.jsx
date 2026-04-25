import React from 'react';
import NewsCard from '../shared/NewsCard';

const NewsPage = ({data}) => {
  return (
    <div className='flex flex-col gap-5'>
      {
        data.map(cardData => <NewsCard key={cardData._id} cardData={cardData}></NewsCard>)
      }
    </div>
  );
};

export default NewsPage;