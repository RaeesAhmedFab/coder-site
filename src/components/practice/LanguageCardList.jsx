import React from 'react';
import LanguageCard from './languageCard';

const cardData = [
  {
    title: 'Chips Input',
    description: 'Chips Input',
    badge: 'Hot',
    tags: ['React.js', 'Easy', 'Amazon', 'Flipkart', 'Phonepe'],
  },
  {
    title: 'Button UI',
    description: 'Custom Buttons',
    badge: 'New',
    tags: ['React.js', 'UI', 'Material UI'],
  },
  {
    title: 'Form Builder',
    description: 'Drag and drop forms',
    badge: 'Pro',
    tags: ['React.js', 'Forms', 'Builder'],
  },
  {
    title: 'Chart Visualizer',
    description: 'Data-driven charts',
    badge: 'Hot',
    tags: ['D3.js', 'Charts', 'Visualization'],
  },
];

const LanguageCardList = () => {
  return (
    <div className='grid grid-row-6 gap-2'>
      {cardData.map((card, index) => (
        <LanguageCard
          key={index}
          title={card.title}
          description={card.description}
          badge={card.badge}
          tags={card.tags || []}
        />
      ))}
    </div>
  );
};

export default LanguageCardList;
