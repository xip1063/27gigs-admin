import Head from 'next/head';
import { ReactNode } from 'react';

interface TitleProps {
  suffix?: string;
  children: ReactNode;
}

export function Title({ suffix = 'TwentySevenGigs', children }: TitleProps) {
  let title = children + (suffix ? ` - ${suffix}` : '');

  return (
    <>
      <Head>
        <title key='title'>{title}</title>
      </Head>
      <OgTitle suffix={suffix}>{children}</OgTitle>
    </>
  );
}

export function OgTitle({ suffix = 'TwentySevenGigs', children }: TitleProps) {
  let title = children + (suffix ? ` - ${suffix}` : '');

  return (
    <Head>
      <meta key='twitter:title' name='twitter:title' content={title} />
      <meta key='og:title' property='og:title' content={title} />
    </Head>
  );
}

interface DescriptionProps {
  children: ReactNode;
}

export function Description({ children }: DescriptionProps) {
  return (
    <>
      <Head>
        <meta name='description' content={children as string} />
      </Head>
      <OgDescription>{children}</OgDescription>
    </>
  );
}

export function OgDescription({ children }: DescriptionProps) {
  return (
    <Head>
      <meta
        key='og:description'
        property='og:description'
        content={children as string}
      />
      <meta
        key='twitter:description'
        name='twitter:description'
        content={children as string}
      />
    </Head>
  );
}
