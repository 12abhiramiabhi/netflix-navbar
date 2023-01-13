import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { imageBackUrl } from './Constants';
import { useNavigate } from 'react-router-dom';


function SinglemovieCard({ movieobj }) {
    const navigate = useNavigate()
    function GoToMoviePage() {
        navigate("/movie", { state: movieobj })
    }

    return (
        <div className='card1' onClick={GoToMoviePage} style={{ background: `url('${imageBackUrl}${movieobj.backdrop_path}')`, backgroundSize: "cover" }}>
            <div className='bottom-text'>
                <h1 className='title'>{movieobj.original_title}</h1>
                <div className="icon-group">
                    <SkipNextIcon /> <AddIcon />
                </div>
            </div>
        </div>
    )
}
export default SinglemovieCard