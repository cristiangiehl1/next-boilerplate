import type { Metadata } from 'next'

import { RegisterForm } from '@/components/pages/(auth)/register/register-form'

export const metadata: Metadata = {
  title: 'Criar Conta',
}

export default function RegisterPage() {
  return (
    <>
      <RegisterForm />
    </>
  )
}
