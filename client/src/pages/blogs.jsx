import React from 'react';
import PostList from '../components/postlist';

const BlogPage = () => {
  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">All Blog Posts</h1>
      <PostList />
    </div>
  );
};

export default BlogPage;
