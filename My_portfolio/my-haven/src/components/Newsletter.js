import React from 'react'
import '../css/Newsletter.css'

function Newsletter() {
    return (
        <div className='Newsletter'>
            <h3>Get Immediate Updates On Room Availability</h3>
            <p>Be the first to learn about rooms available for booking in your inbox</p>
            <div className='input_form'>
            <input type='text' placeholder='Enter your email address' />
            <button type='submit'>SUBSCRIBE</button>
            </div>
        </div>
    )
}

export default Newsletter
