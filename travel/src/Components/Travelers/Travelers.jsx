import React from 'react'
import paris from '../../assets/paris.jpg'
import dubai from '../../assets/dubai.jpg'
import london from '../../assets/london.jpg'
import newyork from '../../assets/nyc.jpg'

const Travelers = () => {
  return (
    <div className='travelers container section'>
      <div className="sectionContainer">
        <h2>
          Top Travel Places
        </h2>

        <div className="travelersContainer grid">

          <div className="singleTraveler">
            <img src={paris} className='DestinationImage'/>
          </div>

          <div className="singleTraveler">
            <img src={dubai} className='DestinationImage'/>
          </div>

          <div className="singleTraveler">
            <img src={london} className='DestinationImage'/>
          </div>

          <div className="singleTraveler">
            <img src={newyork} className='DestinationImage'/>
          </div>


        </div>
      </div>
    </div>
  )
}

export default Travelers
