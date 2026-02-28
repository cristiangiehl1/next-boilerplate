import type { Metadata } from 'next'

import { ForgotPasswordForm } from '@/components/pages/(auth)/forgot-password/forgot-password-form'

export const metadata: Metadata = {
  title: 'Esqueci a Senha',
}

export default function ForgotPasswordPage() {
  return (
    <>
      <ForgotPasswordForm />
    </>
  )
}
