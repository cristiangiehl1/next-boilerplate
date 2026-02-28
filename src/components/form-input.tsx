'use client'

import Link from 'next/link'
import { type InputHTMLAttributes, useId, useState } from 'react'
import { Control, Controller, FieldValues, Path } from 'react-hook-form'
import { IconType } from 'react-icons'
import { FiEye, FiEyeOff, FiLock } from 'react-icons/fi'

import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

import { Button } from './ui/button'
import { Label } from './ui/label'

interface FormInputProps<
  T extends FieldValues,
> extends InputHTMLAttributes<HTMLInputElement> {
  name: Path<T>
  control: Control<T>
  label: string
  description?: string
  iconLeft?: IconType
  iconRight?: IconType
  iconSize?: number
  containerClassName?: string
  showForgotPassword?: boolean
}

export function FormInput<T extends FieldValues>({
  name,
  control,
  label,
  description,
  iconLeft,
  iconRight: IconRight,
  iconSize = 18,
  className,
  containerClassName,
  disabled,
  showForgotPassword,
  type = 'text',
  ...props
}: FormInputProps<T>) {
  const inputId = useId()
  const descriptionId = `${inputId}-description`
  const errorId = `${inputId}-error`

  const isPassword = type === 'password'
  const [showPassword, setShowPassword] = useState(false)

  const computedType = isPassword && showPassword ? 'text' : type

  const IconLeft = isPassword ? FiLock : iconLeft

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState, formState }) => {
        const hasError = !!fieldState.error

        const describedBy = hasError
          ? errorId
          : description
            ? descriptionId
            : undefined

        return (
          <div className={cn('space-y-1', containerClassName)}>
            <div className='mb-1 flex items-center justify-between'>
              <Label
                htmlFor={inputId}
                className={cn(
                  'inline-block',
                  hasError && 'text-destructive font-semibold'
                )}>
                {label}
              </Label>

              {showForgotPassword && (
                <Link
                  href='/forgot-password'
                  className='text-primary focus-visible:ring-ring rounded-sm text-sm font-medium underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none'>
                  Esqueci minha senha
                </Link>
              )}
            </div>

            <div className='relative'>
              {/* Icon Left (decorativo) */}
              {IconLeft && (
                <IconLeft
                  size={iconSize}
                  aria-hidden='true'
                  focusable='false'
                  className='text-muted-foreground absolute top-1/2 left-3 -translate-y-1/2'
                />
              )}

              <Input
                id={inputId}
                {...field}
                {...props}
                disabled={formState.isSubmitting || disabled}
                aria-invalid={hasError}
                aria-describedby={describedBy}
                type={computedType}
                className={cn(
                  IconLeft && 'pl-10',
                  IconRight && 'pr-10',
                  hasError &&
                    'border-destructive focus-visible:ring-destructive',
                  className
                )}
              />

              {/* Right Icon */}
              {isPassword ? (
                <Button
                  type='button'
                  variant={'ghost'}
                  size={'icon-sm'}
                  onClick={() => setShowPassword((prev) => !prev)}
                  aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
                  aria-pressed={showPassword}
                  className='text-muted-foreground hover:text-foreground focus-visible:ring-ring absolute top-1/2 right-3 -translate-y-1/2 rounded-md p-1 transition-colors duration-150 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none'>
                  {showPassword ? (
                    <FiEyeOff size={iconSize} />
                  ) : (
                    <FiEye size={iconSize} />
                  )}
                </Button>
              ) : (
                IconRight && (
                  <IconRight
                    size={iconSize}
                    aria-hidden='true'
                    focusable='false'
                    className='text-muted-foreground absolute top-1/2 right-3 -translate-y-1/2'
                  />
                )
              )}
            </div>

            {/* Error */}
            {hasError && (
              <p
                id={errorId}
                role='alert'
                className='text-destructive text-xs font-semibold'>
                {fieldState.error?.message}
              </p>
            )}

            {/* Description */}
            {!hasError && description && (
              <p id={descriptionId} className='text-muted-foreground text-xs'>
                {description}
              </p>
            )}
          </div>
        )
      }}
    />
  )
}
