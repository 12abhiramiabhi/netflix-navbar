import React from 'react'
import { actionURL, crimeURL, dramaURL, musicURL, trandingURL } from './Constants'
import MovieList from './MovieList'
import NavBar from './NavBar'
import "./navbar.css"
import Paragraph from './Paragraph'

function Home() {
    return (
        <div>
            <NavBar />
            <Paragraph />
            <MovieList categary="netflix originl" categaryurl={trandingURL} />
            <MovieList categary="action movie" categaryurl={actionURL} />
            <MovieList categary="drama" categaryurl={dramaURL} />
            <MovieList categary="crime" categaryurl={crimeURL} />
            <MovieList categary="music" categaryurl={musicURL} />
        </div>

    )
}
export default Home
