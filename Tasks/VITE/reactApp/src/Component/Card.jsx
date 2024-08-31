import React, { useState } from 'react';

const Card = ({ post }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };
  const imageUrl = post.image
  return (
    <div className="Card">
      <h2 className='h2 text-2xl'>{post.title}</h2>
      <p className={`content ${isExpanded ? 'expanded' : ''}`}>
        {post.content}
      </p>
      <button className="readMoreBtn" onClick={toggleContent}>
        {isExpanded ? 'Read Less' : 'Read More'}
      </button>
      {post.image && <img src={imageUrl} alt={post.title} />}
    </div>
  );
};

export default Card;
