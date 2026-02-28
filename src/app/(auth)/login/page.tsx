import type { Metadata } from 'next'

import { LoginForm } from '@/components/pages/(auth)/login/login-form'

export const metadata: Metadata = {
  title: 'Entrar',
}

export default function Loginpage() {
  return (
    <>
      <LoginForm />
    </>
  )
}
