import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <body className='antialiased font-sans text-slate-500 bg-white'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
