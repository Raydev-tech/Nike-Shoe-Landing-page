import { React } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './component/Navbar';
import HeroSection from './pages/Hero';
import ProductShowcase from './pages/ProductShowcase';
import Cart from './component/Cart';
import { Toaster } from 'react-hot-toast';

function App() {

  return (
    <>
    <Toaster position="top-right" />
      <BrowserRouter>
       <Navbar />
       <Routes>
        <Route path='/' element={<HeroSection />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/new' element={<ProductShowcase />} />
       </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
