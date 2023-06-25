import React from 'react'
import gridImage from '../../assets/takeoffr.png'

const Support = () => {
  return (
    <div className='support container section'>
      <div className="sectionContainer">
        <div className="titlesDiv">
          <small>Travel Support</small>
          <h2>Embark on Limitless Adventures</h2>
          <p>Find help with booking & travel plans, see what to expect along the journey!</p>

        </div>

        <div className="infoDiv grid">
          <div className="textDiv grid">

            <div className="singleInfo">
              <span className='number'>1</span>
              <h4>Travel Requirements for Dubai</h4>
              <p>Find help with booking & travel plans, see what to expect along the journey!</p>
            </div>

            <div className="singleInfo">
              <span className='number colorOne'>2</span>
              <h4>Chauffeur Services at Arrival</h4>
              <p>Find help with booking & travel plans, see what to expect along the journey!</p>
            </div>

            <div className="singleInfo">
              <span className='number colorTwo'>3</span>
              <h4>Travel Sights</h4>
              <p>Find help with booking & travel plans, see what to expect along the journey!</p>
            </div>

          </div>

          <div className="imgDiv">
            <img src={gridImage}/>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Support
