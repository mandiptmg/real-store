import {useGlobalContext} from '../../content/Content' 
import GridView from "./GridView"
import ListView from "./ListView"
const ProductList = () => {
 const {grid} = useGlobalContext()
  return (
    <div>
    <div className={grid ? 'none' : 'hidden'}>
<GridView/>
    </div>
    <div className={grid ? 'hidden' : 'none'}>
<ListView/>
    </div>
    </div>
  )
}

export default ProductList