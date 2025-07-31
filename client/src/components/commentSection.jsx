import { useState } from 'react';
import { Input } from './ui/input';

const CommentSection = ({ comments = [], onAddComment }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAddComment(text);
    setText('');
  };

  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-2">Comments</h3>
      <ul className="space-y-3 mb-4">
        {comments.map((c, idx) => (
          <li key={idx} className="bg-gray-100 p-2 rounded">{c}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a comment..."
          className="flex-1 border border-gray-300 rounded px-3 py-1"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 rounded">Post</button>
      </form>
    </div>
  );
};

export default CommentSection;
