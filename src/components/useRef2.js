import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import React from 'react';
import ClassTimer from './useRef/ClassTimer';
import HookTimer from './useRef/HookTimer';

export default function useRef2() {
  const ScrollDown = () => {
    window.scrollTo({ top: 650, behavior: 'smooth' });
  };

  const Component = () => {
    const codeString = `
import React from 'react';
import ClassTimer from './useRef/ClassTimer';
import HookTimer from './useRef/HookTimer';

export default function useRef2() {
  const ScrollDown = () => {
    window.scrollTo({ top: 650, behavior: 'smooth' });
  };
  return (
    <div>
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
        className='list-outside text-center text-2xl rounded-lg p-8 border-4 border-green-700 shadow-inner'
        style={{
          color: 'white',
          backgroundColor: '#4d4033',
        }}
      >
        <ClassTimer />
        <HookTimer />
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
// We use ClassTimer without useRef for showing how it work without hooks and useRef
import React, { Component } from 'react';

export class ClassTimer extends Component {
  interval;
  constructor(props) {
    super(props);

    this.state = {
      timer: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({ timer: prevState.timer + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        Class Timer - {this.state.timer}
        <button
          className='m-2 py-2 px-4 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none'
          onClick={() => clearInterval(this.interval)}
        >
          Clear Timer
        </button>
        <button
          onClick={() =>
            (this.interval = setInterval(() => {
              this.setState((prevState) => ({ timer: prevState.timer + 1 }));
            }, 1000))
          }
          className='m-2 py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none'
        >
          Resume
        </button>
      </div>
    );
  }
}

export default ClassTimer;
.
.
.
=>
.
.
.
// We use HookTimer for explaining how it works useRef for clearInterval timer  
with ref.current and useRef

import React, { useState, useEffect, useRef } from 'react';

export default function HookTimer() {
  const [timer, setTimer] = useState(0);

  const ref = useRef();

  useEffect(() => {
    ref.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
    return () => {
      clearInterval(ref.current);
    };
  }, []);
  return (
    <div>
      Hook Timer - {timer}
      <button
        className='m-2 py-2 px-4 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none'
        ref={ref}
        onClick={() => clearInterval(ref.current)}
      >
        Clear Hook Timer
      </button>
      <button
        className='m-2 py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none'
        onClick={() =>
          (ref.current = setInterval(() => {
            setTimer((prevTimer) => prevTimer + 1);
          }, 1000))
        }
      >
        Resume
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
        This is a Data Fetching page with useRef!
      </h2>
      <hr className='border-2 border-green-700' />
      <h2 className='text-center text-3xl p-4'>
        This is example how to works useRef with clearInterval, we have
        ClassTimer and HookTimer which both work like a timer but second
        Component can't work without useRef and ref.current and we use it within
        useEffect for best working!
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
        <ClassTimer />
        <HookTimer />
      </div>
      <Component />
    </div>
  );
}
