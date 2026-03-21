'use client'

import { useInView } from 'react-intersection-observer'

import { cn } from '@/lib/utils'

interface InfiniteScrollContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: Readonly<React.ReactNode>
  onBottomReached: () => void
}

export function InfiniteScrollContainer({
  children,
  onBottomReached,
  className,
  ...props
}: InfiniteScrollContainerProps) {
  const { ref } = useInView({
    rootMargin: '50px',
    onChange: (inView) => {
      console.log({ inView })
      if (inView) onBottomReached()
    },
  })

  return (
    <div className={cn(className)} {...props}>
      {children}
      <div ref={ref} />
    </div>
  )
}
