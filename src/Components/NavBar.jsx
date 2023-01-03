import React from 'react'

function NavBar() {
    return (
        <div>
            <nav>
            <div className='logo'>
         <img className='img' src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" />
            </div>
            <div className='black'>
                <div className='red'>
                    <div className='white'>
                        <div className='list'>
                            <a href="#home"><li>Home</li></a>
                            <a href="#series"><li>series</li></a>
                            <a href="#movies"><li>movies</li></a>
                            <a href="#new and popular"><li>New and popular</li></a>
                        </div>
                    </div>
                </div>

            </div>
    </nav>
        </div>
    )
}
export default NavBar
