import React, { useEffect, useState } from 'react'
import SkipNextIcon from '@mui/icons-material/SkipNext';
import AddIcon from '@mui/icons-material/Add';
import SinglemovieCard from './SinglemovieCard';
import axios from 'axios';

function MovieList({ categary, categaryurl }) {

    const [allmovies, setallmovies] = useState([])

    const FetchCategaryMovie = async () => {
        let response = await axios.get(categaryurl)
        console.log(response.data);
        setallmovies(response.data.results)
    }


    useEffect(() => {
        FetchCategaryMovie()
    }, [])

    return (
        <div className='movies-container' >
            <div>
                <h1 className='movies-header'>{categary}</h1>
            </div>
            <div className='cards-container'>

                {
                    allmovies.map((movieobj) => {
                        return <SinglemovieCard movieobj={movieobj} />
                    })
                }

            </div>
        </div>

    )
}

export default MovieList