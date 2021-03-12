import React, { useState } from 'react'
import '../css/Banner.css'
import Header from './Header'
import CovidBanner from './CovidBanner'
import Test2 from './Navbar2'
import { Button } from '@material-ui/core'
// import Search from '../components/Search'
import { useHistory } from "react-router-dom"

function Banner() {

    const [ navbar, setNavbar ] = useState(false)

    const changeBackground = () => {
        if (window.scrollY >= 55) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeBackground)

    const history = useHistory()
    // const [showSearch, setshowSearch] = useState(false)
    return (
        <div className='banner'>
            < CovidBanner />
            { navbar ? <Test2 /> : < Header /> }
            {/* <div className='banner_search'>
                {showSearch && < Search />}
                <Button onClick={() => setshowSearch(!showSearch)} className='banner_searchButton' variant='outlined'>{showSearch ? 'Hide' : 'Show Dates' } </Button>
            </div> */}
            <div className='banner_info'>
                <h1><span className='green' >Your</span> Comfort, Our <span className='green' >Priority</span></h1>
                <p>Welcome to My haven Search through our variety of exotic homes to find one that matches your style and preference</p>
                {/* <h5>Plan a different kind of getaway to uncover the hidden gems near you.</h5> */}
                <Button variant='outlined' onClick={() => history.push('/search')} >Explore Nearby</Button>
            </div>
        </div>
    )
}

export default Banner
