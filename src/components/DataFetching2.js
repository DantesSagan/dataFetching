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
    <div style={{ textAlign: 'center' }}>
      <h2>This is example code and example below how it code works.</h2>
      <div>
        <h2>This is a Data Fetching page with useEffect!</h2>
      </div>
      <input
        placeholder='Type number below <=100'
        type='text'
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <div>{post.title}</div>
      <div style={{ marginRight: '400px', marginLeft: '400px' }}>
        <Component />
      </div>
    </div>
  );
}
