import React from 'react'
import Moviecard from './Components/Moviecard'


const App = () => {
  const MovieNumber  =1

  
  return (
   <div>
    <Moviecard movie = {{title: "Sherlock Homes" , release_date: "1955",}}/>
    <Moviecard movie = {{title: "Krish 3" , release_date: " 2023",}}/>
    <Moviecard movie = {{title: "Intestreller" , release_date: "2024",}}/>

   </div>
  )
}

export default App