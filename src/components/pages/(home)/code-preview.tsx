export function CodePreview() {
  return (
    <section className='border-border border-t px-6 py-20 md:py-28'>
      <div className='mx-auto max-w-3xl'>
        <div className='mb-14 text-center'>
          <h2 className='text-foreground text-3xl font-bold tracking-tight text-balance md:text-4xl'>
            Estrutura limpa desde o inicio
          </h2>
          <p className='text-muted-foreground mt-4 md:text-lg'>
            Uma estrutura de pastas organizada que escala com seu projeto.
          </p>
        </div>

        <div className='border-border bg-card overflow-hidden rounded-lg border'>
          <div className='border-border flex items-center gap-2 border-b px-4 py-3'>
            <div className='bg-muted-foreground/20 h-3 w-3 rounded-full' />
            <div className='bg-muted-foreground/20 h-3 w-3 rounded-full' />
            <div className='bg-muted-foreground/20 h-3 w-3 rounded-full' />
            <span className='text-muted-foreground ml-2 font-mono text-xs'>
              project-structure
            </span>
          </div>
          <pre className='text-muted-foreground overflow-x-auto p-6 font-mono text-sm leading-relaxed'>
            <code>{`my-app/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   └── ui/
├── lib/
│   └── utils.ts
├── public/
├── .eslintrc.json
├── .prettierrc
├── next.config.mjs
├── tsconfig.json
├── tailwind.config.ts
└── package.json`}</code>
          </pre>
        </div>
      </div>
    </section>
  )
}
