import React from 'react'
import MovieList from './MovieList'
import NavBar from './NavBar'
import "./navbar.css"
import Paragraph from './Paragraph'

function Home() {
    return (
        <div>
            <NavBar />
            <Paragraph />
            <MovieList />
        </div>

    )
}
export default Home
