import React, { useState } from 'react'
import Header from '../components/Header'
import Test2 from '../components/Test2'
import CovidBanner from '../components/CovidBanner'

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
