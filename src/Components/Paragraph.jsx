import React, { useEffect, useState } from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios';
import { imageBackUrl, trandingURL } from './Constants';


function Paragraph() {

    const [movie, setmovie] = useState({})

    const GetmovieFromApi = async () => {
        let response = await axios.get(trandingURL)
        console.log(response.data.results[0]);
        setmovie(response.data.results[4])
    }
    useEffect(() => {
        GetmovieFromApi()

    }, [])

    return (
        <div>
            <div className='content' style={{ background: `url('${imageBackUrl}${movie.backdrop_path}')` }}>

                <h1 className='h1'>{movie.original_title}</h1>
                <h1 className='h2'>{movie.release_date}</h1>
                <p className='para'>
                    {movie.overview}
                </p>
                <button className='btn'><PlayArrowIcon />play</button>
                <button className='btn1'><AddIcon />Add to playlist</button>
            </div>
        </div >
    )
}

export default Paragraph