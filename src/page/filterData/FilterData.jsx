// FilterData.jsx
import { useState } from 'react'
import { useGlobalContext } from '../../content/Content'

const FilterData = () => {
  const { products, setFilteredProducts, loading, error,text} =
    useGlobalContext()
  const [filterCriteria, setFilterCriteria] = useState('all')
  const uniqueCategories = [
    'all',
    ...new Set(products.map((product) => product.category)),
  ]

  const filterProducts = (criteria) => {
    setFilterCriteria(criteria)

    if (criteria === 'all') {
      setFilteredProducts(products)
      return
    }

    let filtered = [...products]

    // Apply text filter
    if (text.trim() !== '') {
      const searchText = text.toLowerCase()
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(searchText)
      )
    }

    // Apply category filter
    filtered = filtered.filter((product) => product.category === criteria)

    setFilteredProducts(filtered)
  }

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <h1 className='text-slate-700 text-lg font-semibold pb-2'>Category</h1>
      <div className='flex flex-col justify-start items-start'>
        {uniqueCategories.map((category) => (
          <button
            className={`capitalize text-gray-500 ${
              filterCriteria === category ? 'underline' : ''
            }`}
            key={category}
            onClick={() => filterProducts(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  )
}

export default FilterData
