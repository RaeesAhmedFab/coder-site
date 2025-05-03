import * as React from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function DropdownButton() {
  return (
    <Select defaultValue='alllanguage'>
      <SelectTrigger className='w-[150px] h-12 bg-[rgb(41,44,53)] text-white border-0 focus:ring-0 focus:ring-offset-0'>
        <SelectValue placeholder='Select language' />
      </SelectTrigger>
      <SelectContent className='bg-[rgb(41,44,53)] text-white border-0'>
        <SelectGroup>
          <SelectItem value='alllanguage'>All Language</SelectItem>
          <SelectItem value='javascript'>JavaScript</SelectItem>
          <SelectItem value='react'>React</SelectItem>
          <SelectItem value='node'>Node</SelectItem>
          <SelectItem value='express'>Express Js</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
