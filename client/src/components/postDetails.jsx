import React from 'react';
import CommentSection from '@components/commentSection';

const PostDetails = ({ post, onAddComment }) => {
  return (
    <div className="max-w-3xl mx-auto mt-8">
      <img src={post.image} alt={post.title} className="w-full h-64 object-cover rounded" />
      <h1 className="text-3xl font-bold mt-4">{post.title}</h1>
      <p className="text-gray-600 mt-2">By {post.author}</p>
      <p className="mt-4">{post.content}</p>

      <CommentSection comments={post.comments} onAddComment={onAddComment} />
    </div>
  );
};

export default PostDetails;

