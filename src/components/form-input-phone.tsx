'use client'

import { type InputHTMLAttributes, useId } from 'react'
import { Control, Controller, FieldValues, Path } from 'react-hook-form'

import { cn } from '@/lib/utils'

import { Label } from './ui/label'
import { type CountrySelectProps, PhoneInput } from './ui/phone-input'

interface FormInputProps<
  T extends FieldValues,
> extends InputHTMLAttributes<HTMLInputElement> {
  name: Path<T>
  control: Control<T>
  label: string
  description?: string
  containerClassName?: string
  countrySelectProps?: Partial<CountrySelectProps>
}

export function FormInputPhone<T extends FieldValues>({
  name,
  control,
  label,
  description,
  className,
  containerClassName,
  disabled,
  countrySelectProps,
  ...props
}: FormInputProps<T>) {
  const inputId = useId()
  const descriptionId = `${inputId}-description`
  const errorId = `${inputId}-error`

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
            <Label
              htmlFor={inputId}
              className={cn(
                'inline-block',
                hasError && 'text-destructive font-semibold'
              )}>
              {label}
            </Label>

            <PhoneInput
              id={inputId}
              disabled={formState.isSubmitting || disabled}
              aria-invalid={hasError}
              aria-describedby={describedBy}
              defaultCountry='BR'
              countrySelectProps={{ ...countrySelectProps, hasError }}
              className={cn(
                hasError && 'border-destructive focus-visible:ring-destructive',
                className
              )}
              {...props}
              {...field}
            />

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
