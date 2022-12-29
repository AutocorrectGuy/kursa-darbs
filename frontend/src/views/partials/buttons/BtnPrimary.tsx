import React, { useState } from 'react'
import { btnDesign, chooseBtnDesign } from './BtnPrimary.helpers'

type Props = {
  children: JSX.Element | string
  designType: 'primary' | 'disabled'
  type: 'button' | 'submit'
}

const BtnPrimary = ({ children, designType, type }: Props) => {
  const [design,] = useState<btnDesign>(chooseBtnDesign(designType));

  return (
    <div className={`${design.border} border-b-8 rounded-lg`}>
      <button type={type} className={`${design.body} w-full text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center`}>
        {children}
      </button>
    </div>
  )
}

export default BtnPrimary