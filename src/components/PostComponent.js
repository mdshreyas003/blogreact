import axios from 'axios';
import React, { useState } from 'react';

function PostComponent({id, setPost,fetchUserPost}) {
  const [newPost, setNewPost] = useState({
    title: '',
    description: '',
    company: '',
    role: '',
    package: '',
    content: '',
    user: {
      uid: id, // Replace with the appropriate user ID
    },
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewPost((prevPost) => ({ ...prevPost, [name]: value }));
  };

  
const handleSubmit = (event) => {
  event.preventDefault();

 
  axios.post('https://special-pear-production.up.railway.app/posts', newPost, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      console.log('New post created:', response.data);
      // Reset the form fields
      setPost(false);
      fetchUserPost();
      setNewPost({
        title: '',
        description: '',
        company: '',
        role: '',
        package: '',
        content: '',
        user: {
          uid: id,
        },
      });
    })
    .catch((error) => console.error('Error creating post:', error));
};
  return (
    <div className="flex justify-center items-center bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-lg text-center w-full md:w-1/2 lg:w-1/3">
        <h2 className="text-4xl font-bold mb-4">Create New Post</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={newPost.title}
            onChange={handleInputChange}
            className="w-full mb-2 py-2 px-4 bg-gray-700 text-white rounded"
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={newPost.description}
            onChange={handleInputChange}
            className="w-full mb-2 py-2 px-4 bg-gray-700 text-white rounded"
          />
          <input
            type="text"
            name="company"
            placeholder="Company"
            value={newPost.company}
            onChange={handleInputChange}
            className="w-full mb-2 py-2 px-4 bg-gray-700 text-white rounded"
          />
          <input
            type="text"
            name="role"
            placeholder="Role"
            value={newPost.role}
            onChange={handleInputChange}
            className="w-full mb-2 py-2 px-4 bg-gray-700 text-white rounded"
          />
          <input
            type="text"
            name="package"
            placeholder="Package"
            value={newPost.package}
            onChange={handleInputChange}
            className="w-full mb-2 py-2 px-4 bg-gray-700 text-white rounded"
          />
          <textarea
            name="content"
            placeholder="Content"
            value={newPost.content}
            onChange={handleInputChange}
            className="w-full mb-2 py-2 px-4 bg-gray-700 text-white rounded"
          />
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 cursor-pointer"
          >
            Create Post 🚀
          </button>
        </form>
      </div>
    </div>
  );
}

export default PostComponent;
