import React from 'react';

const Submission = () => {
  return (
    <>
      <div className='flex justify-center items-center'>
        <div className='max-w-82 flex justify-center items-center h-screen '>
          <div className='bg-[#212227] border-2 border-[#42444b] p-4 rounded-lg flex justify-center items-center flex-col '>
            <div className=''>
              <h1 className='flex justify-center items-center text-2xl'>Access Restricted</h1>
              <p className='flex justify-center items-center text-sm text-center'>
                You're just one click away from the full explanation. Log in to continue.
              </p>
            </div>
            <div className='bg-[#e58c31] text-white flex justify-center items-center rounded-full w-[50%]  mt-2 py-2 px-2'>
              <button>Login/Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Submission;
