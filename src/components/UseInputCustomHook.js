import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import React from 'react';
import UserForm from "./customHooks's/UserForm";

export default function UseInputCustomHook() {
  const ScrollDown = () => {
    window.scrollTo({ top: 870, behavior: 'smooth' });
  };
  const Component = () => {
    const codeString = `

// UseForm with useState
// This is a input alerting firstName and lastName using useState hook 
and we change it for customHook

import React, { useState } from 'react';

export default function UserForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  
  const submitHandler = (e) => {
    e.preventDefault();
    alert(\`Hello $\{firstName} $\{lastName}\`);    
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label>First Name</label>

          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            type='text'
          ></input>
        </div>
        <div>
          <label>Last Name</label>

          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            type='text'
          ></input>
        </div>
        <button>Submit</button>
      </form>
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
// UseInput like customHook
import { useState } from 'react';

export default function UseInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  const reset = () => {
    setValue(initialValue);
  };
  const bind = {
    value,
    onChange: (e) => {
      setValue(e.target.value);
    },
  };

  return [value, reset, bind];
}
.
.
.
=>
.
.
.

// UseForm with useCustomHook 
import React from 'react';
import UseInput from './Hooks/UseInput';

export default function UserForm() {
  //   const [firstName, setFirstName] = useState('');
  //   const [lastName, setLastName] = useState('');

  const [firstName, bindFirstName, resetFirstName] = UseInput('');
  const [lastName, bindLastName, resetLastName] = UseInput('');
  const submitHandler = (e) => {
    e.preventDefault();
    alert(\`Hello $\{firstName} \${lastName}\`);
    resetFirstName();
    resetLastName();
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label>First Name</label>
          <input {...bindFirstName} type='text'></input>
        </div>
        <div>
          <label>Last Name</label>
          <input {...bindLastName} type='text'></input>
        </div>
        <button>Submit</button>
      </form>
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
// Main file 
import React from 'react';
import UserForm from "./customHooks's/UserForm";

export default function UseInputCustomHook() {
  const ScrollDown = () => {
    window.scrollTo({ top: 870, behavior: 'smooth' });
  };
return (
    <div>
      <h2 className='text-center text-4xl p-4'>
        This is a Data Fetching page with useMemo!
      </h2>
      <hr className='border-2 border-green-700' />
      <h2 className='text-center text-3xl p-4'>
        This is example how to using useMemo with two buttons!
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
      <div>
        <UserForm />
      </div>
      <Component />
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
        This is a Data Fetching page with useInput!(like useCustomHook)
      </h2>
      <hr className='border-2 border-green-700' />
      <h2 className='text-center text-3xl p-4'>
        This is example how to using useInput with two input elements which
        working like !
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
        <UserForm />
      </div>
      <Component />
    </div>
  );
}
