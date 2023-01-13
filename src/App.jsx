import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Home from './Components/Home'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import MoviePage from './Components/MoviePage'



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="movie" element={<MoviePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
