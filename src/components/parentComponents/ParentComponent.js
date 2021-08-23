import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import React, { useState, useCallback } from 'react';

import Button from './Button';
import Count from './Count';
import Title from './Title';

export default function ParentComponent() {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(50000);

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);

  const resetAgeSalary = () => {
    setAge(25);
    setSalary(50000);
  };

  const ScrollDown = () => {
    window.scrollTo({ top: 1000, behavior: 'smooth' });
  };

  const Component = () => {
    const codeString = `
import React, { useState, useCallback } from 'react';
import Button from './Button';
import Count from './Count';
import Title from './Title';

export default function ParentComponent() {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(50000);

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);
  const ScrollDown = () => {
    window.scrollTo({ top: 850, behavior: 'smooth' });
  };
  return (
    <div>
      <div className=' font-mono text-1xl justify-start'>
        <h2 className='text-center text-4xl p-4'>
          This is a Data Fetching page with useReducer!
        </h2>
        <hr className='border-2 border-green-700' />
        <h2 className='text-center text-3xl p-4'>
          This is example code to explain and show how to work useCallback Hook
          with useMemo for use callback independently for call only one element
          not all for a moment
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
          <Title />
          <Count text='Age' count={age} />
          <Button handleClick={incrementAge}>Increment Age</Button>
          <Count text='Salary' count={salary} />
          <Button handleClick={incrementSalary}>Increment Salary</Button>
        </div>
        <Component />
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
<Title /> 

// Title with using useMemo for rendering only one component  
for optimized child components that rely on reference equality to prevent unnecessary renders
import React from 'react';

export default React.memo(function Title() {
  console.log('Rendering Title');
  return <h2>useCallback Hook</h2>;
});
.
.
.
=>
.
.
.
<Count />
//  Count with using useMemo for rendering only one component  for optimized child components
import React from 'react';

export default React.memo(function Count({ text, count }) {
  console.log(\`Rendering $\`{text}\`);
  return (
    <div>
      {text} - {count}
    </div>
  );
});
.
.
.
=>
.
.
.
<Button />
// Button with using useMemo for rendering only one component  for optimized child components
import React from 'react';

export default React.memo(function Button({ handleClick, children }) {
  console.log('Rendering', children);
  return <button onClick={handleClick}>{children}</button>;
});

    `;
    return (
      <SyntaxHighlighter language='javascript' style={dark}>
        {codeString}
      </SyntaxHighlighter>
    );
  };

  return (
    <div>
      <div className=' font-mono text-1xl justify-start'>
        <h2 className='text-center text-4xl p-4'>
          This is a Data Fetching page with useReducer!
        </h2>
        <hr className='border-2 border-green-700' />
        <h2 className='text-center text-3xl p-4'>
          This is example code to explain and show how to work useCallback Hook
          with useMemo for use callback independently for call only one element
          not all for a moment!
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
          <Title className='text-center' />
          <Count text='Age' count={age} />
          <Button handleClick={incrementAge}>Increment Age</Button>
          <Count text='Salary' count={salary} />
          <Button handleClick={incrementSalary}>Increment Salary</Button>{' '}
          <button
            className='m-2 py-2 px-4 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none'
            onClick={resetAgeSalary}
          >
            Reset
          </button>
        </div>

        <Component />
      </div>
    </div>
  );
}
