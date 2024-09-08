import AuthForm from '@/components/AuthForm'
import { getLoggedInUser } from '@/lib/actions/user.actions'
import React from 'react'

type Props = {}

const SignIn = async(props: Props) => {
  const user = await getLoggedInUser()
  console.log(user)
  return (

    <section className='flex-center size-full max-sm:px-6 '>
      <AuthForm type='sign-in' />
    </section>
  )
}

export default SignIn