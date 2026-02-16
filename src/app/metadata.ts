import type { Metadata } from 'next'

export const siteMetadata: Metadata = {
  metadataBase: new URL('https://your-domain.com'),

  title: {
    default: 'Next.js Boilerplate',
    template: '%s | Next.js Boilerplate',
  },

  description:
    'A production-ready Next.js boilerplate with TypeScript, TailwindCSS, ESLint, Prettier, and simple-import-sort. Built for scalability and clean architecture.',

  keywords: [
    'Next.js',
    'React',
    'TypeScript',
    'TailwindCSS',
    'Boilerplate',
    'ESLint',
    'Prettier',
    'Frontend Starter',
  ],

  authors: [
    {
      name: 'Cristian Giehl',
      url: 'https://github.com/cristiangiehl1',
    },
  ],

  creator: 'Cristian Giehl',

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-domain.com',
    title: 'Next.js Boilerplate',
    description:
      'Production-ready Next.js starter with TypeScript, TailwindCSS, and strict linting setup.',
    siteName: 'Next.js Boilerplate',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Next.js Boilerplate',
    description:
      'Production-ready Next.js starter with TypeScript, TailwindCSS, and clean architecture.',
    creator: '@yourhandle',
  },

  robots: {
    index: true,
    follow: true,
  },

  category: 'technology',
}
