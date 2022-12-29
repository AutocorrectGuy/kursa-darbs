import React from 'react'

export type AuthInputFieldType = {
  labelValue: string
  inputType: string
  name: string
  placeholder: string
  required: boolean
}

const AuthInputField = ({ labelValue, inputType, name, placeholder, required }: AuthInputFieldType) => {
  return (
    <div>
      <label className='auth-input-label'>
        {labelValue}
      </label>
      <input type={inputType} name={name} className='auth-input-field'
        placeholder={placeholder}
        required={required}
      />
    </div>
  )
}

export default AuthInputField