import React from 'react';
import PostCard from './postCard';

const PostList = ({ posts }) => {
  if (!posts || posts.length === 0) {
    return <div>No posts available.</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <PostCard
          key={post._id || post.id}
          title={post.title}
          excerpt={post.excerpt}
          image={post.image}
          author={post.author}
        />
      ))}
    </div>
  );
};

export default PostList;

