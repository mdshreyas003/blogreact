import React, { useState, useEffect } from 'react';

function PostComponent() {
  const [newPost, setNewPost] = useState({
    title: '',
    description: '',
    company: '',
    role: '',
    package: '',
    content: '',
    user: {
      uid: 1, // Replace with the appropriate user ID
    },
  });
  const handleInputChange = event => {
    const { name, value } = event.target;
    setNewPost(prevPost => ({ ...prevPost, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();

    // Make POST request to create a new post
    fetch('https://special-pear-production.up.railway.app/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPost),
    })
      .then(response => response.json())
      .then(data => {
        console.log('New post created:', data);
        // Reset the form fields
        setNewPost({
          title: '',
          description: '',
          company: '',
          role: '',
          package: '',
          content: '',
          user: {
            uid: 1,
          },
        });
      })
      .catch(error => console.error('Error creating post:', error));
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
  <div>
    <h2>Create New Post</h2>
    <form onSubmit={handleSubmit} style={{ width: '300px' }}>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={newPost.title}
        onChange={handleInputChange}
        style={{ width: '100%', marginBottom: '10px', padding: '5px' }}
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={newPost.description}
        onChange={handleInputChange}
        style={{ width: '100%', marginBottom: '10px', padding: '5px' }}
      />
      <input
        type="text"
        name="company"
        placeholder="Company"
        value={newPost.company}
        onChange={handleInputChange}
        style={{ width: '100%', marginBottom: '10px', padding: '5px' }}
      />
      <input
        type="text"
        name="role"
        placeholder="Role"
        value={newPost.role}
        onChange={handleInputChange}
        style={{ width: '100%', marginBottom: '10px', padding: '5px' }}
      />
      <input
        type="text"
        name="package"
        placeholder="Package"
        value={newPost.package}
        onChange={handleInputChange}
        style={{ width: '100%', marginBottom: '10px', padding: '5px' }}
      />
      <textarea
        name="content"
        placeholder="Content"
        value={newPost.content}
        onChange={handleInputChange}
        style={{ width: '100%', marginBottom: '10px', padding: '5px' }}
      />
      <button type="submit" style={{ padding: '5px 10px', backgroundColor: 'blue', color: 'white', border: 'none', cursor: 'pointer' }}>
        Create Post
      </button>
    </form>
  </div>
</div>

  );
}

export default PostComponent;
