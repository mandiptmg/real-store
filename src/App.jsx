import { useEffect } from 'react'
import Footer from './components/Hearder and footer/Footer'
import Header from './components/Hearder and footer/Header'
import Home from './components/Home/Home'
import { Routes, Route, useLocation } from 'react-router-dom'
import Categories from './page/category/Categories'
import SinglePage from './page/singlepage/SinglePage'
const App = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Categories />} />
        <Route path='/singleproduct/:id' element={<SinglePage />} />
        {/* <Route path='/' element={<Home />} />
        <Route path='/' element={<Home />} /> */}
      </Routes>
      <Footer />
    </div>
  )
}

export default App
