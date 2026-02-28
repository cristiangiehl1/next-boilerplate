'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'

interface ParallaxImageProps {
  src: string
}

export function ParallaxImage({ src }: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mediaQuery.matches) return

    let frame = 0

    function handleMove(e: MouseEvent) {
      if (!container) return null

      const rect = container.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width
      const y = (e.clientY - rect.top) / rect.height

      cancelAnimationFrame(frame)

      frame = requestAnimationFrame(() => {
        container.style.setProperty('--x', `${(x - 0.5) * 50}px`)
        container.style.setProperty('--y', `${(y - 0.5) * 50}px`)
      })
    }

    container.addEventListener('mousemove', handleMove)

    return () => {
      container.removeEventListener('mousemove', handleMove)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className='relative h-full w-full overflow-hidden'
      aria-hidden='true'>
      <Image
        src={src}
        alt=''
        fill
        priority
        sizes='(min-width: 1024px) 60vw'
        className='transform-[translate3d(var(--x,0),var(--y,0),0)_scale(1.08)] object-cover opacity-80 transition-transform duration-4000 ease-out'
      />
    </div>
  )
}
