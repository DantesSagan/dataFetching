import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import React from 'react';
import FocusInput from './useRef/FocusInput';

const Component = () => {
  const codeString = `
    import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import React from 'react';
import FocusInput from './useRef/FocusInput';

export default function useRefOne() {
  const ScrollDown = () => {
    window.scrollTo({ top: 650, behavior: 'smooth' });
  };
  return (
    <div className=' font-mono text-1xl justify-start'>
      <h2 className='text-center text-4xl p-4'>
        This is a Data Fetching page with useState!
      </h2>
      <hr className='border-2 border-green-700' />
      <h2 className='text-center text-3xl p-4'>
        This is example how to use Data Fetching with useState and using
        useReducer(with switch(action.type))to visualization on Loading and
        Error when something goes wrong
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
        <FocusInput />
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
import React, { useRef, useEffect } from 'react';

export default function FocusInput() {
  const inputRef = useRef(null);
  useEffect(() => {
    //focus the input element
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <input ref={inputRef} type='text'></input>
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

export default function useRefOne() {
  const ScrollDown = () => {
    window.scrollTo({ top: 650, behavior: 'smooth' });
  };
  return (
    <div className=' font-mono text-1xl justify-start'>
      <h2 className='text-center text-4xl p-4'>
        This is a Data Fetching page with useState!
      </h2>
      <hr className='border-2 border-green-700' />
      <h2 className='text-center text-3xl p-4'>
        This is example how to use useRef with input element for instance focus
        on input when page on loading!
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
        className='list-outside text-center text-2xl rounded-lg p-8 border-4 border-green-700 shadow-inner'
        style={{
          color: 'black',
          backgroundColor: '#4d4033',
        }}
      >
        <FocusInput />
      </div>
      <Component />
    </div>
  );
}
