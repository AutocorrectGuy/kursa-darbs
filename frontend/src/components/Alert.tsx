import { faClose, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState, useEffect } from 'react';


export type alertType = 'success' | 'info' | 'error'
type AlertPropsType = {
  typeState: [alertType, React.Dispatch<React.SetStateAction<alertType>>]
  textState: [string | null, React.Dispatch<React.SetStateAction<string | null>>]
}

const Alert: React.FC<AlertPropsType> = ({ typeState, textState }) => {

  const [show, setShow] = useState<boolean>(false)
  const [type,] = typeState
  const [text, setText] = textState

  useEffect(() => {
    text && !show && setShow(true)
  }, [text])

  type stylesType = {
    container: string
    iconAndText: string
    closeButton: string
  }

  const styles: stylesType = {
    container: '',
    iconAndText: '',
    closeButton: ''
  }

  switch (type) {
    case 'success':
      styles.container = 'bg-emerald-200'
      styles.iconAndText = 'text-emerald-800'
      styles.closeButton = 'bg-emerald-200 text-emerald-600 hover:bg-emerald-300 focus:ring-blue-400'
      break;
    case 'info':
      styles.container = 'bg-blue-200'
      styles.iconAndText = 'text-blue-800'
      styles.closeButton = 'bg-blue-200 text-blue-600 hover:bg-blue-300 focus:ring-blue-400'
      break;
    case 'error':
      styles.container = 'bg-red-200'
      styles.iconAndText = 'text-red-800'
      styles.closeButton = 'bg-red-200 text-red-600 hover:bg-red-300 focus:ring-red-400'

  }

  const onClose = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    setText(null)
    setShow(false)
  }

  return show ? (
    <div id='alert-1' className={`${styles.container} flex p-4 mb-4 rounded-lg`}>
      <FontAwesomeIcon icon={faInfoCircle} className={`${styles.iconAndText} flex-shrink-0 w-5 h-5`} />
      <div className={`${styles.iconAndText} ml-3 text-sm font-medium break-all`}>
        {text}
      </div>
      <button onClick={(e) => onClose(e)}
        type='button'
        className={`${styles.closeButton} ml-auto -mx-1.5 -my-1.5 rounded-lg focus:ring-2 p-1.5 inline-flex h-8 w-8`}>
        <FontAwesomeIcon icon={faClose} className='w-5 h-5' />
      </button>
    </div>
  ) : <></>
}

export default Alert