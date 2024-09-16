import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './ui/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      typography: (theme: any) => ({
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: theme('colors.slate.700'),
            hr: {
              borderColor: theme('colors.slate.100'),
              marginTop: '3em',
              marginBottom: '3em',
            },
            '.lead': {
              fontSize: '1.125em',
              lineHeight: 'calc(32 / 18)',
            },
            'h1, h2, h3': {
              letterSpacing: '-0.025em',
            },
            h2: {
              fontSize: '1.25em',
              fontWeight: '600',
              marginBottom: `1.25em`,
            },
            h3: {
              fontSize: '1.125em',
              marginTop: '2.4em',
              marginBottom: '1em',
              lineHeight: '1.4',
            },
            h4: {
              marginTop: '2.5em',
              marginBottom: '0.75em',
              fontSize: '1em',
              fontWeight: '600',
            },
            'h2 small, h3 small, h4 small': {
              fontFamily: theme('fontFamily.mono').join(', '),
              color: theme('colors.slate.500'),
              fontWeight: 500,
            },
            'h2 small': {
              fontSize: theme('fontSize.lg')[0],
              ...theme('fontSize.lg')[1],
            },
            'h3 small': {
              fontSize: theme('fontSize.base')[0],
              ...theme('fontSize.base')[1],
            },
            'h4 small': {
              fontSize: theme('fontSize.sm')[0],
              ...theme('fontSize.sm')[1],
            },
            'h2, h3, h4': {
              'scroll-margin-top': 'var(--scroll-mt)',
            },
            'h2 code, h3 code': {
              font: 'inherit',
            },
            ul: {
              listStyleType: 'none',
              paddingLeft: '1em',
              marginTop: '1em',
              marginBottom: '2em',
            },
            'ul > li': {
              position: 'relative',
              // paddingLeft: '0',
              paddingLeft: '0.5em',
              listStyleType: 'disc',
              marginTop: '0.75em',
              marginBottom: '0.75em',
            },
            // 'ul > li::before': {
            //   content: '""',
            //   width: '0.75em',
            //   height: '0.125em',
            //   position: 'absolute',
            //   top: 'calc(0.875em - 0.0625em)',
            //   left: 0,
            //   borderRadius: '999px',
            //   backgroundColor: theme('colors.slate.300'),
            // },
            '--tw-prose-bullets': theme('colors.slate.300'),
            a: {
              fontWeight: theme('fontWeight.semibold'),
              textDecoration: 'none',
              borderBottom: `1px solid ${theme('colors.sky.300')}`,
            },
            'a:hover': {
              borderBottomWidth: '2px',
            },
            'a code': {
              color: 'inherit',
              fontWeight: 'inherit',
            },
            strong: {
              color: theme('colors.slate.900'),
              fontWeight: theme('fontWeight.semibold'),
            },
            'a strong': {
              color: 'inherit',
              fontWeight: 'inherit',
            },
            kbd: {
              background: theme('colors.slate.100'),
              borderWidth: '1px',
              borderColor: theme('colors.slate.200'),
              padding: '0.125em 0.25em',
              color: theme('colors.slate.700'),
              fontWeight: 500,
              fontSize: '0.875em',
              fontVariantLigatures: 'none',
              borderRadius: '4px',
              margin: '0 1px',
            },
            code: {
              fontWeight: 550,
              fontVariantLigatures: 'none',
            },
            'strong code': {
              fontWeight: 650,
            },
            pre: {
              color: theme('colors.slate.50'),
              borderRadius: theme('borderRadius.xl'),
              padding: theme('padding.5'),
              boxShadow: theme('boxShadow.md'),
              display: 'flex',
              marginTop: `${20 / 14}em`,
              marginBottom: `${32 / 14}em`,
            },
            'p + pre': {
              marginTop: `${-4 / 14}em`,
            },
            'pre + pre': {
              marginTop: `${-16 / 14}em`,
            },
            'pre code': {
              flex: 'none',
              minWidth: '100%',
            },
            table: {
              fontSize: theme('fontSize.sm')[0],
              lineHeight: theme('fontSize.sm')[1].lineHeight,
            },
            thead: {
              color: theme('colors.slate.700'),
              borderBottomColor: theme('colors.slate.200'),
            },
            'thead th': {
              paddingTop: 0,
              fontWeight: theme('fontWeight.semibold'),
            },
            'tbody tr': {
              borderBottomColor: theme('colors.slate.100'),
            },
            'tbody tr:last-child': {
              borderBottomWidth: '1px',
            },
            'tbody code': {
              fontSize: theme('fontSize.xs')[0],
            },
            'figure figcaption': {
              textAlign: 'center',
              fontStyle: 'italic',
            },
            'figure > figcaption': {
              marginTop: `${12 / 14}em`,
            },
          },
        },
      }),
      fontFamily: {
        sans: [
          'Inter var',
          'Inter',
          'InterVariable',
          ...defaultTheme.fontFamily.sans,
        ],
        mono: ['Hack', 'Menlo', ...defaultTheme.fontFamily.mono],
        heading: ['Degular', ...defaultTheme.fontFamily.sans],
      },
      maxWidth: {
        '8xl': '90rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    //@ts-ignore
    function ({ addVariant }) {
      addVariant(
        'supports-backdrop-blur',
        '@supports (backdrop-filter: blur(0)) or (-webkit-backdrop-filter: blur(0))'
      );
      addVariant(
        'supports-scrollbars',
        '@supports selector(::-webkit-scrollbar)'
      );
      addVariant('children', '& > *');
      addVariant('scrollbar', '&::-webkit-scrollbar');
      addVariant('scrollbar-track', '&::-webkit-scrollbar-track');
      addVariant('scrollbar-thumb', '&::-webkit-scrollbar-thumb');
      addVariant('demo-dark', '.demo-dark &');
    },
  ],
};
export default config;
