'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { MdEmail } from 'react-icons/md'

import { type LoginFormData, loginSchema } from '@/app/schemas/(auth)/login'
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

export function LoginForm() {
  // hooks
  const {
    control,
    formState: { isSubmitting },
    handleSubmit,
  } = useForm<LoginFormData>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(loginSchema),
  })
  const { replace } = useRouter()

  // handlers
  async function onSubmit(data: LoginFormData) {
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
        <CardTitle className='text-2xl'>Entrar</CardTitle>
        <CardDescription>Faça login para acessar sua conta.</CardDescription>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset disabled={isSubmitting} className='space-y-6'>
            {/* EMAIL */}
            <FormInput
              control={control}
              name='email'
              label='Email'
              iconLeft={MdEmail}
              description='E-mail corporativo'
            />
            {/* PASSWORD */}
            <FormInput
              control={control}
              name='password'
              label='Senha'
              type='password'
              showForgotPassword={true}
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

        {/* Registrar */}
        <div className='flex w-full items-center justify-center'>
          <p className='text-muted-foreground inline text-center text-sm'>
            Ainda não tem uma conta?
          </p>
          <Button
            asChild
            variant={'link'}
            className='ml-1 inline h-auto gap-0 p-0'>
            <Link href='/register'>Criar conta</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
