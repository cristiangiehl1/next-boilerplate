import { Card, CardContent } from '@/components/ui/card'

const technologies = [
  {
    name: 'Next.js',
    description:
      'Framework React com App Router, SSR e otimizacoes de performance prontas para producao.',
    icon: (
      <svg
        className='h-8 w-8'
        viewBox='0 0 24 24'
        fill='currentColor'
        aria-hidden='true'>
        <path d='M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.86-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.572 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z' />
      </svg>
    ),
  },
  {
    name: 'TypeScript',
    description:
      'Tipagem estatica que reduz bugs e melhora a experiencia de desenvolvimento com autocomplete.',
    icon: (
      <svg
        className='h-8 w-8'
        viewBox='0 0 24 24'
        fill='currentColor'
        aria-hidden='true'>
        <path d='M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.42.276.69.394.57.232.893.341c.502.167.96.361 1.378.582.417.22.774.484 1.072.794.298.31.528.674.693 1.09.164.416.246.889.246 1.42 0 .585-.1 1.087-.303 1.504a2.97 2.97 0 0 1-.852 1.036 3.72 3.72 0 0 1-1.305.598 5.73 5.73 0 0 1-1.657.222c-.747 0-1.434-.082-2.06-.246a5.97 5.97 0 0 1-1.745-.738v-2.665c.284.238.594.45.925.635.33.186.672.338 1.024.457.352.12.694.2 1.023.245.33.046.63.07.9.07.33 0 .605-.033.823-.1a1.46 1.46 0 0 0 .52-.259.85.85 0 0 0 .272-.373c.05-.14.074-.295.074-.468 0-.218-.06-.412-.183-.584a1.73 1.73 0 0 0-.529-.46 4.07 4.07 0 0 0-.813-.39 28.22 28.22 0 0 0-1.07-.4 7.32 7.32 0 0 1-1.207-.573c-.38-.227-.703-.5-.962-.818a3.27 3.27 0 0 1-.598-1.082 4.241 4.241 0 0 1-.207-1.378c0-.54.093-1.01.278-1.411.186-.402.455-.74.808-1.014.352-.274.776-.478 1.273-.612A5.715 5.715 0 0 1 18.488 9.75zM7.312 10.477H4.5v-1.84h8.307v1.84h-2.83v8.16H7.312z' />
      </svg>
    ),
  },
  {
    name: 'ESLint',
    description:
      'Linting rigoroso com regras customizadas para manter a qualidade e consistencia do codigo.',
    icon: (
      <svg
        className='h-8 w-8'
        viewBox='0 0 24 24'
        fill='currentColor'
        aria-hidden='true'>
        <path d='M7.257 9.132L11.816 6.5a.369.369 0 0 1 .368 0l4.559 2.632a.369.369 0 0 1 .184.32v5.263a.37.37 0 0 1-.184.319l-4.559 2.632a.369.369 0 0 1-.368 0l-4.559-2.632a.369.369 0 0 1-.184-.32V9.452a.37.37 0 0 1 .184-.32M23.852 11.53l-5.446-9.475c-.198-.344-.61-.557-1.052-.557H6.646c-.442 0-.854.213-1.052.557L.148 11.53c-.198.344-.198.77 0 1.114l5.446 9.475c.198.344.61.557 1.052.557h10.708c.442 0 .854-.213 1.052-.557l5.446-9.475c.198-.344.198-.77 0-1.114zM14.43 16.56c0 .142-.078.275-.206.34l-2.017 1.167a.39.39 0 0 1-.396 0l-2.017-1.167a.396.396 0 0 1-.206-.34v-2.345c0-.142.078-.275.206-.34l2.017-1.167a.39.39 0 0 1 .396 0l2.017 1.167c.128.065.206.198.206.34z' />
      </svg>
    ),
  },
  {
    name: 'Prettier',
    description:
      'Formatacao automatica do codigo para um estilo consistente sem discussoes de estilo.',
    icon: (
      <svg
        className='h-8 w-8'
        viewBox='0 0 24 24'
        fill='currentColor'
        aria-hidden='true'>
        <path d='M8.571 23.429A.571.571 0 0 1 8 24H2.286a.571.571 0 0 1 0-1.143H8c.316 0 .571.256.571.572zM8 20.57H6.857a.571.571 0 0 0 0 1.143H8a.571.571 0 0 0 0-1.143zm-5.714 1.143H4.57a.571.571 0 0 0 0-1.143H2.286a.571.571 0 0 0 0 1.143zM8 18.286H2.286a.571.571 0 0 0 0 1.143H8a.571.571 0 0 0 0-1.143zM16 16H5.714a.571.571 0 0 0 0 1.143H16A.571.571 0 0 0 16 16zM2.286 17.143h1.143a.571.571 0 0 0 0-1.143H2.286a.571.571 0 0 0 0 1.143zm19.428-3.428H2.286a.571.571 0 0 0 0 1.143h19.428a.571.571 0 0 0 0-1.143zM2.286 12.57h19.428a.571.571 0 0 0 0-1.142H2.286a.571.571 0 0 0 0 1.142zm0-2.285h19.428a.571.571 0 0 0 0-1.143H2.286a.571.571 0 0 0 0 1.143zM21.714 8H2.286a.571.571 0 0 0 0 1.143h19.428a.571.571 0 0 0 0-1.143zm0-2.286H2.286a.571.571 0 0 0 0 1.143h19.428a.571.571 0 0 0 0-1.143zm0-2.285H2.286a.571.571 0 0 0 0 1.142h19.428a.571.571 0 0 0 0-1.142zM2.286 1.143h19.428a.571.571 0 0 0 0-1.143H2.286a.571.571 0 0 0 0 1.143zm0 1.143h19.428a.571.571 0 0 0 0-1.143H2.286a.571.571 0 0 0 0 1.143z' />
      </svg>
    ),
  },
  {
    name: 'Simple Import Sort',
    description:
      'Organizacao automatica de imports para manter o codigo limpo e padronizado.',
    icon: (
      <svg
        className='h-8 w-8'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        aria-hidden='true'>
        <path d='M3 6h18M3 12h12M3 18h6' />
      </svg>
    ),
  },
]

export function TechStack() {
  return (
    <section className='px-6 py-20 md:py-28'>
      <div className='mx-auto max-w-5xl'>
        <div className='mb-14 text-center'>
          <h2 className='text-foreground text-3xl font-bold tracking-tight text-balance md:text-4xl'>
            Tech Stack
          </h2>
          <p className='text-muted-foreground mt-4 md:text-lg'>
            Tudo que voce precisa, nada que voce nao precisa.
          </p>
        </div>

        <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
          {technologies.map((tech) => (
            <Card
              key={tech.name}
              className='border-border bg-card hover:border-muted-foreground/25 transition-colors'>
              <CardContent className='p-6'>
                <div className='text-foreground mb-4'>{tech.icon}</div>
                <h3 className='text-foreground mb-2 font-semibold'>
                  {tech.name}
                </h3>
                <p className='text-muted-foreground text-sm leading-relaxed'>
                  {tech.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
