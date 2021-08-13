import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function DataFetching3() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idButton, setIdButton] = useState(1);

  const handleClick = () => {
    setIdButton(id);
  };

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idButton}`)
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id, idButton]);
  return (
    <div style={{ textAlign: 'center' }}>
      <div>
        <h2>This is a Data Fetching page with useEffect3!</h2>
      </div>
      <button
        type='button'
        value={id}
        onClick={(e) => handleClick(e.target.value)}
      >
        Click me
      </button>
      <input type='text' value={id} onChange={(e) => setId(e.target.value)} />
      <div>{post.title}</div>
      {/* <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul> */}
    </div>
  );
}
