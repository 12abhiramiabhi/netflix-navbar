import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { trandingURL } from './Constants';

function MoviePage() {
    const location = useLocation();
    console.log(location.state);

    const [allmovie,setallmovie]=useState({})

    const MovieApi = async ()=>{
        let response = await  axios.get(trandingURL)
        console.log(response.data.result[0]);
        setallmovie(response.data.result[9])
    }

    useEffect(()=>{
        MovieApi()
    },[])

    return (
        <div>
            <h1 className='page-head' style={{ color: "white" }}>
                "hai"{location.state.original_title}

            </h1>
        </div>
    )
}

export default MoviePage