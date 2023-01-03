import React from 'react'

function NavBar() {
    return (
        <div>
            <nav>
            <div className='logo'>
         {/* <img  src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" /> */}
         <img className='img' src="https://www.freepnglogos.com/uploads/netflix-tv-logo-png-9.png" alt="" />
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
                    </div>
                </div>

            </div>
    </nav>
        </div>
    )
}
export default NavBar
