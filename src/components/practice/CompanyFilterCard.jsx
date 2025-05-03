// import React, { useState } from 'react';

// const companies = [
//   'spotify',
//   'oyo',
//   'nvidia',
//   'snapchat',
//   'infosys',
//   'meta',
//   'slack',
//   'twitch',
//   'stripe',
//   'google',
//   'oracle',
//   'meesho',
//   'microsoft',
//   'zomato',
//   'wipro',
//   'paypal',
//   'linkedin',
//   'flipkart',
//   'ola',
// ];

// const CompanyFilterCard = () => {
//   const [search, setSearch] = useState('');

//   const filteredCompanies = companies.filter(company => company.toLowerCase().includes(search.toLowerCase()));

//   return (
//     <div className='bg-[#1f2937] text-white  rounded-xl shadow-lg p-5'>
//       <h2 className='text-lg font-semibold mb-3'>Filter by Company</h2>

//       <input
//         type='text'
//         placeholder='Search companies...'
//         value={search}
//         onChange={e => setSearch(e.target.value)}
//         className='w-full px-3 py-2 mb-4 rounded-md bg-[#111827] border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400'
//       />

//       <div className=' '>
//         <label className='block'>
//           <input type='checkbox' className='mr-2' />
//           All
//         </label>

//         {filteredCompanies.map((company, index) => (
//           <label key={index} className='block capitalize'>
//             <input type='checkbox' className='mr-2' />
//             {company}
//           </label>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CompanyFilterCard;
import React, { useState } from 'react';

const companies = [
  'spotify',
  'oyo',
  'nvidia',
  'snapchat',
  'infosys',
  'meta',
  'slack',
  'twitch',
  'stripe',
  'google',
  'oracle',
  'meesho',
  'microsoft',
  'zomato',
  'wipro',
  'paypal',
  'linkedin',
  'flipkart',
  'ola',
];

const CompanyFilterCard = () => {
  const [search, setSearch] = useState('');

  const filteredCompanies = companies.filter(company => company.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className='bg-[#1f2937] text-white rounded-xl shadow-lg p-5'>
      <h2 className='text-lg font-semibold mb-3'>Filter by Company</h2>

      <input
        type='text'
        placeholder='Search companies...'
        value={search}
        onChange={e => setSearch(e.target.value)}
        className='w-full px-3 py-2 mb-4 rounded-md bg-[#111827]  outline-0 placeholder-gray-400 '
      />

      <div className='flex flex-wrap gap-4'>
        <label className='flex items-center'>
          <input type='checkbox' className='mr-2' />
          All
        </label>

        {filteredCompanies.map((company, index) => (
          <label key={index} className='flex items-center capitalize'>
            <input type='checkbox' className='mr-2' />
            {company}
          </label>
        ))}
      </div>
    </div>
  );
};

export default CompanyFilterCard;
