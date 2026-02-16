import { CheckCircle2 } from 'lucide-react'

const features = [
  {
    title: 'App Router',
    description:
      'Estrutura de pastas usando o App Router do Next.js com layouts e rotas modernas.',
  },
  {
    title: 'Strict Mode',
    description:
      'TypeScript configurado em modo strict para capturar erros antes do runtime.',
  },
  {
    title: 'Path Aliases',
    description: 'Imports limpos com @/ alias configurado no tsconfig.json.',
  },
  {
    title: 'Auto Format on Save',
    description:
      'Prettier integrado com ESLint para formatacao automatica ao salvar.',
  },
  {
    title: 'Import Sorting',
    description:
      'Imports organizados automaticamente em grupos logicos via Simple Import Sort.',
  },
  {
    title: 'Zero Config Deploy',
    description:
      'Pronto para deploy na Vercel sem nenhuma configuracao adicional.',
  },
]

export function Features() {
  return (
    <section className='border-border border-t px-6 py-20 md:py-28'>
      <div className='mx-auto max-w-5xl'>
        <div className='mb-14 text-center'>
          <h2 className='text-foreground text-3xl font-bold tracking-tight text-balance md:text-4xl'>
            Pronto para producao
          </h2>
          <p className='text-muted-foreground mt-4 md:text-lg'>
            Configuracoes que voce gastaria horas ajustando, prontas em
            segundos.
          </p>
        </div>

        <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
          {features.map((feature) => (
            <div key={feature.title} className='flex gap-3'>
              <CheckCircle2 className='text-accent mt-0.5 h-5 w-5 shrink-0' />
              <div>
                <h3 className='text-foreground font-semibold'>
                  {feature.title}
                </h3>
                <p className='text-muted-foreground mt-1 text-sm leading-relaxed'>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
