import React from 'react';
import UseInput from './Hooks/UseInput';

export default function UserForm() {
  //   const [firstName, setFirstName] = useState('');
  //   const [lastName, setLastName] = useState('');

  const [firstName, bindFirstName, resetFirstName] = UseInput('');
  const [lastName, bindLastName, resetLastName] = UseInput('');
  const submitHandler = (e) => {
    e.preventDefault();
    alert(`Привет ${firstName} ${lastName}!`);
    resetFirstName();
    resetLastName();
  };
  return (
    <div className='text-center '>
      <form onSubmit={submitHandler}>
        <div>
          <label className='p-2'>First Name:</label>
          <input
            className='text-black text-1xl rounded-lg p-2 m-2 border-4 border-gray-400 w-60'
            {...bindFirstName}
            type='text'
          />
        </div>
        <div>
          <label className='p-2'>Last Name:</label>
          <input
            className='text-black text-1xl rounded-lg p-2 m-2 border-4 border-gray-400 w-60'
            {...bindLastName}
            type='text'
          />
        </div>
        <button className='text-1xl rounded-lg p-2 m-2 bg-blue-500 hover:bg-blue-700'>
          Submit
        </button>
      </form>
    </div>
  );
}
