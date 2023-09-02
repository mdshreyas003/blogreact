import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useOutletContext, useParams } from 'react-router-dom'
import Post from './Post';
import UserPost from './UserPost';
import PostComponent from './PostComponent';

function User() {
  const[userpost,setUserpost] = useState([])
  const[setLogin,login] = useOutletContext();
  const[post,setPost]=useState(false)
  const{id}=useParams();
  const history = useNavigate()
  const logout  =()=>{
    setLogin(null);
    history('/')
  }
  async function fetchUserPost(){
    const response = await axios.get(`http://localhost:8080/posts/search/byUser/${id}`);

    // console.log(response.data)
    setUserpost(Array.from(response.data))
  }
  useEffect(()=>{
    fetchUserPost();
  },[])
  if(!login){
    return;
  }
  else{
  return (
    <div className='bg-slate-900 w-full text-white p-10 text-lg min-h-screen'>
        <div className="bg-gray-800 w-fit rounded-lg shadow-lg p-4 mx-auto my-8">
        <div className="flex justify-center space-x-56">
          <div className="w-32 h-32 rounded-full overflow-hidden">
            <img
              src="https://1fid.com/wp-content/uploads/2022/07/boy-anime-wallpaper-image-for-profile-pic-5.jpg" 
              alt="User Profile"
              className="object-cover w-full h-full"
            />
          </div>
        <div className="text-center mt-4">
          <h1 className="text-2xl font-semibold">{login.name}</h1>
          <p className="text-gray-600">{login.email}</p>
          <p className="text-gray-600">Blogs: {login.blogs}</p>
        </div>
        </div>
        {!post && <Link onClick={()=>{
          setPost(true)
        }}  className='bg-green-500 p-2 rounded-xl mx-2'>Create Post</Link>}
        {
          post && <button className='bg-yellow-500 p-2 mx-2 rounded-xl' onClick={()=>setPost(false)}>Cancle</button>
        }
        <button className='bg-orange-600 p-2 rounded-xl ' onClick={logout}>Logout</button>
      </div>
        <div className='grid grid-cols-3 gap-12'>
        {!post && userpost.map((e)=>{
          return(
            <UserPost fetchUserPost={fetchUserPost} post={e}/>
            )
          })}
        </div>
          { post && <div> <PostComponent fetchUserPost={fetchUserPost} setPost={setPost}  id={id}/>  </div>}
    </div>
  )}
}

export default User