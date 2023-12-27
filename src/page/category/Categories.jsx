import { FaList, FaTimesCircle } from 'react-icons/fa'
import { BsFillGridFill } from 'react-icons/bs'
import ProductList from '../ProductList/ProductList'
import { useGlobalContext } from '../../content/Content'
import FilterData from '../filterData/FilterData'
import Sort from './Sort'
import Price from './Price'
import { useState } from 'react'
const Categories = () => {
  const { setGrid, filteredProducts, setText, loading } = useGlobalContext()
  const [show,setShow] = useState(false);
  return (
    <div className='md:w-[80vw]  w-[90vw] mx-auto'>
      <div
        className={`grid gap-x-5 relative  py-10 items-start ${
          show
            ? 'lg:grid-cols-[0.7fr,3fr] duration-500'
            : 'lg:grid-cols-[0,1fr] duration-500'
        } `}
      >
        <aside
          className={
            show
              ? ' space-y-4 hidden lg:block lg:sticky top-0 transition-transform transform translate-x-0 duration-500  w-full '
              : 'transition-transform hidden lg:block transform lg:-translate-x-80 duration-500'
          }
        >
          <h1 className='text-lg text-center capitalize font-semibold'>
            Available products: {filteredProducts.length}
          </h1>
          <hr />
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              type='text'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-purple-500 focus:border-purple-500 pl-2 py-1  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500'
              placeholder='Search branch name...'
              name='text'
              onChange={(e) => setText(e.target.value)}
            />
          </form>
          <FilterData />

          <Price />
        </aside>
        <section className='w-full'>
          <div className='flex justify-between items-center'>
            <div className='flex gap-1 text-base items-center'>
              <button
                onClick={() => setGrid(true)}
                className='bg-purple-600 text-white rounded p-1 hover:scale-105 duration-500'
              >
                <BsFillGridFill />
              </button>{' '}
              <button
                onClick={() => setGrid(false)}
                className='bg-purple-600 text-white rounded p-1 hover:scale-105 duration-500'
              >
                <FaList />
              </button>
            </div>
            <div className='flex items-center gap-10'>
              <button
                onClick={() => setShow(!show)}
                className='capitalize flex gap-2 items-center font-semibold '
              >
                {show ? 'hide' : 'show'} filters
                <svg
                  aria-hidden='true'
                  class='icon-filter-ds'
                  focusable='false'
                  viewBox='0 0 24 24'
                  role='img'
                  width='24px'
                  height='24px'
                  fill='none'
                >
                  <path
                    stroke='currentColor'
                    stroke-width='1.5'
                    d='M21 8.25H10m-5.25 0H3'
                  ></path>
                  <path
                    stroke='currentColor'
                    stroke-width='1.5'
                    d='M7.5 6v0a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z'
                    clip-rule='evenodd'
                  ></path>
                  <path
                    stroke='currentColor'
                    stroke-width='1.5'
                    d='M3 15.75h10.75m5 0H21'
                  ></path>
                  <path
                    stroke='currentColor'
                    stroke-width='1.5'
                    d='M16.5 13.5v0a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z'
                    clip-rule='evenodd'
                  ></path>
                </svg>
              </button>
              <div className='hidden lg:block'>
                <div className=' capitalize px-2  rounded flex items-center'>
                  <h1 className='capitalize font-semibold '>sort by:</h1>
                  <Sort />
                </div>
              </div>{' '}
            </div>
          </div>

          <div className='pt-10 w-full grid place-items-center'>
            {loading && <p>Loading...</p>}
            <ProductList />
          </div>
        </section>
      </div>
      <section
        className={
          show
            ? 'lg:hidden w-screen absolute  fixed top-0 left-0 h-screen bg-gray-50 text-black'
            : 'hidden'
        }
      >
        <button
          onClick={() => setShow(false)}
          className='absolute  top-10 right-10'
        >
          <FaTimesCircle className='text-3xl  ' />
        </button>
        <Sort />
      </section>
    </div>
  )
}

export default Categories
