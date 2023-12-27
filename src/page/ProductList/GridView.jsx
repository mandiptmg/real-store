import Product from '../../components/Home/Product/Product'
import { useGlobalContext } from '../../content/Content'
const GridView = () => {
 const { filteredProducts } = useGlobalContext()
  return (
    <div className='grid sm:grid-cols-2 xl:grid-cols-3 items-start  gap-4'>
      {filteredProducts.map((product) => {
        return <Product key={product.id} product={product} />
      })}
    </div>
  )
}

export default GridView