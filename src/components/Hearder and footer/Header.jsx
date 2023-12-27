import logo from '../../assets/logo.png'
import { NavLink } from 'react-router-dom'
import { MdOutlineLocalGroceryStore } from 'react-icons/md'
import { FaSearch } from 'react-icons/fa'
import { useGlobalContext } from '../../content/Content'
const Header = () => {
  const {isCount}=useGlobalContext()
  return (
    <div className='px-7 container mx-auto md:px-0'>
      <nav className='flex h-20 justify-between items-center'>
        <div>
          <NavLink className='flex items-center gap-1' to='/'>
            <h1 className='font-bold uppercase border p-1 text-gray-500 text-'>
              <span className='text-purple-700'>Real</span>Store
            </h1>
          </NavLink>
        </div>
        <div className='hidden md:block'>
          <ul className='flex text-gray-500 font-medium  capitalize items-center gap-4'>
            <li>
              <NavLink
                className='hover:text-purple-500'
                activeClassName='active'
                to='/products'
              >
                products
              </NavLink>
            </li>{' '}
            <li>
              <NavLink
                className='hover:text-purple-500'
                activeClassName='active'
                to='/winter'
              >
                winter sell
              </NavLink>
            </li>{' '}
            <li>
              <NavLink
                className='hover:text-purple-500'
                activeClassName='active'
                to='/offer'
              >
                offer
              </NavLink>
            </li>
          </ul>
        </div>
        <div className='flex text-purple-700 text-lg items-center gap-4'>
          <button>
            <FaSearch />
          </button>
          <div className='relative'>
            <button>
              <MdOutlineLocalGroceryStore className='text-xl' />
            </button>
            <h1 className='absolute text-xs -top-2 -right-1 bg-purple-600 grid place-items-center w-4 text-white rounded-full h-4'>
              {isCount}
            </h1>
          </div>
          <button>
            <h1 className='bg-purple-600 text-sm  rounded font-bold px-2 py-1 text-white'>
              login
            </h1>
          </button>
        </div>
      </nav>
    </div>
  )
}

export default Header
