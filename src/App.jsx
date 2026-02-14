import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import MenuMinuman from './pages/MenuMinuman'
import MenuMakanan from './pages/MenuMakanan'
import AboutYou from './pages/AboutYou'

function App() {

  return (
    <main>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/MenuMinuman' element={<MenuMinuman />}/>
        <Route path='/MenuMakanan' element={<MenuMakanan />}/>
        <Route path='/AboutYou' element={<AboutYou />}/>
      </Routes>
    </main>
  )
}

export default App
