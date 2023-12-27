import { useEffect } from 'react'
import { useGlobalContext } from '../../content/Content'

const Sort = () => {
  const {
    filteredProducts,
    setFilteredProducts,
    sortingValue,
    setSortingValue,
  } = useGlobalContext()

  useEffect(() => {
    // Apply sorting whenever sortingValue or filteredProducts change
    const newSortData = [...filteredProducts].sort(sortProducts)
    setFilteredProducts(newSortData)
  }, [sortingValue, filteredProducts])

  const sortProducts = (a, b) => {
    if (sortingValue === 'lowest') {
      return a.price - b.price
    }
    if (sortingValue === 'highest') {
      return b.price - a.price
    }
    if (sortingValue === 'a-z') {
      return a.title.localeCompare(b.title)
    }
    if (sortingValue === 'z-a') {
      return b.title.localeCompare(a.title)
    }
  }
   
  const handleSortChange = (e) => {
    const value = e.target.value
    setSortingValue(value)
  }

  return (
    <div>
      <form action=''>
        <select
          value={sortingValue}
          onChange={handleSortChange}
          className='text-gray-500'
        >
          <option value='highest'>Price: High-Low</option>
          <option value='lowest'>Price: Low-High</option>
          <option value='a-z'>Price: a-z</option>
          <option value='z-a'>Price: z-a</option>
        </select>
      </form>
    </div>
  )
}

export default Sort
