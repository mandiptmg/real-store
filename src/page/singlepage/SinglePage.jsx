import { useGlobalContext } from '../../content/Content'
import SingleProduct from './SingleProduct'
import { useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const SinglePage = () => {
  const { filteredProducts } = useGlobalContext()
  const { id } = useParams()

  // Find the product with the matching id
  const selectedProduct = filteredProducts.find(
    (product) => product.id === parseInt(id, 10)
  )

  if (!selectedProduct) {
    // Handle the case where the product with the specified id is not found
    return <div className='grid place-items-center text-3xl font-bold text-purple-600 h-screen -my-60'>Product not found
    <NavLink to='/' className='text-xl border p-3 hover:scale-105 bg-purple-600 text-white '>Return home</NavLink>
    </div>
  }

  return (
    <div className='w-[85vw] md:container mx-auto '>
      <SingleProduct item={selectedProduct} key={selectedProduct.id} />
    </div>
  )
}

export default SinglePage
