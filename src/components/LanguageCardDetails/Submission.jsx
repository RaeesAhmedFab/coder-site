import React from 'react';

const Submission = () => {
  return (
    <>
      <div className='flex justify-center items-center'>
        <div className=' flex justify-center items-center h-screen '>
          <div className=' p-4 rounded-lg flex justify-center items-center  '>
            <div className=''>
              <h1 className='flex justify-center items-center text-md'>
                You haven't submitted any solutions for this question yet...
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Submission;
