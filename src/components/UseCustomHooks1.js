import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import React from 'react';
import DoCTitleOne from "./customHooks's/DoCTitleOne";
import DoCTitleTwo from "./customHooks's/DocTitleTwo";

export default function UseCustomHooks1() {
  const ScrollDown = () => {
    window.scrollTo({ top: 1150, behavior: 'smooth' });
  };

  const Component = () => {
    const codeString = `
import React from 'react';
import DoCTitleOne from "./customHooks's/DoCTitleOne";
import DoCTitleTwo from "./customHooks's/DocTitleTwo";

export default function UseCustomHooks1() {
  const ScrollDown = () => {
    window.scrollTo({ top: 870, behavior: 'smooth' });
  };
  return (
    <div>
      <h2 className='text-center text-4xl p-4'>
        This is a Data Fetching page with useCustomHooks!
      </h2>
      <hr className='border-2 border-green-700' />
      <h2 className='text-center text-3xl p-4'>
        This is example how to use Data Fetching with useCustomHooks!
      </h2>
      <h2 className='text-center text-3xl p-4'>
        A custom Hook is basically a JavaScript function whose name start with
        "use". A custon hook can also call other Hooks if required.
      </h2>
      <h2 className='text-center text-3xl p-4'>
        Why?
        <hr className='mt-4 border-2 border-green-700' />
        Share logic - Alternative to HOC's and Render Props How to create custom
        Hook's
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
        <DoCTitleOne />
        <DoCTitleTwo />
      </div>
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
// We are goin to use, useDocumentTitle for using useEffect 

import { useEffect } from 'react';

export default function UseDocumentTitle(count) {
  useEffect(() => {
    document.title = \`count \${count}\`;
  }, [count]);
}
.
.
.
=>
.
.
.
// We are using first DocTitleReset like 1st component which change docTitle
import React, { useState } from 'react';
import UseDocumentTitle from './Hooks/UseDocumentTitle';

export default function DoCTitleOne() {
  const [count, setCount] = useState(0);
  UseDocumentTitle(count);
  const resetCount = () => {
    setCount(0);
  };
  return (
    <div className='text-center'>
      <button
        className='m-2 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none'
        onClick={() => setCount(count + 1)}
      >
        Count-{count}
      </button>
      <button
        className='m-2 py-2 px-4 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none'
        onClick={() => resetCount()}
      >
        Reset
      </button>
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
// And we are going to use 2ndComponent for showing 
how to work multiple counter's for incrementing one DocTitle

import React, { useState } from 'react';
import UseDocumentTitle from './Hooks/UseDocumentTitle';

export default function DoCTitleTwo() {
  const [count, setCount] = useState(0);
  UseDocumentTitle(count);
  const resetCount = () => {
    setCount(0);
  };
  return (
    <div className='text-center'>
      <button
        className='m-2 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none'
        onClick={() => setCount(count + 1)}
      >
        Count-{count}
      </button>
      <button
        className='m-2 py-2 px-4 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none'
        onClick={() => resetCount()}
      >
        Reset
      </button>
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
  return (
    <div>
      <h2 className='text-center text-4xl p-4'>
        This is a Data Fetching page with useCustomHooks!
      </h2>
      <hr className='border-2 border-green-700' />
      <h2 className='text-center text-3xl p-4'>
        This is example how to use Data Fetching with useCustomHooks!
      </h2>
      <h2 className='text-center text-3xl p-4'>
        A custom Hook is basically a JavaScript function whose name start with
        "use". A custom hook can also call other Hooks if required.
      </h2>
      <h2 className='text-center text-3xl p-4'>
        Why?
        <hr className='mt-4 border-2 border-green-700' />
        Share logic - Alternative to HOC's and Render Props How to create custom
        Hook's
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
          color: 'white',
          backgroundColor: '#4d4033',
        }}
      >
        <h2 className='p-4 border border-yellow-600'>
          When you click on button's 'Count-0',
          <br />
          look at the Title(inset/tab) of the web page for understanding how
          works changing DocTitle page!
        </h2>
        <DoCTitleOne />
        <DoCTitleTwo />
      </div>
      <Component />
    </div>
  );
}
