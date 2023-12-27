// AppProvider.jsx
import { createContext, useContext, useEffect, useState } from 'react'

const Url = 'https://fakestoreapi.com/products'
const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [grid, setGrid] = useState(true)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [text, setText] = useState('')
  const [sortingValue, setSortingValue] = useState('highest')
  const [count,setCount] = useState(1);
  const [isCount, setIsCount] = useState(0)



  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(Url)
        const data = await response.json()
        setProducts(data)
        setFilteredProducts(data)
      } catch (error) {
        console.error('Error fetching products:', error)
        setError('Error fetching products')
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [products,filteredProducts,sortingValue])

  return (
    <AppContext.Provider
      value={{
        products,
        setProducts,
        grid,
        setGrid,
        filteredProducts,
        setFilteredProducts,
        loading,
        text,
        setText,
        error,
        sortingValue,
        setSortingValue,
        count,
        setCount,
        isCount,
        setIsCount,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
