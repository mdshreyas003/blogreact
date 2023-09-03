import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Post from './Post'; // Import the Post component
import Search from './Search';

function PostList() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');
const [update,setUpdate]=useState(false)
  useEffect(() => {
    // Fetch posts when the component mounts
    fetchPosts();
  }, [update]);

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
    if(search.length ===0){
      fetchPosts();
    }
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
      <Search setSearch = {setSearch} searchPosts={searchPosts} fetchPosts= {fetchPosts} />
        <div className='w-full flex justify-center '>
        <div className="mx-auto  space-y-8 xl:w-6/12 md:w-5/6 sm:w-2/3">
          {posts.reverse() && posts.map((post) => (
            <Post key={post.pid} post={post} />
          ))}
        </div>
        </div>
      </div>
    </div>
  );
}

export default PostList;
