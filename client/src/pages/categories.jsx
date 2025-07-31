import React from 'react';
import CategoryList from '../components/categorylist';

const CategoriesPage = () => {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Categories</h1>
      <CategoryList />
    </div>
  );
};

export default CategoriesPage;
