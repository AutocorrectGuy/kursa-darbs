import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChess, faDashboard, faHome, faNewspaper, faSignIn, IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { useLocation } from 'react-router'

type navButtonProps = {
  href: string
  icon: IconDefinition
  text: string
}

const navButtons: navButtonProps[] = [
  { href: '/', icon: faHome, text: 'Home' },
  { href: '/dashboard', icon: faDashboard, text: 'Dashboard' },
  { href: '/signin', icon: faSignIn, text: 'Sign in' },
  { href: '/signup', icon: faNewspaper, text: 'Sign up' },
  { href: '/signout', icon: faNewspaper, text: 'Sign out' }
]

const SideNav = () => {
  const location = useLocation()

  return (
    <aside className='sticky top-0 h-screen w-36 bg-brown-800' aria-label='Sidebar'>
      <div className='overflow-y-auto py-4 rounded'>
        <Link to='/' className='flex justify-center items-center mb-5'>
          <span className='self-center text-md font-semibold whitespace-nowrap dark:text-white'>
            Laravel tests
          </span>
          <FontAwesomeIcon icon={faChess} className='ml-2 text-chess-green-700 w-5 h-5'/>
        </Link>
        <div>
          {navButtons.map(({ href, icon, text }: navButtonProps) => (
            <Link to={href} key={`navbtn-${href}`}
              className={`${location.pathname === href
                ? 'bg-brown-900'
                : 'bg-brown-800'} flex items-center hover:bg-brown-900 px-4 py-3`}>
              <span>
                <FontAwesomeIcon icon={icon} />
              </span>
              <span className='flex-1 ml-3 whitespace-nowrap font-bold'>{text}</span>
            </Link>))
          }
        </div>
      </div>
    </aside>
  )
}

export default SideNav