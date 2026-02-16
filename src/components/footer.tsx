export function Footer() {
  return (
    <footer className='border-border border-t px-6 py-10'>
      <div className='mx-auto max-w-5xl'>
        <div className='flex flex-col items-center justify-between gap-6 md:flex-row'>
          <div className='text-muted-foreground flex items-center gap-2'>
            {/* <Terminal className='h-4 w-4' /> */}
            <span className='font-mono text-sm'>next-boilerplate</span>
          </div>

          <div className='flex items-center gap-4'>
            <a
              href='https://github.com'
              target='_blank'
              rel='noopener noreferrer'
              className='text-muted-foreground hover:text-foreground text-sm transition-colors'>
              GitHub
            </a>
            {/* <Separator orientation='vertical' className='h-4' /> */}
            <a
              href='https://nextjs.org'
              target='_blank'
              rel='noopener noreferrer'
              className='text-muted-foreground hover:text-foreground text-sm transition-colors'>
              Next.js Docs
            </a>
          </div>
        </div>

        <p className='text-muted-foreground mt-6 text-center text-xs md:text-left'>
          Open source. Use como quiser.
        </p>
      </div>
    </footer>
  )
}
