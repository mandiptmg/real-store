import img from '../../../assets/brand/nike.png'
import img1 from '../../../assets/brand/adidas.png'
import img2 from '../../../assets/brand/img.png'
import img3 from '../../../assets/brand/pngegg.png'
import img4 from '../../../assets/brand/1.png'
import img5 from '../../../assets/brand/2.png'
import img6 from '../../../assets/brand/3.png'
import img7 from '../../../assets/brand/4.png'
import img8 from '../../../assets/brand/5.png'

import Marquee from 'react-fast-marquee'

const brand = [img, img1, img2, img3, img4, img5, img6, img7, img8]

const Brand = () => {
  return (
    <div className='w-[90vw] mt-20 mx-auto md:container'>
      <div className='bg-gray-200 pb-10 rounded-3xl px-7'>
        <h1 className='py-10 text-center text-gray-500 text-lg font-bold'>
          Trusted By 1000+ Companies
        </h1>
        <Marquee>
          <div className='flex items-center gap-16 '>
            {brand.map((img) => (
              <img
                src={img}
                className='w-[70px] mx-7 aspect-square  object-contain'
              />
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  )
}

export default Brand
