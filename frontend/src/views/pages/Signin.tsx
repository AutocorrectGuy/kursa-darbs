import { AuthInputFieldType } from '../../components/AuthInputField'
import { renderFields } from './Signup'
import { Link } from 'react-router-dom'
import BtnPrimary from '../partials/buttons/BtnPrimary'

const fields: AuthInputFieldType[] = [
  { labelValue: 'Email', inputType: 'email', name: 'email', placeholder: 'Input your email', required: false },
  { labelValue: 'Password', inputType: 'password', name: 'password', placeholder: 'Input your password', required: false },
]

const Signin = () => {
  return (
    <section className='sm:max-w-md w-full flex min-w-[300px] mx-auto lg:py-0 my-auto p-4'>
      <div className='w-full rounded-lg md:mt-0 xl:p-0 shadow-2xl border border-brown-600 bg-brown-700'>
        <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
          <h1 className='text-xl font-bold leading-tight tracking-tight md:text-2xl text-center'>
            Login
          </h1>
          <form className='auth-form' action='#'>
            {renderFields(fields)}
            <BtnPrimary designType='primary' type='button'>
              Sign in
            </BtnPrimary>
            <p className='text-sm font-light text-brown-400'>
              Don't have an account?&nbsp;
              <Link to='/signup' className='font-medium hover:underline text-chess-green-medium'>
                Sign up here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Signin