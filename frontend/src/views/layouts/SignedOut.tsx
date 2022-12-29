import { useState } from 'react'
import { Outlet } from 'react-router'
import SideNav from '../partials/SideNav'
import useStateContext from '../../contexts/StateContextProvider'
import { capitalizeFirstLetter } from './SignedOut.helpers'
import BtnPrimary from '../partials/buttons/BtnPrimary'

const SignedOut = (): JSX.Element => {

  const { user } = useStateContext()
  const [displayUserName,] = useState<string>(user ? capitalizeFirstLetter(user) : 'Unnamed')

  return (
    <div className='flex overflow-auto text-white bg-gradient-to-b from-brown-700 to-brown-800'>
      <SideNav />
      <div className='w-full lg:max-w-5xl mx-auto'>
        <div className='absolute flex justify-end  mx-auto top-0 right-0 p-4'>
          <BtnPrimary designType={user ? 'primary' : 'disabled'} type='button'>
            {displayUserName}
          </BtnPrimary>
        </div>
        <div className='flex min-h-screen pt-20 pb-4'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default SignedOut