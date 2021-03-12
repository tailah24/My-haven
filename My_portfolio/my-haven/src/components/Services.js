import React from 'react'
import '../css/Services.css'
import { AiOutlineMinus } from 'react-icons/ai';
import { CgGym } from 'react-icons/cg';
import Carousel from "react-elastic-carousel"
import  Card  from './Card'

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 },
  ]

function Services() {

   
    return (
        <div className='Services'>

        <div className='Services_details'>
            <h1>Facilities & Services</h1>
            < AiOutlineMinus className='Services_detailsIcon'/>
            </div>

            <div className='amenities'>

            <div className='amenities_details'>
            <Carousel
             breakPoints={breakPoints} 
             transitionMs={700}
             autoTabIndexVisibleItems={true}>
            <div className='amenities_info'>
                < CgGym className='amenitiesIcon'/>
                <h4>Fully Equipped Gym</h4>
                <p>*In select homes</p>
                </div>

            <div className='amenities_info'>
                < CgGym className='amenitiesIcon'/>
                <h4>Fully Equipped Gym</h4>
                <p>*In select homes</p>
                </div>

            <div className='amenities_info'>
                < CgGym className='amenitiesIcon'/>
                <h4>Fully Equipped Gym</h4>
                <p>*In select homes</p>
                </div>

                <div className='amenities_info'>
                < CgGym className='amenitiesIcon'/>
                <h4>Fully Equipped Gym</h4>
                <p>*In select homes</p>
                </div>

                <div className='amenities_info'>
                < CgGym className='amenitiesIcon'/>
                <h4>Fully Equipped Gym</h4>
                <p>*In select homes</p>
                </div>

                <div className='amenities_info'>
                < CgGym className='amenitiesIcon'/>
                <h4>Fully Equipped Gym</h4>
                <p>*In select homes</p>
                </div>

                </Carousel>

                </div>
                <div className='rooms_details' >
                <div className='Services_details'>
            <h1>Rooms & Rates</h1>
            < AiOutlineMinus className='Services_detailsIcon'/>
            </div>
            <div className='rooms'>

            <Carousel 
            breakPoints={breakPoints} 
            transitionMs={700}
            autoTabIndexVisibleItems={true}
            enableAutoPlay autoPlaySpeed={3000}>

            <Card 
                src="https://media.nomadicmatt.com/2018/apartment.jpg"
                title="1 Bedroom apartment"
                description="Superhost with great amenities and a fabolous shopping complex nearby"
                price="$70/night" />

            <Card 
                src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
                title="3 Bedroom Flat in Bournemouth"
                description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
                price="$130/night" />
            <Card 
                src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
                title="Penthouse in London"
                description="Enjoy the amazing sights of London with this stunning penthouse"
                price="$350/night" />


            <Card 
                src="https://media.nomadicmatt.com/2018/apartment.jpg"
                title="1 Bedroom apartment"
                description="Superhost with great amenities and a fabolous shopping complex nearby"
                price="$70/night" />

            <Card 
                src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
                title="3 Bedroom Flat in Bournemouth"
                description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
                price="$130/night" />
            <Card 
                src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
                title="Penthouse in London"
                description="Enjoy the amazing sights of London with this stunning penthouse"
                price="$350/night" />

            </Carousel>
            </div>

                </div>
                </div>

        </div>
    )
}

export default Services
