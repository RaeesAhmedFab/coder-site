// React Packages
import React, { useState } from 'react';
// React Icons
import { FileText, Lightbulb, UploadCloud, MessageSquare } from 'lucide-react';
// components
import Problem from './Problem';
import Solution from './Solution';
import Submission from './Submission';
import Discuss from './Discussion';

const Tab_Components = {
  Problem: Problem,
  Solution: Solution,
  Submission: Submission,
  Discuss: Discuss,
};

const Tabs = [
  { name: 'Problem', icons: FileText },
  { name: 'Solution', icons: Lightbulb },
  { name: 'Submission', icons: UploadCloud },
  { name: 'Discuss', icons: MessageSquare },
];

const LanguageCardDetails = () => {
  const [activeTab, setActiveTab] = useState('Problem');
  const ActiveComponent = Tab_Components[activeTab];

  return (
    <div className='max-w-2xl bg-[#212227] border border-[#42444b] p-6 rounded-lg'>
      <div className='flex space-x-6 border-b border-[#42444b] mb-4' role='tablist'>
        {Tabs.map(({ name, icons: Icon }) => (
          <button
            key={name}
            role='tab'
            aria-selected={activeTab === name}
            className={`flex items-center gap-2 pb-2 transition-colors font-medium ${
              activeTab === name ? 'text-white border-b-2 border-white' : 'text-gray-400 hover:text-white'
            }`}
            onClick={() => setActiveTab(name)}
          >
            <Icon size={18} />
            <span>{name}</span>
          </button>
        ))}
      </div>
      <div role='tabpanel' className='text-white'>
        {activeTab !== 'Problem' && <h2 className='text-lg font-bold mb-2'>{activeTab}</h2>}
        <ActiveComponent />
      </div>
    </div>
  );
};

export default LanguageCardDetails;
