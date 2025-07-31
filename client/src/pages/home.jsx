import React from 'react';
import { Link } from 'react-router-dom';
import PostList from '../components/postlist';
import CategoryList from '../components/categorylist';

const HomePage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <section className="mb-10 text-center">
        <h1 className="text-4xl font-bold mb-3">Welcome to My Blog</h1>
        <p className="text-gray-600 mb-5">Insights, Stories & Learning</p>
        <Link to="/dashboard">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Create a Post
          </button>
        </Link>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Browse by Category</h2>
        <CategoryList />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Recent Posts</h2>
        <PostList />
      </section>
    </div>
  );
};

export default HomePage;
