import React from 'react'
import "./netflix.css"
import NetflixParagraph from './NetflixParagraph'
import NetflixTitle from './NetflixTitle'


export default function NetflixForm() {
    return (
        <div className='signup-container' >
            <div className='card'>
                <NetflixTitle />
                <NetflixParagraph />

            </div>
        </div>

    )
}