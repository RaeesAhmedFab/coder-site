'use client';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export default function BookmarkWithTooltip() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <span className='inline-block cursor-pointer'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='gray'
              stroke='none'
            >
              <path d='M19 21l-7-4-7 4V5a2 2 0 012-2h10a2 2 0 012 2v16z' />
            </svg>
          </span>
        </TooltipTrigger>
        <TooltipContent>
          <p>Bookmark this</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
