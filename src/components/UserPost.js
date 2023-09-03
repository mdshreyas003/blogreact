import axios from 'axios';
import React, { useState } from 'react';
import deleteIMG from './delete.png'

const UserPost = ({ post ,fetchUserPost}) => {
  const [expand, setExpand] = useState(false);

  const handlePostClick = () => {
    setExpand(!expand);
  };

  const handleDelete = async () => {
    const response = await axios.delete(`https://special-pear-production.up.railway.app/posts/${post.pid}`);
    fetchUserPost();
  };

  return (
    <div className="bg-gray-900 text-white rounded-lg shadow-lg p-4 border border-gray-600 hover:shadow-xl">
      <div className="flex items-center justify-between mb-2">
        <div className="text-2xl text-gray-400 text-left font-semibold">{post.title}</div>
        <button onClick={handleDelete} className="text-red-500 p-2 rounded-full hover:bg-red-500 hover:text-white">
          <img width={'60px'} height={'60px'} src={deleteIMG}/>
          Delete
        </button>
      </div>

      <p className="text-gray-400 text-lg text-left my-2">
        {post.company} | Role: {post.role}
      </p>

      <p className="text-gray-400 text-md text-left">
        {expand ? post.content : post.description}
      </p>

      <a
        onClick={handlePostClick}
        className="text-blue-400 cursor-pointer hover:underline"
      >
        {expand ? "Show Less" : "Show More"}
      </a>
    </div>
  );
};

export default UserPost;
