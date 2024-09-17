import { formatNumber } from '@/helpers';
import { Cell, Row, Table } from '@/ui/Table';
import { TableHeaders } from '@/ui/Table/TableHeaders';
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

export default function DashboardIndex() {
  const headers = ['Name', 'Tickets', 'Amount', 'Page'];
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <main className='max-w-8xl mx-auto px-4 pt-8'>
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
      </main>
    </>
  );
}
