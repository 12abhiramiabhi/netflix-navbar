import React from 'react'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function NavBar() {
    return (
        <div>
            <nav>
                <div className='logo'>
                    {/* <img  src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" /> */}
                    <img className='img2' src="https://www.freepnglogos.com/uploads/netflix-tv-logo-png-9.png" alt="" />
                </div>

                <div className='black'>
                    <div className='red'>
                        <div className='white'>
                            <div className='list'>
                                <li>Home</li>
                                <li>series</li>
                                <li>movies</li>
                                <li>New and popular</li>
                            </div>
                            <div className='logo3'>
                                <NotificationsActiveIcon />
                                <SearchIcon />
                                <img className='img3' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117" alt="" />
                                <ArrowDropDownIcon />
                            </div>
                        </div>
                    </div>

                </div>
            </nav>
        </div>
    )
}
export default NavBar
