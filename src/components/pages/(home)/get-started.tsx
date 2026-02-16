'use client'

import { Check, Copy } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'

const steps = [
  {
    step: '01',
    title: 'Clone o repositorio',
    command: 'npx degit your-user/next-boilerplate my-app',
  },
  {
    step: '02',
    title: 'Instale as dependencias',
    command: 'cd my-app && pnpm install',
  },
  {
    step: '03',
    title: 'Inicie o servidor',
    command: 'pnpm dev',
  },
]

export function GetStarted() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  function handleCopy(command: string, index: number) {
    navigator.clipboard.writeText(command)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 2000)
  }

  return (
    <section
      id='get-started'
      className='border-border border-t px-6 py-20 md:py-28'>
      <div className='mx-auto max-w-2xl'>
        <div className='mb-14 text-center'>
          <h2 className='text-foreground text-3xl font-bold tracking-tight text-balance md:text-4xl'>
            Comece em 3 passos
          </h2>
          <p className='text-muted-foreground mt-4 md:text-lg'>
            Do zero ao desenvolvimento em menos de um minuto.
          </p>
        </div>

        <div className='flex flex-col gap-6'>
          {steps.map((item, index) => (
            <div key={item.step} className='flex gap-4'>
              <div className='bg-secondary text-foreground flex h-10 w-10 shrink-0 items-center justify-center rounded-lg font-mono text-sm font-bold'>
                {item.step}
              </div>
              <div className='flex-1'>
                <h3 className='text-foreground mb-2 font-semibold'>
                  {item.title}
                </h3>
                <div className='border-border bg-card text-muted-foreground flex items-center gap-2 rounded-lg border px-4 py-3 font-mono text-sm'>
                  <span className='text-accent'>$</span>
                  <code className='flex-1 truncate'>{item.command}</code>
                  <Button
                    onClick={() => handleCopy(item.command, index)}
                    className='text-muted-foreground hover:text-foreground shrink-0 transition-colors'
                    aria-label={`Copiar: ${item.command}`}>
                    {copiedIndex === index ? (
                      <Check className='text-accent h-4 w-4' />
                    ) : (
                      <Copy className='h-4 w-4' />
                    )}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
