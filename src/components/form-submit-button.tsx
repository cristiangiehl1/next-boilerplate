import type { VariantProps } from 'class-variance-authority'
import { ComponentProps } from 'react'
import { LuLoader } from 'react-icons/lu'

import { cn } from '@/lib/utils'

import { Button, type buttonVariants } from './ui/button'

interface FormSubmitButtonProps
  extends ComponentProps<'button'>, VariantProps<typeof buttonVariants> {
  text: string
  submittingText: string
  isSubmitting: boolean
}

export function FormSubmitButton({
  text,
  submittingText,
  isSubmitting,
  className,
  variant,
  size,
  disabled,
  ...props
}: FormSubmitButtonProps) {
  return (
    <Button
      type='submit'
      variant={variant}
      size={size}
      disabled={isSubmitting || disabled}
      aria-disabled={isSubmitting || disabled}
      aria-busy={isSubmitting}
      className={cn('relative', className)}
      {...props}>
      {isSubmitting && (
        <LuLoader className='mr-2 size-4 animate-spin' aria-hidden='true' />
      )}

      <span>{isSubmitting ? submittingText : text}</span>
    </Button>
  )
}
