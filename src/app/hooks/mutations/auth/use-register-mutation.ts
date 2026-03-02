// import { useMutation, type UseMutationOptions } from '@tanstack/react-query'
// import { useRouter } from 'next/navigation'
// import { toast } from 'sonner'

// type SignInWithEmailMutationOptions = Omit<
//   UseMutationOptions<
//     ApiMutationResponse,
//     AxiosError<BasicError>,
//     SignInWithEmailFormData
//     // TContext      // tipo do contexto opcional para rollback otimista
//   >,
//   'mutationFn'
// >

// export function useSignInWithEmailMutation(
//   config?: SignInWithEmailMutationOptions
// ) {
//   const { replace, push } = useRouter()

//   return useMutation({
//     mutationFn: signInWithEmail,
//     onSuccess: async ({ message, description }) => {
//       toast.success(message, {
//         description,
//       })

//       // replace('/account/profile')
//     },
//     onError: (err) => {
//       let soonerAction = null

//       if (err.response?.data.name === 'ValidationError') {
//         soonerAction = {
//           label: 'Resetar senha',
//           onClick: () => push('/forgot-password'),
//         }
//       }

//       toast.error(err.response?.data.message, {
//         description: err.response?.data.action,
//         action: soonerAction,
//       })
//     },
//     ...config,
//   })
// }
