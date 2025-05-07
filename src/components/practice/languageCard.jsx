import React from 'react';
import { AvatarDemo } from './AvatarDemo';
import { Bookmark } from 'lucide-react';
import { Share2 } from 'lucide-react';
import { Clock } from 'lucide-react';

const LanguageCard = ({ title, description, badge, tags = [] }) => {
  return (
    <>
      <div className='bg-[#212227]  hover:opacity-70  text-white rounded-lg p-4 w-full max-h[100px]  cursor-pointer '>
        <div className='flex gap-x-3 w-full'>
          <div className='flex flex-col justify-center m-1'>
            <AvatarDemo />
          </div>
          <div className='flex flex-col gap-y-2 w-full  '>
            <div className='flex justify-between items-center relative'>
              <div className='text-xl font-semibold'>{title}</div>
              <div className='text-sm text-[#7a591c] border border-[#7a591c] rounded-xl px-3 absolute left-30'>
                {badge}
              </div>
            </div>

            <div className=' text-sm'>{description}</div>
            <div className='flex flex-wrap  gap-2'>
              {tags?.map((tag, index) => (
                <>
                  <button key={index} className='bg-[#292c35] text-[#56528b] text-sm py-1 px-2 rounded-xl'>
                    {tag}
                  </button>
                </>
              ))}
            </div>
          </div>
        </div>
        <div className=' relative w-full '>
          <div className='absolute  right-2 bottom-16 flex justify-center items-center gap-5'>
            <div>
              <Share2 />
            </div>
            <div>
              <Bookmark />
            </div>
          </div>
        </div>
        <div className='flex justify-end items-end gap-2  '>
          <Clock className='text-sm' />
          <span className='text-sm'>25 min</span>
        </div>
      </div>
    </>
  );
};

export default LanguageCard;
