import React from 'react'
import Home from './Pages/Home'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Favourites from './Pages/Favourites'
import { MovieProvider } from './contexts/MovieContext'




const App = () => {
  return (
   <MovieProvider>
   <main className='main-content'>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/favourites" element={<Favourites/>}/>
    </Routes>
   </main>
   </MovieProvider>
  )
}

export default App