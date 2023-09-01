import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Post from './Post'; // Import the Post component

function PostList() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');

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

  const searchPosts = async (e) => {

    e.preventDefault();
    if(search.length ===0) return;
    var toSearch = '';
    var list = search.split(':');
    var name = list[1];
    if (list[0] === '@Company') {
      toSearch = 'Company';
    } else {
      toSearch = 'Role';
    }

    try {
      const response = await axios.get(
        `https://special-pear-production.up.railway.app/posts/search/by${toSearch}/${name}`
      ); // Replace with your API endpoint
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  return (
    <div className="bg-slate-900 text-white min-h-screen">
      <div className="container mx-auto py-8">
        <div className='mb-4 flex-col flex space-y-3 text-left px-8 py-2 right-0  xl:fixed'>
        <form onSubmit={searchPosts} className="">
          <input
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by @Company:name or @Role:name"
            className="px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 bg-gray-800 text-white"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg ml-2 hover:bg-blue-600">
            Search
          </button>
          
        </form>
        <button
            className="bg-green-400 text-white font-semibold py-2 px-4 rounded-lg ml-2 hover:bg-blue-600"
            onClick={fetchPosts}
          >
            See All Posts
          </button>
          </div>
        <div className='w-full flex justify-center '>
        <div className="mx-auto  space-y-8">
          {posts.map((post) => (
            <Post key={post.pid} post={post} />
          ))}
        </div>
        </div>
      </div>
    </div>
  );
}

export default PostList;
