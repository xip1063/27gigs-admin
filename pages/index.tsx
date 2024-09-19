import OverView from '@/components/Home/OverView';
import TopPerformingPages from '@/components/Home/TopPages';
import { formatNumber } from '@/helpers';
import { Cell, Row, Table } from '@/ui/Table';
import { TableHeaders } from '@/ui/Table/TableHeaders';
import { AreaChart, Card } from '@tremor/react';
import Head from 'next/head';
import Link from 'next/link';

const events = [
  {
    name: 'Zimbabwe Trade Expo',
    tickets: 350,
    amount: 15000,
    page: 'ZimTrade',
  },
  {
    name: 'Victoria Falls Marathon',
    tickets: 500,
    amount: 20000,
    page: 'VicFallsMarathon',
  },
  {
    name: 'Harare International Festival of the Arts',
    tickets: 400,
    amount: 17500,
    page: 'HIFA2024',
  },
  {
    name: 'Durban Film Festival',
    tickets: 600,
    amount: 22000,
    page: 'DurbanFilmFest',
  },
  {
    name: 'Great Zimbabwe Cultural Expo',
    tickets: 250,
    amount: 12000,
    page: 'ZimCultureExpo',
  },
  {
    name: 'Cape Town Jazz Festival',
    tickets: 550,
    amount: 21000,
    page: 'CTJazzFest',
  },
  {
    name: 'Lusaka Business Summit',
    tickets: 300,
    amount: 13500,
    page: 'LusakaBizSummit',
  },
  {
    name: 'Botswana Safari Adventure',
    tickets: 150,
    amount: 8500,
    page: 'SafariAdventure',
  },
  {
    name: 'Bulawayo Arts Festival',
    tickets: 450,
    amount: 18000,
    page: 'BulawayoArtsFest',
  },
  {
    name: 'Eswatini Tourism Fair',
    tickets: 350,
    amount: 16000,
    page: 'EswatiniTourism',
  },
];

const chartdata = [
  {
    date: 'Jan 23',
    SolarPanels: 2890,
    Inverters: 2338,
  },
  {
    date: 'Feb 23',
    SolarPanels: 2756,
    Inverters: 2103,
  },
  {
    date: 'Mar 23',
    SolarPanels: 3322,
    Inverters: 2194,
  },
  {
    date: 'Apr 23',
    SolarPanels: 3470,
    Inverters: 2108,
  },
  {
    date: 'May 23',
    SolarPanels: 3475,
    Inverters: 1812,
  },
  {
    date: 'Jun 23',
    SolarPanels: 3129,
    Inverters: 1726,
  },
  {
    date: 'Jul 23',
    SolarPanels: 3490,
    Inverters: 1982,
  },
  {
    date: 'Aug 23',
    SolarPanels: 2903,
    Inverters: 2012,
  },
  {
    date: 'Sep 23',
    SolarPanels: 2643,
    Inverters: 2342,
  },
  {
    date: 'Oct 23',
    SolarPanels: 2837,
    Inverters: 2473,
  },
  {
    date: 'Nov 23',
    SolarPanels: 2954,
    Inverters: 3848,
  },
  {
    date: 'Dec 23',
    SolarPanels: 3239,
    Inverters: 3736,
  },
];

export default function DashboardIndex() {
  const headers = ['Name', 'Tickets', 'Amount', 'Page'];
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <main className='max-w-8xl mx-auto px-4 pt-8 pb-16'>
        <h1 className='font-semibold text-xl prose text-black'>
          Good afternoon, Martin
        </h1>
        <Card className='mt-6 grid lg:grid-cols-5'>
          <div className='col-span-1 border-r'>
            <h2 className='text-xl font-semibold text-slate-900 mb-4'>
              Overview
            </h2>
            <div className='space-y-4'>
              <div>
                <p className='text-3xl font-bold text-slate-900'>$8,690</p>
                <p className='text-sm text-slate-700'>Sales</p>
              </div>
              <div>
                <p className='text-3xl font-bold text-slate-900'>46</p>
                <p className='text-sm text-slate-700'>Page Visits</p>
              </div>
              <div>
                <p className='text-3xl font-bold text-slate-900'>32</p>
                <p className='text-sm text-slate-700'>Tickets</p>
              </div>
            </div>
          </div>
          <div className='col-span-2 border-r'>
            <AreaChart
              className='h-64'
              data={chartdata}
              index='date'
              categories={['SolarPanels', 'Inverters']}
              valueFormatter={(number: number) =>
                `$${Intl.NumberFormat('us').format(number).toString()}`
              }
              onValueChange={(v) => console.log(v)}
            />
          </div>
          <div className='col-span-2 pl-4'>
            <h2 className='text-xl font-semibold text-slate-900 mb-4'>
              Order Stats
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 items-center'>
              <div className='flex flex-col items-center'>
                <p className='mb-2.5 text-sm text-gray-500'>Lorem ipsum</p>
                <CircularProgress percentage={75} color='text-green-500' />
              </div>
              <div className='flex flex-col items-center'>
                <p className='mb-2.5 text-sm text-gray-500'>Lorem ipsum</p>
                <CircularProgress percentage={50} color='text-fuschia-300' />
              </div>
              <div className='flex flex-col items-center'>
                <p className='mb-2.5 text-sm text-gray-500'>Lorem ipsum</p>
                <CircularProgress percentage={25} color='text-gray-300' />
              </div>
            </div>
          </div>
        </Card>
        <div className='mt-8 pb-10 grid lg:grid-cols-2 gap-5'>
          <OverView />
          <TopPerformingPages />
        </div>
        <div>
          <h2 className='font-semibold text-slate-900 mb-4'>Recent Orders</h2>
          <Table>
            <TableHeaders headers={headers} />
            <tbody>
              {events.map((event, index) => (
                <Row key={index}>
                  <Cell>{event.name}</Cell>
                  <Cell>{event.tickets}</Cell>
                  <Cell>${formatNumber(event.amount)}</Cell>
                  <Cell>
                    <Link className='hover:text-sky-500' href='/pages'>
                      {event.page}
                    </Link>
                  </Cell>
                </Row>
              ))}
            </tbody>
          </Table>
        </div>
      </main>
    </>
  );
}

function CircularProgress({
  percentage,
  color,
}: {
  percentage: number;
  color: string;
}) {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <svg className='w-24 h-24'>
      <circle
        className='text-gray-200'
        strokeWidth='5'
        stroke='currentColor'
        fill='transparent'
        r={radius}
        cx='48'
        cy='48'
      />
      <circle
        className={`${color}`}
        strokeWidth='5'
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        strokeLinecap='round'
        stroke='currentColor'
        fill='transparent'
        r={radius}
        cx='48'
        cy='48'
        transform='rotate(-90 48 48)'
      />
    </svg>
  );
}
