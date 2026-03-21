import { NextResponse } from 'next/server'

import { controller } from '@/infra/controller'

export type Post = {
  id: number
  title: string
  content: string
  author: string
  createdAt: string
  tags: string[]
}

export const posts: Post[] = [
  {
    id: 1,
    title: 'Introdução ao JavaScript',
    content:
      'JavaScript é uma linguagem de programação usada para criar interatividade na web.',
    author: 'Cristian',
    createdAt: '2026-03-01',
    tags: ['javascript', 'web', 'iniciante'],
  },
  {
    id: 2,
    title: 'Aprendendo React',
    content: 'React é uma biblioteca para construir interfaces de usuário.',
    author: 'Ana',
    createdAt: '2026-03-02',
    tags: ['react', 'frontend'],
  },
  {
    id: 3,
    title: 'Node.js na prática',
    content: 'Node.js permite rodar JavaScript no backend.',
    author: 'Carlos',
    createdAt: '2026-03-03',
    tags: ['node', 'backend'],
  },
  {
    id: 4,
    title: 'O que é TypeScript?',
    content: 'TypeScript adiciona tipagem estática ao JavaScript.',
    author: 'Marina',
    createdAt: '2026-03-04',
    tags: ['typescript'],
  },
  {
    id: 5,
    title: 'CSS moderno',
    content: 'Aprenda sobre flexbox e grid.',
    author: 'João',
    createdAt: '2026-03-05',
    tags: ['css', 'design'],
  },
  {
    id: 6,
    title: 'Next.js guia completo',
    content: 'Next.js facilita SSR e SSG.',
    author: 'Lucas',
    createdAt: '2026-03-06',
    tags: ['nextjs', 'react'],
  },
  {
    id: 7,
    title: 'Banco de dados com PostgreSQL',
    content: 'PostgreSQL é um banco relacional poderoso.',
    author: 'Fernanda',
    createdAt: '2026-03-07',
    tags: ['database', 'postgres'],
  },
  {
    id: 8,
    title: 'Autenticação com JWT',
    content: 'JWT é usado para autenticação baseada em tokens.',
    author: 'Rafael',
    createdAt: '2026-03-08',
    tags: ['auth', 'jwt'],
  },
  {
    id: 9,
    title: 'APIs REST',
    content: 'APIs REST são amplamente usadas na web.',
    author: 'Beatriz',
    createdAt: '2026-03-09',
    tags: ['api', 'rest'],
  },
  {
    id: 10,
    title: 'Deploy de aplicações',
    content: 'Aprenda a fazer deploy com Docker e Vercel.',
    author: 'Pedro',
    createdAt: '2026-03-10',
    tags: ['deploy', 'docker'],
  },
]

async function getHandler() {
  return NextResponse.json<Post[]>(posts, { status: 200 })
}

export const GET = controller.handleRouteError(getHandler)
