import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import ComponentC from './nestedComponents2/ComponentC';

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

const Component = () => {
  const codeString = `
import React from 'react';
import ComponentC from './nestedComponents2/ComponentC';

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

export default function useContext2() {
  return (
    <div>
      <UserContext.Provider value={'Alexander'}>
        <ChannelContext.Provider value={'DantesSagan'}>
          <ComponentC /> //importing ComponentC from './nestedComponents/ComponentC'
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
} 
// .
// .
// .
// nesting withing ComponentC x1
=>
import React from 'react';
import ComponentE from './ComponentE';

export default function ComponentC() {
  return (
    <div>
      <ComponentE />
    </div>
  );
}
// .
// .
// .
// nesting withing ComponentE x2
=>
import React, { useContext } from 'react';
import { UserContext, ChannelContext } from '../useContext2';

export default function ComponentE() {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);
  return (
    <div>
      {user} - {channel}
    </div>
  );
}

// .
// .
// .
// and nesting withing ComponentF but we didn't use this because 
// we use in ComponentE useContext which more simplify then use nested ComponentE in ComponentF
=>
// import React from 'react';
// import { UserContext, ChannelContext } from '../useContext1';

// export default function ComponentF() {
//   return (
//     <div>
//       <UserContext.Consumer>
//         {(user) => {
//           return (
//             <ChannelContext.Consumer>  // where is our ChannelContext withing ComponentC from useContext1
//               {(channel) => {
//                 return (
//                   <div>
//                     User context value {user}, channel context value {channel} 
//                   </div>
//                 );
//               }}
//             </ChannelContext.Consumer>
//           );
//         }}
//       </UserContext.Consumer>
//     </div>
//   );
// }

    `;
  return (
    <SyntaxHighlighter language='javascript' style={dark}>
      {codeString}
    </SyntaxHighlighter>
  );
};

export default function useContext2() {
  return (
    <div
      className=' font-mono text-1xl justify-start'
    >
      <h2 className='text-center text-4xl p-4'>
        This is a Data Fetching page with useContext without use Counsumer(which
        means easy to use and more easy to read)!
      </h2>
      <hr className='border-2 border-green-700' />
      <h2 className='text-center text-3xl p-4'>This is example code!</h2>
      <UserContext.Provider value={'Alexander'}>
        <ChannelContext.Provider value={'DantesSagan'}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
      <h2 className='text-center text-3xl p-4'>
        And example below how it code works!
      </h2>
      <Component />
    </div>
  );
}
