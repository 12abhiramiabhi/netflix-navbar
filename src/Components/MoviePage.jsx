import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { trandingURL } from './Constants';
import './MoviePage.css'
import { imageBackUrl } from './Constants';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';

function MoviePage() {
    const location = useLocation();
    console.log(location.state);

    return (



        <div className='content' style={{ background: `url('${imageBackUrl}${location.state.backdrop_path}')`, backgroundSize: "cover" }} >
            <div className='content3'>
                <h1 className='h1'>{location.state.original_title}</h1>
                <h1 className='h2'>{location.state.first_air_date}</h1>
                <p className='para'>{location.state.overview}</p>
                <div className='btn6'>
                    <button className='btn'><PlayArrowIcon />play</button>
                    <button className='btn1'><AddIcon />Add to playlist</button>
                </div>
            </div>
        </div>

    )
}

export default MoviePage