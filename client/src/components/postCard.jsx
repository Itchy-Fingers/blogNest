import React from 'react';

const PostCard = ({ title, excerpt, image, author }) => {
  return (
    <div className="bg-white shadow-md rounded overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 text-sm">{excerpt}</p>
        <p className="text-sm text-gray-500 mt-2">By {author}</p>
      </div>
    </div>
  );
};

export default PostCard;

