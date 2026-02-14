import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import MenuMinuman from './pages/MenuMinuman'
import MenuMakanan from './pages/MenuMakanan'
import AboutYou from './pages/AboutYou'
import Login from './pages/Login'
import Register from './pages/Register'
import Pesanan from './pages/Pesanan'
import { useState } from 'react'

function App() {

  const [cart, setCart] = useState([])

  return (
    <main>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/MenuMinuman' element={<MenuMinuman cart={cart} setCart={setCart}/>}/>
        <Route path='/MenuMakanan' element={<MenuMakanan cart={cart} setCart={setCart}/>}/>
        <Route path='/AboutYou' element={<AboutYou />}/>
        <Route path='/Login' element={<Login />}/>
        <Route path='/Register' element={<Register />}/>
        <Route path='/Pesanan' element={<Pesanan cart={cart} setCart={setCart} />}/>
      </Routes>
    </main>
  )
}

export default App
