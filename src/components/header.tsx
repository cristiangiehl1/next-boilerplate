import Link from 'next/link'

export function Header() {
  return (
    <header className='border-border bg-background/80 fixed inset-x-0 top-0 z-50 border-b backdrop-blur-md'>
      <div className='mx-auto flex h-14 max-w-5xl items-center justify-between px-6'>
        <Link
          href='/'
          className='text-foreground flex items-center gap-2 font-semibold'>
          {/* <Terminal className='h-5 w-5' /> */}
          <span className='font-mono text-sm'>next-boilerplate</span>
        </Link>

        <nav className='hidden items-center gap-6 md:flex'>
          <a
            href='#get-started'
            className='text-muted-foreground hover:text-foreground text-sm transition-colors'>
            Comecar
          </a>
          <a
            href='https://github.com'
            target='_blank'
            rel='noopener noreferrer'
            className='text-muted-foreground hover:text-foreground text-sm transition-colors'>
            GitHub
          </a>
        </nav>

        {/* <Button size='sm' asChild className='hidden sm:inline-flex'>
          <Link href='#get-started'>Get Started</Link>
        </Button> */}
      </div>
    </header>
  )
}
