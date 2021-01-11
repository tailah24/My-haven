import React from 'react'
import '../css/CovidBanner.css'
import { Link } from 'react-router-dom'

function CovidBanner() {
    return (
        <div className='covidBanner'>
            <Link to='/' className='covidBanner_link'>
            <p>Get the latest on our COVID-19 response</p>
            </Link>
        </div>
    )
}

export default CovidBanner
