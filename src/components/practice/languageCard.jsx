import React from 'react';

const LanguageCard = () => {
  return (
    <>
      <div class='bg-[#212227]   text-white rounded-lg p-4 w-full '>
        <div class='flex justify-between items-center'>
          <div class='text-xl font-semibold'>Chips Input</div>
          <div class='text-sm text-[#7a591c] border border-[#7a591c] rounded-xl  px-3 '>Hot</div>
        </div>
        <div class='mt-2 text-sm'>Chips Input</div>
        <div class='mt-4 flex gap-2'>
          <button class='bg-[#292c35] text-[#29753e] text-sm py-1 px-2 rounded-xl'>React.js</button>
          <button class='bg-[#292c35] text-[#56528b] text-sm py-1 px-2 rounded-xl'>Easy</button>
          <button class='bg-[#292c35] text-[#56528b] text-sm py-1 px-2 rounded-xl'>Amazon</button>
          <button class='bg-[#292c35] text-[#56528b] text-sm py-1 px-2 rounded-xl'>Flipkart</button>
          <button class='bg-[#292c35] text-[#56528b] text-sm py-1 px-2 rounded-xl'>Phonepe</button>
        </div>
        <div class='mt-4 flex justify-between items-center text-sm'>
          <div class='text-gray-500'>25 mins</div>
          <div class='flex space-x-2'>
            <button class='text-gray-500'>Share</button>
            <button class='text-gray-500'>Bookmark</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LanguageCard;
