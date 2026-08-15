import React from 'react'
import Home from './Pages/Home'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Favourites from './Pages/Favourites'


const App = () => {
  return (
   
   <main className='main-content'>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/favourites" element={<Favourites/>}/>
    </Routes>
   </main>
  )
}

export default App