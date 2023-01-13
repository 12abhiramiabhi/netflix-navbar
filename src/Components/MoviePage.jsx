import React from 'react'
import { useLocation } from 'react-router-dom'

function MoviePage() {
    const location = useLocation();
    console.log(location.state);
    return (
        <div>
            <h1 className='page-head' style={{ color: "white" }}>
                "hai"{location.state.original_title}

            </h1>
        </div>
    )
}

export default MoviePage