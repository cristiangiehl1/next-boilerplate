import Image from 'next/image'
import type React from 'react'

import { ParallaxImage } from '@/components/parallax-image'

export default function AuthLayout({
  children,
}: {
  children: Readonly<React.ReactNode>
}) {
  return (
    <div className='relative grid min-h-screen lg:grid-cols-[1fr_520px] xl:grid-cols-[1fr_580px]'>
      {/* ── Left panel: full-bleed image with editorial overlay ── */}
      <div className='relative z-0 hidden lg:block' aria-hidden='true'>
        <ParallaxImage src='/images/authentication.jpg' />

        {/* Bottom quote / branding */}
        <div className='bg-background/40 absolute bottom-8 left-10 z-10 rounded-lg p-6'>
          <p className='text-foreground text-[11px] tracking-[0.3em] uppercase'>
            Est. 2024
          </p>
          <p className='text-foreground/90 mt-3 max-w-xs text-2xl leading-snug font-light text-shadow-2xs'>
            &quot;Simplicidade é a sofisticação suprema.&quot;
          </p>
          <p className='text-foreground/35 mt-2 text-[11px] tracking-[0.25em] uppercase'>
            — Leonardo da Vinci
          </p>
        </div>
      </div>

      {/* ── Right panel: form area ── */}
      <div className='bg-background relative flex min-h-screen flex-col'>
        {/* Mobile background image (xs–md) */}
        <div className='absolute inset-0 lg:hidden' aria-hidden='true'>
          <Image
            src='/images/authentication.jpg'
            alt=''
            fill
            priority
            sizes='100vw'
            className='object-cover'
          />
          <div className='bg-background/90 absolute inset-0 backdrop-blur-sm' />
        </div>

        {/* Logo / wordmark */}
        <header className='relative z-10 flex items-center justify-between px-10 py-8'>
          <div className='flex items-center gap-3'>
            {/* Abstract mark */}
            <svg
              width='22'
              height='22'
              viewBox='0 0 22 22'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='text-foreground'>
              <rect x='0' y='0' width='10' height='10' fill='currentColor' />
              <rect
                x='12'
                y='0'
                width='10'
                height='10'
                fill='currentColor'
                opacity='0.3'
              />
              <rect
                x='0'
                y='12'
                width='10'
                height='10'
                fill='currentColor'
                opacity='0.3'
              />
              <rect x='12' y='12' width='10' height='10' fill='currentColor' />
            </svg>
            <span className='text-foreground text-[13px] tracking-[0.2em] uppercase'>
              Marca
            </span>
          </div>

          <span className='text-muted-foreground text-[11px] tracking-[0.25em] uppercase'>
            Acesso seguro
          </span>
        </header>

        {/* Main content */}
        <main className='relative z-10 flex flex-1 items-center justify-center px-10 py-12'>
          <div className='w-full max-w-95'>
            {/* Decorative line above */}
            <div className='mb-8 flex items-center gap-4'>
              <div className='bg-border h-px flex-1' />
              <div className='bg-border h-1 w-1 rounded-full' />
              <div className='bg-border h-px w-6' />
            </div>

            {children}

            {/* Decorative line below */}
            <div className='mt-8 flex items-center gap-4'>
              <div className='bg-border h-px w-6' />
              <div className='bg-border h-1 w-1 rounded-full' />
              <div className='bg-border h-px flex-1' />
            </div>
          </div>
        </main>

        <footer className='relative z-10 px-10 py-6'>
          <p className='text-muted-foreground/50 text-center text-[11px] tracking-[0.2em] uppercase'>
            © 2026 Marca. Todos os direitos reservados.
          </p>
        </footer>
      </div>
    </div>
  )
}
