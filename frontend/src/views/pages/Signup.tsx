import React, { useState } from 'react'
import AuthInputField, { AuthInputFieldType } from '../../components/AuthInputField'
import { Link } from 'react-router-dom'
import BtnPrimary from '../partials/buttons/BtnPrimary'
import Alert, { alertType } from '../../components/Alert'
import axiosClient from '../../services/axios/axiosConfig'


const fields: AuthInputFieldType[] = [
  { labelValue: 'Email', inputType: 'email', name: 'email', placeholder: 'Input your email', required: false },
  { labelValue: 'Name', inputType: 'name', name: 'text', placeholder: 'Input your name', required: false },
  { labelValue: 'Password', inputType: 'password', name: 'password', placeholder: 'Input your password', required: false },
  { labelValue: 'Reenter password', inputType: 'password', name: 'reenterPassword', placeholder: 'Reenter your password', required: false },
]

export const renderFields = (fields: AuthInputFieldType[]): JSX.Element[] => fields
  .map((fieldProps: AuthInputFieldType, i: number) => (
    <AuthInputField {...fieldProps} key={`auth-input-${i}`} />
  ))

const Signup = () => {
  const [alertType, setAlertType] = useState<alertType>('info')
  const [alertText, setAlertText] = useState<string | null>(null)

  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    
    const payload = Object.fromEntries(new FormData(e.currentTarget))

    // rename key `reenterPassword` to `reenter_password`
    delete Object.assign(payload, {['reenter_password']: payload['reenterPassword']})['reenterPassword']
    console.log(payload)

    e.preventDefault()
    axiosClient.post('/api/signup', payload)
      .then(res => {
        if (!res.data)
          return null

        setAlertType('info')
        setAlertText(JSON.stringify(res.data))
      })
      .catch(err => {
        setAlertType('error')
        setAlertText(Object.keys(err).length
          ? JSON.stringify(err)
          : "Problems while connecting to api")
      })
  }

  return (
    <section className='my-auto sm:max-w-md w-full flex flex-col items-center px-6 mx-auto lg:py-0 p-4'>
      <div className='w-full rounded-lg md:mt-0 xl:p-0 shadow-2xl border border-brown-600 bg-brown-700'>
        <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
          <h1 className='text-xl font-bold leading-tight tracking-tight md:text-2xl text-center'>
            Create an account
          </h1>
          <form className='auth-form' onSubmit={(e) => onSubmit(e)} >
            <Alert typeState={[alertType, setAlertType]} textState={[alertText, setAlertText]} />
            {renderFields(fields)}
            <BtnPrimary designType='primary' type='submit'>
              Create an account
            </BtnPrimary>
            <p className='text-sm font-light text-brown-400'>
              Already have an account?&nbsp;
              <Link to='/signin' className='font-medium hover:underline text-chess-green-medium'>
                Login here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section >
  )
}

export default Signup