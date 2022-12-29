import { AuthInputFieldType } from '../../components/AuthInputField'
import { renderFields } from './Signup'
import { Link } from 'react-router-dom'
import BtnPrimary from '../partials/buttons/BtnPrimary'

const fields: AuthInputFieldType[] = [
  { labelValue: 'E-pasts', inputType: 'email', name: 'email', placeholder: 'Ievadi lietotājvārdu', required: false },
  { labelValue: 'Parole', inputType: 'password', name: 'password', placeholder: 'Ievadi paroli', required: false },
]

const Signin = () => {
  return (
    <section className='auth-page'>
      <div className='auth-form-container'>
        <h1 className='auth-form-h1'>
          Pieslēgties
        </h1>
        <form className='auth-form' action='#'>
          {renderFields(fields)}
          <BtnPrimary designType='primary' type='button'>
            Pieslēgties
          </BtnPrimary>
          <p className='auth-footer'>
            Vēl neesi reģistrējies?&nbsp;
            <Link to='/signup' className='auth-footer-a'>
              Reģistrēties
            </Link>
          </p>
        </form>
      </div>
    </section>
  )
}

export default Signin