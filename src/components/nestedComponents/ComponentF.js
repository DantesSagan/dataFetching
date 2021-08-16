import React from 'react';
import { UserContext, ChannelContext } from '../useContext1';

export default function ComponentF() {
  return (
    <div>
      <UserContext.Consumer>
        {(user) => {
          return (
            <ChannelContext.Consumer>
              {(channel) => {
                return (
                  <div
                    className=' list-outside text-center text-2xl rounded-lg p-8  border-4 border-green-700 shadow-inner'
                    style={{
                      color: 'white',
                      backgroundColor: '#4d4033',
                    }}
                  >
                    User context value: {user}, channel context value: {channel}
                  </div>
                );
              }}
            </ChannelContext.Consumer>
          );
        }}
      </UserContext.Consumer>
    </div>
  );
}
