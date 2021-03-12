import React from 'react'
import '../css/Footer.css'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../My haven Logo.svg'

function Footer() {
    return (
        <div className='footer'>
            <Link to='/'>
            <Logo alt='logo' height='150px' className='logo_icon' />
            </Link>
            <div className='footer_items'>
                <div className='list_items'>
                    <ul>
                        <li>About us</li>
                        <li>Contact us</li>
                        <li>Book a room</li>
                        <li>Our agents</li>
                        <li>Connect with us</li>
                    </ul>
                </div>

                <div className='list_items'>
                    <ul>
                        <li>About us</li>
                        <li>Contact us</li>
                        <li>Book a room</li>
                        <li>Our agents</li>
                        <li>Connect with us</li>
                    </ul>
                </div>

                <div className='list_items'>
                    <ul>
                        <li>About us</li>
                        <li>Contact us</li>
                        <li>Book a room</li>
                        <li>Our agents</li>
                        <li>Connect with us</li>
                    </ul>
                </div>
            </div>

            <p>© 2020 Airbnb clone! No rights reserved - this is a demo!</p>
            <p>Privacy · Terms · Sitemap · Company Details</p>
        </div>
    )
}

export default Footer
 