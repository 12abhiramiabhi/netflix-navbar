import React from 'react'
import { useState } from 'react'

export default function NetflixParagraph() {

    function ClickSigin() {
        alert(email + password)
    }

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()


    return (

        <div className='mid-session' >

            <input type="email" name='email' placeholder='email' className="inputt1" onChange={(e) => { setEmail(e.target.value) }} />
            <input type="password" name='password' placeholder='password' className="inputt" onChange={(e) => { setPassword(e.target.value) }} />

            <div>
                <div className='button-container'>
                    <button className='btn' onClick={ClickSigin}>sign in</button>
                </div>
                <p className='para3' >remember me
                </p>
                <a href="#" className='a3' >need help</a>
                <p className='para2' >New to netflix ? <a href="#" className='a' >sign up now</a></p>
                <p className='para'>This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="#" className='a1' >learn more</a> </p>
            </div>
        </div>


    )
}
