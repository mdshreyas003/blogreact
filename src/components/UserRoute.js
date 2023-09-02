import React from 'react'
import { Route, Routes, useOutletContext, useParams } from 'react-router-dom';
import PostComponent from './PostComponent';
import User from './User';

function UserRoute() {
    const[setLogin,login] = useOutletContext();
    const{id}=useParams();
    return (
        <Routes>
          <Route path="/" element={<User login={login} setLogin={setLogin} id={id} />} />
          <Route path="/newPost" element={<PostComponent id={id} />} />
        </Routes>
      );
}

export default UserRoute;