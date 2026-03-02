'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FaPhone } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

import {
  forgotPasswordEmailSchema,
  type ForgotPasswordFormData,
  forgotPasswordPhoneSchema,
} from '@/app/schemas/(auth)/forgot-password'
import { FormInput } from '@/components/form-input'
import { FormInputPhone } from '@/components/form-input-phone'
import { FormSubmitButton } from '@/components/form-submit-button'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export function ForgotPasswordForm() {
  const [tab, setTab] = useState<'email' | 'phone'>('email')

  const currentSchema =
    tab === 'email' ? forgotPasswordEmailSchema : forgotPasswordPhoneSchema

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<ForgotPasswordFormData>({
    shouldUnregister: true,
    resolver: zodResolver(currentSchema),
    mode: 'onBlur',
    defaultValues: {
      email: '',
      phone: '',
    },
  })

  const handleTabChange = (value: string) => {
    setTab(value as 'email' | 'phone')
    reset()
  }

  async function onSubmit(data: ForgotPasswordFormData) {
    console.log({ tab, data })
    await new Promise((resolve) => setTimeout(resolve, 2000))
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className='text-2xl'>Recuperar senha</CardTitle>
        <CardDescription>
          Escolha como deseja receber as instruções para redefinir sua senha.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <Tabs
          defaultValue={tab}
          onValueChange={handleTabChange}
          className='w-full'>
          <TabsList className='mb-6 grid w-full grid-cols-2'>
            <TabsTrigger value='email'>
              <MdEmail className='mr-2 h-4 w-4' />
              E-mail
            </TabsTrigger>
            <TabsTrigger value='phone'>
              <FaPhone className='mr-2 h-4 w-4' />
              Celular
            </TabsTrigger>
          </TabsList>

          <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
            {/* EMAIL */}
            <TabsContent value='email'>
              <FormInput
                control={control}
                name='email'
                label='E-mail'
                iconLeft={MdEmail}
                description='Digite o e-mail vinculado à sua conta'
                placeholder='cristiangiehl@gmail.com'
              />
            </TabsContent>

            {/* PHONE */}
            <TabsContent value='phone'>
              <FormInputPhone
                control={control}
                countrySelectProps={{
                  disabled: true,
                }}
                name='phone'
                label='Celular'
                description='Digite o celular vinculado à sua conta'
              />
            </TabsContent>

            <FormSubmitButton
              text='Enviar link'
              submittingText='Enviando...'
              className='w-full'
              isSubmitting={isSubmitting}
            />
          </form>
        </Tabs>

        {/* Divider */}
        <div className='my-8 flex items-center gap-4'>
          <div className='bg-border h-px flex-1' />
          <span className='text-muted-foreground text-xs tracking-wider uppercase'>
            ou
          </span>
          <div className='bg-border h-px flex-1' />
        </div>

        {/* Registrar */}
        <div className='flex justify-center'>
          <p className='text-muted-foreground text-sm'>
            Ainda não tem uma conta?
          </p>
          <Button asChild variant='link' className='ml-1 h-auto p-0'>
            <Link href='/register'>Criar conta</Link>
          </Button>
        </div>

        {/* Login */}
        <div className='mt-4 flex w-full items-center justify-center'>
          <p className='text-muted-foreground inline text-center text-sm'>
            Ja possui uma conta?
          </p>
          <Button
            asChild
            variant={'link'}
            className='ml-1 inline h-auto gap-0 p-0'>
            <Link href='/login'>Entrar</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
