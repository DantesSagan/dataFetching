import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Component = () => {
  const codeString = `
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function DataFetching2() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  useEffect(() => {
    axios
      .get(\`https://jsonplaceholder.typicode.com/posts/$\`{id}\`)
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  return (
    <div style={{ textAlign: 'center' }}>
      <div>
        <h2>This is a Data Fetching page with useEffect2!</h2>
      </div>
      <input type='text' value={id} onChange={(e) => setId(e.target.value)} />
      <div>{post.title}</div>
    </div>
  );
}`;

  return (
    <SyntaxHighlighter language='javascript' style={dark}>
      {codeString}
    </SyntaxHighlighter>
  );
};

export default function DataFetching2() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  return (
    <div
      style={{ textAlign: 'center', marginRight: '400px', marginLeft: '400px' }}
    >
      <h2 className='text-center text-3xl p-4'>
        This is example code and example below how it code works.
      </h2>
      <hr className='border-2 border-green-700' />
      <div>
        <h2 className='text-center text-2xl p-4'>
          This is a Data Fetching page with useEffect!
        </h2>
        <hr className='border-2 border-green-700' />
      </div>
      <input
        className='text-1xl rounded-lg p-4 m-4 border-4 border-gray-400 w-60'
        placeholder='Type number below <=100'
        type='text'
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <div
        className='list-outside text-center text-2xl rounded-lg p-8  border-4 border-green-700 shadow-inner'
        style={{
          color: 'white',
          backgroundColor: '#4d4033',
        }}
      >
        {post.title}
      </div>
      <div>
        <Component />
      </div>
    </div>
  );
}
