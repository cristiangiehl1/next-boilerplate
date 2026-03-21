import { cn } from '@/lib/utils'

import { Button } from './ui/button'
import {
  Pagination as PaginationContainer,
  PaginationContent,
  PaginationItem,
} from './ui/pagination'

interface ShadcnPaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  disabled: boolean
}

type PageSlot = number | 'ellipsis-left' | 'ellipsis-right'

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  disabled,
}: ShadcnPaginationProps) {
  const getPageNumbers = (): PageSlot[] => {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1)
    }

    if (currentPage <= 4) {
      return [1, 2, 3, 4, 5, 'ellipsis-right', totalPages]
    }

    if (currentPage >= totalPages - 3) {
      return [
        1,
        'ellipsis-left',
        totalPages - 4,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ]
    }

    return [
      1,
      'ellipsis-left',
      currentPage - 1,
      currentPage,
      currentPage + 1,
      'ellipsis-right',
      totalPages,
    ]
  }

  const pages = getPageNumbers()

  return (
    <PaginationContainer>
      <PaginationContent>
        {/* Anterior */}
        <PaginationItem>
          <Button
            variant='ghost'
            onClick={() => onPageChange(currentPage - 1)}
            disabled={disabled || currentPage === 1}>
            {'<'}
          </Button>
        </PaginationItem>

        {/* Páginas */}
        {pages.map((page) => {
          if (page === 'ellipsis-left' || page === 'ellipsis-right') {
            return (
              <PaginationItem key={page}>
                <span className='text-muted-foreground inline-flex h-9 w-9 items-center justify-center text-sm'>
                  ...
                </span>
              </PaginationItem>
            )
          }

          const isActive = page === currentPage

          return (
            <PaginationItem key={page}>
              <Button
                variant='ghost'
                onClick={() => onPageChange(page)}
                disabled={disabled}
                className={cn(
                  isActive && 'bg-accent text-accent-foreground font-semibold'
                )}>
                {page}
              </Button>
            </PaginationItem>
          )
        })}

        {/* Próxima */}
        <PaginationItem>
          <Button
            variant='ghost'
            onClick={() => onPageChange(currentPage + 1)}
            disabled={disabled || currentPage === totalPages}>
            {'>'}
          </Button>
        </PaginationItem>
      </PaginationContent>
    </PaginationContainer>
  )
}
