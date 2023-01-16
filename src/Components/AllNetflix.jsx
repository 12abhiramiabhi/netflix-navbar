import React from 'react'
import NetflixForm from './NetflixForm'
import NetflixParagraph from './NetflixParagraph'
import NetflixTitle from './NetflixTitle'
import "./netflix.css"

function AllNetflix() {
    return (
        <div className='signup-container'>
            <div className='card'>
                <NetflixForm />
                {/* <NetflixTitle /> */}
                {/* <NetflixParagraph /> */}
            </div>
        </div>
    )
}
export default AllNetflix
