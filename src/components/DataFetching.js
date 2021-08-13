import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Component = () => {
  const codeString = `
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function DataFetching() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div style={{ textAlign: 'center' }}>
      <div>
        <h2>This is a Data Fetching page with useEffect!</h2>
      </div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}`;
  return (
    <SyntaxHighlighter language='javascript' style={dark}>
      {codeString}
    </SyntaxHighlighter>
  );
};

export default function DataFetching() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>This is example code and example below how it code works.</h2>
      <div style={{ marginRight: '400px', marginLeft: '400px' }}>
        <Component />
      </div>
      <div>
        <h2>This is a Data Fetching page with useEffect!</h2>
      </div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
