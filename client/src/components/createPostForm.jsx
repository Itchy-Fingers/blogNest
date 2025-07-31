import { useState } from 'react';
import { Textarea } from './ui/textarea';
import { Input } from './ui/input';

const CreatePostForm = ({ onSubmit }) => {
  const [form, setForm] = useState({
    title: '',
    content: '',
    image: '',
    category: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
    setForm({ title: '', content: '', image: '', category: '' });
  };

     return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto mt-6 space-y-4">
      <Input
        name="title"
        value={form.title}
        onChange={handleChange}
        placeholder="Title"
        className="w-full border p-2 rounded"
        required
      />
      <Textarea
        name="content"
        value={form.content}
        onChange={handleChange}
        placeholder="Content"
        className="w-full border p-2 rounded"
        required
      />
      <Input
        name="image"
        value={form.image}
        onChange={handleChange}
        placeholder="Image URL"
        className="w-full border p-2 rounded"
      />
      <Input
        name="category"
        value={form.category}
        onChange={handleChange}
        placeholder="Category"
        className="w-full border p-2 rounded"
      />
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
        Create Post
      </button>
    </form>
  );
};

export default CreatePostForm;
