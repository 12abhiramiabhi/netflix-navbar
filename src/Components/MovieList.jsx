import React from 'react'
import SkipNextIcon from '@mui/icons-material/SkipNext';
import AddIcon from '@mui/icons-material/Add';

function MovieList() {
    return (
        <div className='movies-container' >
            <div>
                <h1 className='movies-header'>Netflix Originals</h1>
            </div>
            <div className='cards-container'>
                <div className='card1'>
                    <h1 className='title'>card <SkipNextIcon /> <AddIcon /></h1>
                    <div className="icon-group"><SkipNextIcon /> <AddIcon /></div>
                </div>
                <div className='card1'>
                    <h1 className='title'>card <SkipNextIcon /> <AddIcon /></h1>
                </div>
                <div className='card1'>
                    <h1 className='title'>card <SkipNextIcon /> <AddIcon /></h1>
                </div>
                <div className='card1'>
                    <h1 className='title'>card <SkipNextIcon /> <AddIcon /></h1>
                </div>
                <div className='card1'>
                    <h1 className='title'>card <SkipNextIcon /> <AddIcon /></h1>
                </div>
                <div className='card1'>
                    <h1 className='title'>card <SkipNextIcon /> <AddIcon /></h1>
                </div>
                <div className='card1'>
                    <h1 className='title'>card <SkipNextIcon /> <AddIcon /></h1>
                </div>

            </div>
        </div>

    )
}

export default MovieList