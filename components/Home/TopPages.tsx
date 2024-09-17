import { useState } from 'react';
import { BarList, Card } from '@tremor/react';

const pages = [
  {
    name: '/docs/components/button',
    value: 782,
  },
  {
    name: '/docs/components/table',
    value: 752,
  },
  {
    name: '/docs/components/area-chart',
    value: 741,
  },
  {
    name: '/docs/components/badge',
    value: 750,
  },
  {
    name: '/docs/components/bar-chart',
    value: 750,
  },
  {
    name: '/docs/components/tabs',
    value: 720,
  },
  {
    name: '/docs/components/tracker',
    value: 723,
  },
];

const valueFormatter = (number: number) =>
  `${Intl.NumberFormat('us').format(number).toString()}`;

export default function TopPerformingPages() {
  const [extended, setExtended] = useState(false);
  return (
    <>
      <Card className='p-0'>
        <div className='flex items-center justify-between border-b border-tremor-border px-6 py-4 dark:border-dark-tremor-border'>
          <p className='font-medium font-heading text-tremor-content-strong dark:text-dark-tremor-content-strong'>
            Top Performing Pages
          </p>
          <p className='text-tremor-label font-medium  text-tremor-content dark:text-dark-tremor-content'>
            Visitors
          </p>
        </div>
        <div
          className={`overflow-hidden p-6 ${extended ? '' : 'max-h-[260px]'}`}
        >
          <BarList data={pages} valueFormatter={valueFormatter} />
        </div>

        <div
          className={`flex justify-center ${
            extended
              ? 'px-6 pb-6'
              : 'absolute inset-x-0 bottom-0 rounded-b-tremor-default bg-gradient-to-t from-tremor-background to-transparent py-7 dark:from-dark-tremor-background'
          }`}
        >
          <button
            className='flex items-center justify-center rounded-tremor-small border border-tremor-border bg-tremor-background px-2.5 py-2 text-tremor-default font-medium text-tremor-content-strong shadow-tremor-input hover:bg-tremor-background-muted dark:border-dark-tremor-border dark:bg-dark-tremor-background dark:text-dark-tremor-content-strong dark:shadow-dark-tremor-input hover:dark:bg-dark-tremor-background-muted'
            onClick={() => setExtended(!extended)}
          >
            {extended ? 'Show less' : 'Show more'}
          </button>
        </div>
      </Card>
    </>
  );
}
