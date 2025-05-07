import React from 'react';
import { Heart, Share2, Eye, ClipboardCheck, CircleCheck } from 'lucide-react';

const Problem = () => {
  const stats = [
    { icon: Eye, label: '~ 1k' },
    { icon: Heart, label: '69' },
    { icon: ClipboardCheck, label: '0' },
    { icon: CircleCheck, label: '0' },
  ];
  const buttonNames = ['Amazon', 'Google', 'Microsoft'];
  return (
    <div>
      <div className='relative'>
        <h1 className='text-2xl'>Chips Input</h1>
        <div className='absolute top-1 right-6 flex gap-4'>
          <div className='flex flex-row gap-2'>
            <Heart />
            <Share2 />
          </div>
        </div>
      </div>

      <div className='border border-b-[#42444b] border-t-0 border-l-0 border-r-0 '>
        <div className='flex mt-1.5 mb-3 items-center gap-2  '>
          {stats.map((item, index) => (
            <React.Fragment key={index}>
              <item.icon size={18} />
              <span>{item.label}</span>
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className='mt-2 '>
        <h1>Description</h1>
        <p className='mt-3'>
          In this task, you are asked to create a <strong>Chips Input</strong> component that allows users to input a
          series of tags or keywords. The component will display these tags as "chips" (small labels), which users can
          add and remove dynamically.
        </p>
      </div>
      <div>
        <h1 className='text-xl font-semibold mb-2'>Features</h1>
        <ol className='list-decimal list-inside ml-5 '>
          <li>
            <strong>Input Field:</strong> Users can types into an input field{' '}
          </li>
          <li>
            <strong> Add Chips:</strong> when the user pressers the enter key the typed text will be added as a new
            chip(tip).Empty or whitespace-only chips should not be added
          </li>
          <li>
            <strong>Remove Chips:</strong> Users can delete a chip by clicking the 'X' button next to it,
          </li>
          <li>
            <strong>Horizontal Display:</strong> The chips should be displayed in a horizontal list,
          </li>
          <li>
            <strong>Persistence:</strong> The list of chips should be maintained even when the components re-renders
          </li>
        </ol>
      </div>
      <div>
        <h1 className='text-xl font-semibold mb-2'>Important Points</h1>
        <ol className='list-decimal list-inside ml-5 '>
          <li>The input field should be of type text.</li>
          <li>Button should be labeled "X" to delete chips</li>
          <li>If two chips have the same name, deleting one should NOT delete both.</li>
          <li>Make sure to use onKeyDown event handler instead of onKeyPress because onKeyPress is deprecated.</li>
        </ol>
      </div>
      <hr className='border-t  border-[#42444b] mt-3  ' />
      <div>
        <h1>Companies</h1>
        <div className='flex  gap-3 mt-2'>
          {buttonNames.map((name, index) => (
            <h1 key={index} className='bg-[#292c35] text-[#56528b] text-sm py-1 px-2 rounded-xl w-max'>
              {name}
            </h1>
          ))}
        </div>
      </div>
      <hr className='border mt-2' />
      <div>
        <h1>Solve Similar questions</h1>
        <h1 className='bg-transparent border-2 border-[rgb(229,140,51)] text-[rgb(229,140,51)] hover:bg-[rgb(229,140,51)]/10 font-bold py-3 px-8 rounded-md transform transition-transform duration-300 hover:scale-105 inline-block mt-2 '>
          Similar Questions
        </h1>
      </div>
    </div>
  );
};

export default Problem;
