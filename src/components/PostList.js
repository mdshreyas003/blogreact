import React, { useEffect, useState } from 'react';
import axios from 'axios';

function PostList() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
const [search,setSearch] = useState("");
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
  const searhPosts = async (e)=>{
    e.preventDefault();
    var toSearch="";
    var list = search.split(":");
    var name = list[1];
    if(list[0] === "@Company"){
        toSearch = "Company"
    }
    else{
        toSearch = "Role"
    }

    try {
        const response = await axios.get(`https://special-pear-production.up.railway.app/posts/search/by${toSearch}/${name}`); // Replace with your API endpoint
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
  }

  return (
    <div style={{margin:"0px 20px"}}>
      <h1>Posts</h1>
      <form onSubmit={searhPosts}>
      <input onChange={e=>setSearch(e.target.value)} placeholder='Search by @Comany:name or @Role:name' style={{width:'100%'}}/>
        <input type='submit' value="search"/>
      </form>
      <ol>
        {posts.map(post => (
          <li key={post.pid} style={{border:'1px solid black'}}>
            <div style={{ display:'flex',justifyContent:"space-between" }}>
                <div></div>
                <h3>{post.title}</h3>
            <a onClick={() => handlePostClick(post)} style={{color:'blue',cursor: 'pointer'}}>Read Post</a>
            </div>
            <p>{post.company} | Role: {post.role}</p>
            {selectedPost && selectedPost.pid === post.pid && (
              <p>{selectedPost.content}</p>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default PostList;
