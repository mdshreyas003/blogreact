import axios from 'axios';
import React, { useState } from 'react';

const Post = ({ post}) => {
    const[expand,setExpand] = useState("Read Post ➡️")
  const [selectedPost, setSelectedPost] = useState(false);

  const handlePostClick = () => {
    if(selectedPost){
        setExpand("Read Post ➡️")
    }
    else{
        setExpand("Close Post ❌")
    }
    setSelectedPost(!selectedPost);
  };
  return (
    <div className="bg-gray-900 text-white rounded-lg shadow-lg p-12 border border-gray-600 hover:shadow-xl">
      <h3 className="text-5xl text-gray-400 text-left font-semibold mb-2">{post.title}</h3>
      <p className="text-gray-400 text-3xl text-left my-8 ">
        {post.company} | Role: {post.role}
      </p>
      <div className='flex space-x-5'>
      {!selectedPost && <p className='text-gray-400 text-xl text-left'> {post.description}</p>}
      <a
        onClick={handlePostClick}
        className="text-blue-400 cursor-pointer hover:underline"
      >
        {expand}
      </a>
      </div>
      {selectedPost && <p className="mt-2 text-gray-500 text-xl text-left">{post.content}</p>}
    </div>
  );
};

export default Post;
