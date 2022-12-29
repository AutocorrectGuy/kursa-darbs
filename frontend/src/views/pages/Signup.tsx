import React, { useState } from 'react'
import AuthInputField, { AuthInputFieldType } from '../../components/AuthInputField'
import { Link } from 'react-router-dom'
import BtnPrimary from '../partials/buttons/BtnPrimary'
import Alert, { alertType } from '../../components/Alert'
import axiosClient from '../../services/axios/axiosConfig'


const fields: AuthInputFieldType[] = [
  { labelValue: 'E-pasts', inputType: 'email', name: 'email', placeholder: 'Ievadi savu e-pastu', required: false },
  { labelValue: 'Lietotājvārds', inputType: 'name', name: 'text', placeholder: 'Ievadi savu lietotājvārdu', required: false },
  { labelValue: 'Parole', inputType: 'password', name: 'password', placeholder: 'Ievadi paroli', required: false },
  { labelValue: 'Parole vēlreiz', inputType: 'password', name: 'reenterPassword', placeholder: 'Atkārtojiet paroli', required: false },
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
    delete Object.assign(payload, { ['reenter_password']: payload['reenterPassword'] })['reenterPassword']
    console.log(payload)

    e.preventDefault()
    axiosClient.get('/api/test', payload)
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
    <section className='auth-page'>
      <div className='auth-form-container'>
        <h1 className='auth-form-h1'>
          Izveidot jaunu lietotāju
        </h1>
        <form className='auth-form' onSubmit={(e) => onSubmit(e)} >
          <Alert typeState={[alertType, setAlertType]} textState={[alertText, setAlertText]} />
          {renderFields(fields)}
          <BtnPrimary designType='primary' type='submit'>
            Izveidot lietotāju
          </BtnPrimary>
          <p className='auth-footer'>
            Jau esi reģistrējies?&nbsp;
            <Link to='/signin' className='auth-footer-a'>
              Ienāc!
            </Link>
          </p>
        </form>
      </div>
    </section >
  )
}

export default Signup