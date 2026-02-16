'use client'

import { Check, Copy, Terminal } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export function Hero() {
  const [copied, setCopied] = useState(false)
  const command = 'npx degit your-user/next-boilerplate my-app'

  function handleCopy() {
    navigator.clipboard.writeText(command)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className='flex flex-col items-center px-6 pt-32 pb-20 text-center md:pt-44 md:pb-28'>
      <Badge
        variant='outline'
        className='border-border text-muted-foreground mb-6 gap-1.5 px-3 py-1 text-xs'>
        <Terminal className='h-3 w-3' />
        Open Source Boilerplate
      </Badge>

      <h1 className='text-foreground max-w-3xl text-4xl font-bold tracking-tight text-balance md:text-6xl lg:text-7xl'>
        Comece seu projeto Next.js do jeito certo
      </h1>

      <p className='text-muted-foreground mt-6 max-w-xl text-base leading-relaxed text-pretty md:text-lg'>
        Boilerplate pronto para producao com as ferramentas que voce ja conhece.
        TypeScript, ESLint, Prettier e Simple Import Sort configurados desde o
        primeiro commit.
      </p>

      <div className='mt-10 flex flex-col items-center gap-4 sm:flex-row'>
        <Button size='lg' asChild>
          <Link href='#get-started'>Comecar agora</Link>
        </Button>
        <Button variant='outline' size='lg' asChild>
          <a
            href='https://github.com'
            target='_blank'
            rel='noopener noreferrer'>
            <svg
              className='h-4 w-4'
              viewBox='0 0 24 24'
              fill='currentColor'
              aria-hidden='true'>
              <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
            </svg>
            GitHub
          </a>
        </Button>
      </div>

      <div className='border-border bg-card text-muted-foreground mt-10 flex w-full max-w-lg items-center gap-2 rounded-lg border px-4 py-3 font-mono text-sm'>
        <span className='text-accent'>$</span>
        <code className='flex-1 truncate text-left'>{command}</code>
        <Button
          onClick={handleCopy}
          className='text-muted-foreground hover:text-foreground shrink-0 transition-colors'
          aria-label='Copiar comando'>
          {copied ? (
            <Check className='text-accent h-4 w-4' />
          ) : (
            <Copy className='h-4 w-4' />
          )}
        </Button>
      </div>
    </section>
  )
}
