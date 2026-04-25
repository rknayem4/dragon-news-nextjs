import Image from "next/image";
import React from "react";

const NewsCard = ({ cardData }) => {
  const { title, image_url } = cardData;
  return (
    <div className="card bg-base-100  shadow-sm">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
      </div>
      <figure>
    <Image src={image_url} height={300} width={300} alt={title} className="w-full"></Image>
      </figure>
    </div>
  );
};

export default NewsCard;
