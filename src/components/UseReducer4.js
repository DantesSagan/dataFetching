import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import DataFetchingOne from './dataFetchingReducer/DataFetchingOne';

const Component = () => {
    const codeString = `
import React from 'react';
import DataFetchingOne from './dataFetchingReducer.js/DataFetchingOne';

export default function UseReducer4() {
    const ScrollDown = () => {
    window.scrollTo({ top: 850, behavior: 'smooth' });
  };
  return (
    <div className=' font-mono text-1xl justify-start'>
      <h2 className='text-center text-4xl p-4'>
        This is a Data Fetching page with useReducer!
      </h2>
      <hr className='border-2 border-green-700' />
      <h2 className='text-center text-3xl p-4'>
        This is example simplify code with multiple useReducer for the same
        state and how it works with switch/dispatch methods!
      </h2>
      <hr className='border-2 border-green-700' />
      <h2 className='text-center text-3xl p-4'>
        And{' '}
        <i
          onClick={ScrollDown}
          className='italic 
          py-1 px-2
          text-white rounded-lg shadow-md
          bg-green-500 
          hover:bg-green-700 focus:outline-none '
          style={{ cursor: 'pointer' }}
        >
          example
        </i>{' '}
        below how it code works!
      </h2>
      <div
        className='list-outside text-left text-2xl rounded-lg p-8 border-4 border-green-700 shadow-inner'
        style={{
          color: 'white',
          backgroundColor: '#4d4033',
        }}
      >
        <DataFetchingOne />
      </div>
      <Component />
    </div>
  );
}
.
.
.
=>
.
.
.
// And DataFetchingOne what contains useState's, useEffect with axios: get, then,catch methods what get API data
// And Loading visualization when page on load && Error when something went wrong if you type wrong website code 
import React,{useState, useEffect} from 'react'
import axios from 'axios'

export default function DataFetchingOne() {
    const [loading,setLoading] = useState(true)
    const[error,setError] = useState('')
    const [post, setPost] = useState({})

    useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response=>{
            setLoading(false)
            setPost(response.data)
            setError('')
        })
        .catch(error =>{
            setLoading(false)
            setPost({})
            setError('Somthing wen wrong!')
        })
    },[])
    return (
        <div>
            {loading ? 'Loading' :  post.title}
            {error ? error : null }
        </div>
    )
}
    `;
    return (
      <SyntaxHighlighter language='javascript' style={dark}>
        {codeString}
      </SyntaxHighlighter>
    );
  };

export default function UseReducer4() {
  
  const ScrollDown = () => {
    window.scrollTo({ top: 650, behavior: 'smooth' });
  };
  return (
    <div className=' font-mono text-1xl justify-start'>
      <h2 className='text-center text-4xl p-4'>
        This is a Data Fetching page with useReducer!
      </h2>
      <hr className='border-2 border-green-700' />
      <h2 className='text-center text-3xl p-4'>
        This is example how to use Data Fetching with useState to visualization
        on Loading and Error when something goes wrong
      </h2>
      <hr className='border-2 border-green-700' />
      <h2 className='text-center text-3xl p-4'>
        And{' '}
        <i
          onClick={ScrollDown}
          className='italic 
          py-1 px-2
          text-white rounded-lg shadow-md
          bg-green-500 
          hover:bg-green-700 focus:outline-none '
          style={{ cursor: 'pointer' }}
        >
          example
        </i>{' '}
        below how it code works!
      </h2>
      <div
        className='list-outside text-left text-2xl rounded-lg p-8 border-4 border-green-700 shadow-inner'
        style={{
          color: 'white',
          backgroundColor: '#4d4033',
        }}
      >
        <DataFetchingOne />
      </div>
      <Component />
    </div>
  );
}
