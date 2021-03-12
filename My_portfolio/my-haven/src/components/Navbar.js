import React, { useState } from 'react'
import Header from './Header'
import Test2 from './Navbar2'
import CovidBanner from './CovidBanner'

function Test1() {

    const [ navbar, setNavbar ] = useState(false)

    const changeBackground = () => {
        if (window.scrollY >= 55) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeBackground)

    return (
        <div>
            < CovidBanner />
            <div>
            { navbar ? <Test2 /> : < Header /> }
            </div>
        </div>
    )
}

export default Test1
