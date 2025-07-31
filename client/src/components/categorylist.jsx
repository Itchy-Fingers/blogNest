import React from 'react';

const CategoryList = ({ categories = [], onSelect }) => {
  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm hover:bg-blue-200"
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryList;
