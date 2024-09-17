import { Card } from '@tremor/react';
import {
  HiOutlineCalendar,
  HiOutlineChartBarSquare,
  HiOutlineEllipsisHorizontal,
  HiOutlinePencil,
} from 'react-icons/hi2';

export default function PagesPage() {
  return (
    <main className='max-w-8xl mx-auto px-4 py-10'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-10'>
        {[...Array(15).keys()].map((item) => (
          <EventsGrid key={item} />
        ))}
      </div>
    </main>
  );
}

const EventsGrid = () => {
  return (
    <Card className='p-0 flex flex-col'>
      <div className='flex-1 p-4'>
        <h2 className='text-slate-900 font-medium'>Amazing Festival</h2>
        <p className='mt-2 text-sm'>Updated on Nov 7, 2024</p>
        <p className='mt-4 text-slate-800 font-semibold text-lg'>$890</p>
      </div>
      <div className='h-10 border-t p-4 flex justify-between text-slate-500 items-center'>
        <HiOutlineChartBarSquare className='size-5 items-start' />
        <HiOutlineCalendar className='size-5' />
        <HiOutlinePencil className='size-5' />
        <HiOutlineEllipsisHorizontal className='size-5' />
      </div>
    </Card>
  );
};
