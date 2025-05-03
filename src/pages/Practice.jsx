import React from 'react';
// Images
import JS from '../images/js.png';
import HTML from '../images/html.png';
import ReactLogo from '../images/react.png';
import Node from '../images/node.png';
import { Input } from '@/components/ui/input';
// Component
import { DropdownButton } from '../components/practice/DropdownButton';
import LanguageCard from '@/components/practice/languageCard';
// Custom Icons
import SVGComponent from '@/components/practice/CustomIcons/Svg';
import CompanyFilterCard from '@/components/practice/CompanyFilterCard';

// Dummy Data
const ICONS = [
  { title: 'HTML/CSS', image: HTML },
  { title: 'JavaScript', image: JS },
  { title: 'React', image: ReactLogo },
  { title: 'Node', image: Node },
];

const Practice = () => {
  return (
    <div className='bg-primary'>
      {/* Hero Section */}
      <div className='bg-[rgb(8,42,70)] py-10'>
        <div className='flex-grow flex flex-col items-center justify-center'>
          <h1 className='text-2xl md:text-5xl font-extrabold text-center mb-4 z-10'>
            <span>Learn.</span>
            <span className='text-[rgb(229,140,51)]'> Practice. </span>
            <span>Succeed.</span>
          </h1>
          <p className='text-base md:text-xl text-center text-gray-100 max-w-3xl mb-8 font-light z-10'>
            Turn your effort into offers, One problem at a time. 🚀
          </p>

          <div className='flex flex-wrap gap-5 justify-center items-center mb-8'>
            <a
              href=''
              className='bg-transparent border-2 border-[rgb(229,140,51)] text-[rgb(229,140,51)] hover:bg-[rgb(229,140,51)]/10 font-bold py-3 px-8 rounded-md transform transition-transform duration-300 hover:scale-105'
            >
              Practice
            </a>
          </div>

          <div className='flex flex-wrap justify-center gap-6 mt-4'>
            {ICONS.map((icon, index) => (
              <div key={index} className='flex flex-col items-center gap-2'>
                <div className='bg-[#0D4778] rounded-lg shadow-lg border border-[rgb(229,140,51)]/20 flex items-center justify-center'>
                  <img src={icon.image} alt={icon.title} className='w-[72px] h-[70px] py-2 px-2' />
                </div>
                <span className='text-xs text-gray-300 font-semibold text-center mt-1'>{icon.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Filter + Company Card Section */}
      <div className='flex flex-col-reverse lg:flex-row justify-between gap-4 h-auto p-4'>
        {/* Left Filters Section */}
        <div className='flex flex-col w-full lg:w-3/4  gap-4'>
          <div className='w-full flex items-center justify-between'>
            <div className='flex items-center gap-4'>
              <DropdownButton />
              <DropdownButton />
            </div>

            <div className='bg-[#292c35] rounded-lg p-2 cursor-pointer flex-shrink-0 hover:bg-[#353842] transition-colors'>
              <SVGComponent />
            </div>
          </div>

          <div className='w-full'>
            <LanguageCard />
          </div>
        </div>

        {/* Right Company Filter Section */}
        <div className='flex flex-col gap-4 w-full lg:w-1/4'>
          <div className='w-full'>
            <Input
              type='search'
              id='search'
              placeholder='Search companies...'
              className='w-full h-12 rounded-sm bg-[#292c35] border-0 text-white border-none outline-none'
            />
          </div>
          <div className='w-full'>
            <CompanyFilterCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Practice;
