import React from 'react'
import '../css/Amenities.css'

function Amenities({icon, description}) {
    return (
        <div className='Amenities'>
            <icon src={icon} alt=' '/>
            <h4>{description}</h4>
            <p>In select homes</p>
        </div>
    )
}

export default Amenities
