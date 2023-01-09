import React, { useEffect } from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';

function Paragraph() {
    const GetmovieFromApi = async () => {
        console.log("function called");
    }
    useEffect(() => {
        GetmovieFromApi()
    }, [])

    return (
        <div>
            <div className='content'>
                <img src="" alt="" />
                {/* <h4 className='banner'>
                    <span>2022</span>
                    <span><i>12+</i></span>
                    <span><i>1 hr 55min</i></span>
                    <span><i>action</i></span>
                </h4> */}
                <h1 className='h1'>Glass onion: A  knives out Mystery</h1>
                <h1 className='h2'>From 2022-11-23</h1>
                <p className='para'>
                    world-famous detective benoit balnc heads to Greece to peel back the layers
                    of a my surrounding a teach billionarie and his eclecti crew of friends.

                </p>
                <button className='btn'><PlayArrowIcon />play</button>
                <button className='btn1'><AddIcon />Add to playlist</button>
            </div>
        </div >
    )
}

export default Paragraph