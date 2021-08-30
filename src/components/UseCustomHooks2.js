import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import React from 'react';
import CounterOne from "./customHooks's/CounterOne";
import CounterTwo from "./customHooks's/CounterTwo";

export default function UseCustomHooks2() {
  const ScrollDown = () => {
    window.scrollTo({ top: 1150, behavior: 'smooth' });
  };
  const Component = () => {
    const codeString = `
import React from 'react';
import CounterOne from "./customHooks's/CounterOne";
import CounterTwo from "./customHooks's/CounterTwo";

export default function UseCustomHooks2() {
  const ScrollDown = () => {
    window.scrollTo({ top: 1150, behavior: 'smooth' });
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
      <hr className='border-2 border-green-700' />
      <h2 className='text-left text-3xl p-4'>
        In this example we can use customHook with counter which will be
        separated by 0 and 10. <br />
        They are also incrementing and decrementing by 1 and 10. <br />
        Main idea in this customHook it is create and use UseCounter which work
        like customHook concatinatig initialCounter and value like independent
        state's for improving flexibility about this two counter's.
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
      <CounterOne />
      <CounterTwo />
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
// We are using UseCounter like an a CustomHook for using two state's,
// where use like flexibility value's which you want to use
import { useState } from 'react';

export default function UseCounter(initialCount = 0, value) {
  const [count, setCount] = useState(initialCount);
  const increment = () => {
    setCount((prevCount) => prevCount + value);
  };
  const decrement = () => {
    setCount((prevCount) => prevCount - value);
  };
  const reset = () => {
    setCount(initialCount);
  };

  return [count, increment, decrement, reset];
}
.
.
.
=>
.
.
.
// CounterOne 
import React from 'react';
import UseCounter from './Hooks/UseCounter';

export default function CounterOne() {
  const [count, increment, decrement, reset] = UseCounter(0, 1);
  return (
    <div>
      <div
        className='list-outside text-center text-2xl rounded-lg p-8 border-4 border-green-700 shadow-inner'
        style={{
          color: 'white',
          backgroundColor: '#4d4033',
        }}
      >
        <h2>Count - {count}</h2>
        <button
          className='m-2 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none'
          onClick={increment}
        >
          Increment
        </button>
        <button
          className='m-2 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none'
          onClick={decrement}
        >
          Decrement
        </button>
        <button
          className='m-2 py-2 px-4 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none'
          onClick={reset}
        >
          Reset
        </button>
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
// CounterTwo
import React from 'react';
import UseCounter from './Hooks/UseCounter';

export default function CounterTwo() {
  const [count, increment, decrement, reset] = UseCounter(10, 10);
  return (
    <div>
      <div
        className='list-outside text-center text-2xl rounded-lg p-8 border-4 border-green-700 shadow-inner'
        style={{
          color: 'white',
          backgroundColor: '#4d4033',
        }}
      >
        <h2>Count - {count}</h2>
        <button
          className='m-2 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none'
          onClick={increment}
        >
          Increment
        </button>
        <button
          className='m-2 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none'
          onClick={decrement}
        >
          Decrement
        </button>
        <button
          className='m-2 py-2 px-4 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none'
          onClick={reset}
        >
          Reset
        </button>
      </div>{' '}
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
        <hr className='border-2 border-green-700' />
        <h2 className='text-left text-3xl p-4'>
          In this example we can use customHook with counter which will be
          separated by 0 and 10. <br />
          They are also incrementing and decrementing by 1 and 10. <br />
          Main idea in this customHook it is create and use UseCounter which
          work like customHook concatinatig initialCounter and value like
          independent state's for improving flexibility about this two
          counter's.
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
        <CounterOne />
        <CounterTwo />
      </div>
      <Component />
    </div>
  );
}
