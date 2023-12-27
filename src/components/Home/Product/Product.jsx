import { useState } from 'react'
import Stars from '../Stars/Stars'
import { NavLink } from 'react-router-dom'

const Product = ({ product }) => {
  const [opacity,setOpacity] = useState('opacity-0')
  return (
    <NavLink to={`/singleproduct/${product.id}`}>
      <article
        onMouseLeave={() => setOpacity('opacity-0')}
        onMouseEnter={() => setOpacity('opacity-100')}
        className='bg-white text-center hover:scale-105 duration-500 h-[450px] w-[287px] p-4 rounded-md shadow-xl'
      >
        <div className='relative'>
          <img
            width={250}
            height={450}
            alt={product.title}
            src={product.image}
            className='object-contain bg-blend-color-burn duration-500 hover:rotate-6  aspect-square'
          />
          <h1 className='w-10 h-10 rounded-full bg-orange-600 grid place-items-center text-white font-bold absolute -left-2 top-2'>
            Sale!
          </h1>
          <div
            className={`bg-blue-600/50 absolute ${opacity}  bottom-0 w-full duration-500   p-1 text-white `}
          >
            <h1 className='uppercase text-base'>quick view</h1>
          </div>
        </div>
        <div className='text-black/80 pt-4 space-y-2 text-sm font-semibold '>
          <h1 className='capitalize'>{product.category}</h1>
          <h1 className='min-h-[52px] font-bold'>{product.title}</h1>
          <div className='grid place-items-center'>
            <Stars stars={product.rating.rate} />
          </div>
          <div className='flex justify-center text-base font-semibold items-center gap-4'>
            <del className='text-purple-600'>
              ${(product.price + 20).toFixed(2)}
            </del>{' '}
            <h1>${product.price}</h1>
          </div>
          {/* <button className='w-full my-2 text-center'>
            <h1 className='text-lg capitalize hover:bg-purple-700 bg-purple-600 text-white py-2'>
              {' '}
              buy now
            </h1>
          </button> */}
        </div>
      </article>
    </NavLink>
  )
}

export default Product
