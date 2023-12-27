import { NavLink } from "react-router-dom"
import {useGlobalContext} from '../../content/Content'
import { FaMinus,FaPlus } from "react-icons/fa"
import Stars from '../../components/Home/Stars/Stars'
const SingleProduct = ({item}) => {
 const { count, setCount,setIsCount } = useGlobalContext()
 const {
   title,
   category,
   image,
   description,
   rating: { rate },
   price
 } = item
  return (
    <div className='mt-10 w-full'>
      <h1 className='capitalize text-xl'>
        <NavLink
          className='text-purple-600 font-semibold capitalize tracking-wide '
          to='/'
        >
          home
        </NavLink>
        /{category}
      </h1>
      <div className='md:grid p-10 mx-auto  md:w-[90%] grid-cols-[1.5fr,2fr] w-full mt-10 md:relative items-center gap-20 '>
        <div className='w-full h-full'>
          <img
            src={image}
            alt={title}
            className='w-full max-h-[80vh] object-contain h-auto aspect-square rounded-3xl bg-blend-color-burn'
          />
        </div>
        <div className='text-left space-y-4'>
          <h1 className='md:text-2xl text-lg font-medium'>{title}</h1>
          <h1 className='text-sm font-medium md:text-lg capitalize'>
            {category}
          </h1>
          <div className='text-right'>
            <Stars stars={rate} />
          </div>
          <div className='flex text-lg font-medium items-center gap-4'>
            <del className='text-gray-500'>${(price + 20).toFixed(2)}</del>
            <h1>${price}</h1>
          </div>
          <p>{description}</p>
          <div className='flex items-center gap-x-10'>
            <div className='flex text-2xl items-center'>
              <button  onClick={() =>{
               if(count<=1){
                count=1;
               }
                setCount(count - 1)
              }}  className='border py-2 px-2 '>
                <FaMinus
                 
                  className='text-base'
                />
              </button>
              <h1 className='px-3 font-medium bg-white border'>{count}</h1>
              <button
                onClick={() => {
                   if (count >= 5) {
                     count = 5
                   }
                   setCount(count + 1);
                }}
                className='border py-2 px-2'
              >
                <FaPlus className='text-base' />
              </button>
            </div>
            <div>
              <button onClick={()=>setIsCount(count)} className='border bg-purple-600 text-white py-2 uppercase font-bold px-3'>
                Add to card
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleProduct