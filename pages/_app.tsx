import Header from '@/components/Header';
import Sidebar from '@/components/SideBar';
import '@/styles/main.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <div>
        <Sidebar />
        <div className='lg:pl-[19.5rem]'>
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}
