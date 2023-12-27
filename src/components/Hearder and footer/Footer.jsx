import { FaInstagram, FaFacebook, FaTwitter, FaTiktok } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png'
const Footer = () => {
  return (
    <footer className='py-20 mt-20 bg-black/90 text-white'>
      <div className='w-[90vw] mx-auto  '>
        <div className='grid md:grid-cols-3 md:text-left text-center gap-y-16 gap-x-28'>
          <div className='text-left'>
            <div className='mx-auto'>
              <button className='text-3xl font-bold  '>
                <NavLink
                  className='hover:text-white flex items-center gap-1'
                  to='/'
                >
                  <h1 className='font-bold uppercase border p-1 text-white text-xl'>
                    <span className='text-purple-700'>Real</span>Store
                  </h1>
                </NavLink>
              </button>
              <p className='pt-4 text-gray-500 '>
                &copy; Real Store. All Rights Reserved 2023.
              </p>
            </div>
            <div className='pt-14'>
              <ul className='text-xl text-gray-400'>
                <li>
                  Phone No:{' '}
                  <span className='text-gray-500 md:inline block'>
                    {' '}
                    (123) 456-7890
                  </span>
                </li>
                <li>
                  Email:{' '}
                  <span className='text-gray-500 md:inline block'>
                    info@realstore.com
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className='flex items-start justify-between'>
            <div>
              <h1 className=' pb-7  text-2xl  font-bold '>Pages</h1>
              <ul className='space-y-4 text-gray-500 text-xl font-semibold capitalize'>
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
            <div>
              <h1 className=' pb-7 text-2xl  font-bold '>Legal</h1>
              <ul className='text-xl space-y-4 font-semibold capitalize text-gray-500'>
                <li>
                  <NavLink className={`hover:text-white`} to='/FAQ'>
                    FAQ
                  </NavLink>
                </li>{' '}
                <li>
                  <NavLink className={`hover:text-white`} to='/privacy-policy'>
                    Privacy Policy
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={`hover:text-white`}
                    to='/terms-conditions'
                  >
                    Teams & Conditions
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div>
              <h1 className='  text-2xl  font-bold '>Follow Us </h1>
              <div className='pt-7'>
                <ul className='text-3xl flex text-gray-500 items-center gap-4'>
                  <li>
                    <button>
                      <a
                        className='flex gap-4 hover:text-white items-center'
                        href='https://www.facebook.com/'
                      >
                        <FaFacebook />
                      </a>
                    </button>
                  </li>
                  <li>
                    <button>
                      <a
                        className='flex gap-4 hover:text-white items-center'
                        href='https://www.twitter.com/'
                      >
                        <FaTwitter />
                      </a>
                    </button>
                  </li>
                  <li>
                    <button>
                      <a
                        className='flex gap-4 hover:text-white items-center'
                        href='https://www.instagram.com/'
                      >
                        <FaInstagram />
                      </a>
                    </button>
                  </li>{' '}
                  <li>
                    <button>
                      <a
                        className='flex gap-4 hover:text-white items-center'
                        href='https://www.tiktok.com/'
                      >
                        <FaTiktok />
                      </a>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className='rounded-2xl mt-7 w-full max-h-full text-center p-4 bg-white'>
              <h1 className='text-lg text-purple-600 font-bold  '>
                Subscribe to our Newsletter
              </h1>
              <div>
                <input
                  type='text'
                  placeholder='123@email.com'
                  className='bg-gray-200 my-4 rounded-3xl p-4 outline-purple-500 w-full'
                />
                <button
                  type='submit'
                  className='w-full  text-white bg-purple-500 hover:bg-purple-700 text-center rounded-3xl p-3'
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
