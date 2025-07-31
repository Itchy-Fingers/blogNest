import React from 'react';
import CreatePostForm from '../components/createPostForm';

const DashboardPage = () => {
  const handleCreatePost = (data) => {
    console.log('New post:', data);
    // Post to API or backend
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <p className="text-gray-600 mb-6">Create and manage your blog posts</p>
      <CreatePostForm onSubmit={handleCreatePost} />
    </div>
  );
};

export default DashboardPage;