import React, { useContext } from 'react';
import { UserContext, ChannelContext } from '../useContext2';

export default function ComponentE() {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);
  return (
    <div
      className='list-outside text-center text-2xl rounded-lg p-4  border-4 border-green-700 shadow-inner'
      style={{
        color: 'white',
        backgroundColor: '#4d4033',
      }}
    >
      {`{user}`}={user}-{`{channel}`}={channel}
    </div>
  );
}
