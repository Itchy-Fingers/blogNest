import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CommentSection from '../components/commentSection';

const PostDetail = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    // Simulate fetching post data
    const fetchPost = async () => {
      try {
        const res = await fetch(`/api/posts/${postId}`);
        const data = await res.json();
        setPost(data);
      } catch (err) {
        console.error('Error fetching post:', err);
      }
    };
    fetchPost();
  }, [postId]);

  if (!post) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-500 text-sm mb-6">By {post.author} • {new Date(post.createdAt).toLocaleDateString()}</p>
      <img src={post.imageUrl} alt={post.title} className="w-full h-64 object-cover rounded mb-6" />
      <div className="prose prose-lg max-w-none mb-10">
        <p>{post.content}</p>
         </div>

      <CommentSection postId={postId} />
    </div>
  );
  };

export default PostDetail;

