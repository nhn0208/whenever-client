import { SignIn } from '@clerk/nextjs'

const SignInPage = () => {
  return (
    <div className="flex justify-center w-full">
      <SignIn />
    </div>
  )
}

export default SignInPage