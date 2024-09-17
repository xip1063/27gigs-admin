import Header from '@/components/Header';
import { OgDescription, OgTitle } from '@/components/Meta';
import Sidebar from '@/components/SideBar';
import '@/styles/main.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

const meta = {
  ogTitle: '',
  description: 'Events made easy for organisers',
  ogDescription: '',
};

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
      {/* <Title>{meta.metaTitle || meta.title}</Title> */}
      {meta.ogTitle && <OgTitle>{meta.ogTitle}</OgTitle>}
      {meta.ogDescription && (
        <OgDescription>{meta.ogDescription}</OgDescription>
      )}
      <Head>
        <meta
          key='twitter:card'
          name='twitter:card'
          content='summary_large_image'
        />
        <meta
          key='twitter:site'
          name='twitter:site'
          content='@twentysevengigs'
        />
        {/* <meta key="twitter:image" name="twitter:image" content={image} /> */}
        <meta
          key='twitter:creator'
          name='twitter:creator'
          content='@twentysevengigs'
        />
        <meta
          key='og:url'
          property='og:url'
          content={`https://domain.com${router.pathname}`}
        />
        <meta key='og:type' property='og:type' content='article' />
        {/* <meta key="og:image" property="og:image" content={image} /> */}
      </Head>
      <Header />
      <div>
        <Sidebar />
        <div className='lg:pl-[19.5rem] min-h-screen bg-[#fbfcfd]'>
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}
