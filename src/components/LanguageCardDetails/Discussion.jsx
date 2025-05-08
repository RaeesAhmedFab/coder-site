import React from 'react';

const Discuss = () => {
  return (
    <>
      <div className='flex justify-center items-center'>
        <div className='max-w-[445px] flex justify-center items-center h-screen '>
          <div className=' flex justify-center items-center flex-col '>
            <div className=''>
              <h1 className='flex justify-center items-center text-2xl mb-2 '>Join Our Developer Community</h1>
              <p className='flex justify-center items-center text-sm text-center'>
                Stuck on a problem, brushing up your skills, or preparing for interviews? Our Discord community is the
                perfect place to ask questions, share knowledge, and support each other. Join us to connect with
                like-minded developers and stay sharp every day.
              </p>
            </div>
            <div className='bg-green-600 text-white flex justify-center items-center rounded-lg text-xl  mt-3 py-2 px-4'>
              <button className='cursor-pointer'>Join Our Discord</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Discuss;
