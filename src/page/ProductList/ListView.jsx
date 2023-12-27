import { useGlobalContext } from "../../content/Content"
import { NavLink } from "react-router-dom"

const ListView = () => {
 const { filteredProducts } = useGlobalContext()
  return (
    <div className='grid gap-y-3'>
      {filteredProducts.map((product) => {
        const { id, description, image, title, price } = product
        return (
          <article
            className='rounded bg-white hover:scale-105 duration-500 border p-2'
            key={id}
          >
            <div className='grid grid-cols-[1fr,3fr] gap-x-10 items-start'>
              <div className='relative'>
                <img
                  src={image}
                  alt={title}
                  className='object-contain hover:rotate-6 duration-500 aspect-square w-[150px]'
                />
                <h1 className='w-10 h-10 rounded-full bg-orange-600 grid place-items-center text-white font-bold absolute -left-2 top-2'>
                  Sale!
                </h1>
              </div>
              <div className='space-y-2'>
                <h4 className='font-bold text-lg'>{title}</h4>
                <h1>${price}</h1>
                <p>{description.slice(0, 150)}...</p>
                <NavLink to={`/singleproduct/${id}`}>
                  <button className='capitalize rounded my-2 hover:text-white hover:bg-purple-600 text-purple-600 font-semibold border border-purple-600 p-1 font-'>
                    read more
                  </button>
                </NavLink>
              </div>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default ListView