import { useGlobalContext } from '../../content/Content'
import { useState, useEffect } from 'react'
import Product from './Product/Product'
import Hero from './Hero'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/free-mode'

import { FreeMode, Navigation, Mousewheel, Keyboard } from 'swiper/modules'
import Brand from './Brand/Brand'
import { NavLink } from 'react-router-dom'
const Home = () => {
  const { products } = useGlobalContext()
  const [show, setShow] = useState('')
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 980) {
        setShow('3')
      } else if (window.innerWidth >= 700) {
        setShow('2')
      } else {
        setShow('1')
      }
    }

    // Initial check
    handleResize()

    // Add event listener
    window.addEventListener('resize', handleResize)

    // Cleanup function to remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  return (
    <div>
      <Hero />
      <div>
        <div className='py-20 w-[90vw] mx-auto md:container'>
          <h1 className='text-3xl md:text-4xl font-extrabold text-purple-600 font-[Poppins] text-center capitalize'>
            our products
          </h1>
          <div className='text-right'>
            <NavLink to='/products'>
              <button className='shadow border  '>
                <h1 className='capitalize font-semibold px-3 hover:bg-purple-700 py-1 text-white  bg-purple-600'>
                  see more
                </h1>
              </button>
            </NavLink>
          </div>
        </div>
        <Swiper
          className='md:container w-[90vw] mx-auto '
          slidesPerView={show}
          spaceBetween={30}
          cssMode={true}
          navigation={true}
          mousewheel={true}
          keyboard={true}
          freeMode={true}
          modules={[Navigation, FreeMode, Mousewheel, Keyboard]}
        >
          {products.slice(0, 10).map((product) => {
            return (
              <SwiperSlide className='grid place-items-center' key={product.id}>
                <Product product={product} />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
      <div>
        <Brand />
      </div>
    </div>
  )
}

export default Home
