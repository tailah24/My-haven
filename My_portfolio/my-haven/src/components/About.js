import React from 'react'
import '../css/About.css'
import { AiOutlineMinus } from 'react-icons/ai';
import getaway  from '../images/getaway.jpg'
import { Button } from '@material-ui/core'

function About() {
    return (
        <div className='About'>
            <div className='About_info'>
            <div className='About_title'>
            <h1>About My Haven</h1>
            < AiOutlineMinus className='About_icon'/>
                <p>My haven is a community based on connection and belonging—a community that was born in 2008 when two hosts welcomed three guests to their San Francisco home, and has since grown to 4 million hosts who have welcomed over 800 million guest arrivals to about 100,000 cities in almost every country and region across the globe. Hosts on My haven are everyday people who share their worlds to provide guests with the feeling of connection and being at home. At My haven, we believe that hosts, guests and the communities where we operate are all stakeholders we have a responsibility to serve, and that by serving them alongside our employees and investors, we will build an enduringly successful company.
                </p>
                </div>
                <img src={getaway} alt=' '/>
            </div>
            <Button variant='outlined'> Read More</Button>
        </div>
    )
}

export default About
