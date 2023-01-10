import React, { useEffect, useState } from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios';


function Paragraph() {
    const imageBackUrl = "https://image.tmdb.org/t/p/original"
    const [movie, setmovie] = useState({})

    const GetmovieFromApi = async () => {
        let response = await axios.get("https://api.themoviedb.org/3/trending/all/day?api_key=c223e689d61ced6b72f6c9f6374cd64b")
        console.log(response.data.results[0]);
        setmovie(response.data.results[9])
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