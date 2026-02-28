'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { BsPerson } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'

import {
  type RegisterFormData,
  registerSchema,
} from '@/app/schemas/(auth)/register'
import { FormInput } from '@/components/form-input'
import { FormSubmitButton } from '@/components/form-submit-button'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export function RegisterForm() {
  // hooks
  const {
    control,
    formState: { isSubmitting },
    handleSubmit,
  } = useForm<RegisterFormData>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    resolver: zodResolver(registerSchema),
  })
  const { replace } = useRouter()

  // handlers
  async function onSubmit(data: RegisterFormData) {
    console.log({ data })
    await new Promise((resolveOuter) => {
      resolveOuter(
        new Promise((resolveInner) => {
          setTimeout(resolveInner, 2000)
        })
      )
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className='text-2xl'>Crie sua conta</CardTitle>
        <CardDescription>
          Preencha os dados abaixo para criar sua conta e começar a utilizar a
          plataforma.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset disabled={isSubmitting} className='space-y-6'>
            {/* NAME */}
            <FormInput
              control={control}
              name='name'
              label='Nome'
              iconLeft={BsPerson}
              placeholder='Cristian Giehl'
              description='Seu nome completo'
            />

            {/* EMAIL */}
            <FormInput
              control={control}
              name='email'
              label='Email'
              placeholder='cristiangiehl@gmail.com'
              iconLeft={MdEmail}
              description='E-mail corporativo'
            />

            {/* PASSWORD */}
            <FormInput
              control={control}
              name='password'
              label='Senha'
              type='password'
              placeholder='******'
            />
            {/* CONFIRM PASSWORD */}
            <FormInput
              control={control}
              name='confirmPassword'
              label='Confirme sua senha'
              type='password'
              placeholder='******'
            />

            <FormSubmitButton
              text='Entrar'
              submittingText='Entrando...'
              isSubmitting={isSubmitting}
              className='w-full'
            />
          </fieldset>
        </form>

        <div className='my-8 flex items-center gap-4'>
          <div className='bg-border h-px flex-1' />
          <span className='text-muted-foreground text-xs tracking-wider uppercase'>
            ou
          </span>
          <div className='bg-border h-px flex-1' />
        </div>

        {/* Login */}
        <div className='flex w-full items-center justify-center'>
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
