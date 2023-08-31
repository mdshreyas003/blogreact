import React, { useEffect, useState } from 'react';
import axios from 'axios';

function PostList() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    // Fetch posts when the component mounts
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('https://special-pear-production.up.railway.app/posts'); // Replace with your API endpoint
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.pid} style={{border:'1px solid black'}}>
            <h2 onClick={() => handlePostClick(post)} style={{ cursor: 'pointer' }}>
              {post.title}
            </h2>
            <p>{post.company} | Role: {post.role}</p>
            {selectedPost && selectedPost.pid === post.pid && (
              <p>{selectedPost.content}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
