import Link from 'next/link'

export default function TestsLayout({
  children,
}: {
  children: Readonly<React.ReactNode>
}) {
  return (
    <div className='bg-background min-h-screen w-full'>
      <header className='bg-secondary mb-4 flex justify-between p-6'>
        <h3>Rotas de Testes</h3>

        <nav className='flex gap-4'>
          <Link href={'/tests/posts'}>Posts</Link>
          <Link href={'/tests/posts/paginated'}>Posts Paginados</Link>
          <Link href={'/tests/posts/infinite'}>Posts Scroll Infinito</Link>
        </nav>
      </header>
      {children}
    </div>
  )
}
