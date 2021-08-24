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
  const [posts, setPosts] = useState({});
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
    <div
      className=' font-mono text-1xl justify-start'
    >
      <h2 className='text-center text-4xl p-4'>
        This is a Data Fetching page with useEffect!
      </h2>
      <hr className='border-2 border-green-700' />
      <h2 className='text-center text-3xl p-4'>
        This is example code with useEffect and how it works by using map/get method
        by id value!
      </h2>
      <hr className='border-2 border-green-700' />
      <h2 className='text-center text-3xl p-4'>
        And{' '}
        <a
          href='#example'
          className='italic 
          py-1 px-2
          text-white rounded-lg shadow-md
          bg-green-500 
          hover:bg-green-700 focus:outline-none '
        >
          example
        </a>{' '}
        below how it code works!
      </h2>
      <div>
        <Component />
      </div>
      <div>
        <h2 id='example' className='p-8  font-mono text-3xl text-center'>
          This is a Data Fetching page with useEffect!
        </h2>
      </div>
      <div
        className='list-outside text-left text-2xl rounded-lg p-8 border-4 border-green-700 shadow-inner'
        style={{
          color: 'white',
          backgroundColor: '#4d4033',
        }}
      >
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </div>
    </div>
  );
}
