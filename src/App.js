
import './App.css';
import PostList from './components/PostList';
import PostComponent from './components/PostComponent';
import Login from './components/Login';
import { Children, useState } from 'react';
import User from './components/User';
import Navbar from './components/Navbar';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import UserRoute from './components/UserRoute';
import Signup from './components/Signup';

function App() {
  const[login,setLogin]=useState(null);
  const[profile,setProfile] = useState(false)
  return (
    <div className="App">
      {/* {login===null && <Login setLogin={setLogin}/>} */}

      {/* <button onClick={()=>setProfile(true)}>Porfile</button> */}
      <Navbar setLogin={setLogin} login={login}/>
      <Outlet context={[setLogin, login]}/>
      
      {/* {profile && <User login={login} setProfile={setProfile}/>} */}
      {/* <PostComponent/> */}
    </div>
  );
}

const app = createBrowserRouter([{
  path:'/',
  element:<App/>,
  children:[
    {
      path:'/',
      element:<PostList/>
    },
    {
      path:'/login',
      element:<Login/>
    },
    {
      path:'/:id',
      element:<User/>
    },
    {
      path:'/signup',
      element:<Signup/>
    }
    ]
},
])
export default app;
