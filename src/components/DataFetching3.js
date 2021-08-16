import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Component = () => {
  const codeString = `
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
      .get(\`https://jsonplaceholder.typicode.com/posts/$\`{idButton}\`)
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
    </div>
  );
}
`;
  return (
    <SyntaxHighlighter language='javascript' style={dark}>
      {codeString}
    </SyntaxHighlighter>
  );
};

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
    <div
      className=' font-mono text-1xl justify-start'
    >
      <div>
        <h2 className='text-center text-4xl p-4'>
          This is a Data Fetching page with useEffect!
        </h2>
        <hr className='border-2 border-green-700' />
      </div>
      <h2 className='text-center text-3xl p-4'>
        This is example how useEffect woks with button!
      </h2>
      <hr className='border-2 border-green-700' />
      <button
        className='py-2 px-4 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none'
        type='button'
        value={id}
        onClick={(e) => handleClick(e.target.value)}
      >
        Click me
      </button>
      <input
        className='text-1xl rounded-lg p-4 m-4 border-4 border-gray-400 w-60'
        placeholder='type number below <=100'
        type='text'
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <div
        className=' list-outside text-center text-2xl rounded-lg p-8  border-4 border-green-700 shadow-inner'
        style={{
          color: 'white',
          backgroundColor: '#4d4033',
        }}
      >
        {post.title}
      </div>
      <h2 className='text-center text-3xl p-4'>
        And example below how it code works!
      </h2>
      <div>
        <Component />
      </div>
      {/* <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul> */}
    </div>
  );
}
