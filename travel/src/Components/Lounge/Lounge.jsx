import React from 'react'
import imageGrid from '../../assets/Lounge.png'

const Lounge = () => {
  return (
    <div className='lounge container section'>
      <div className="sectionContainer grid">
        <div className="imgDiv">
          <img src={imageGrid}/>
        </div>

        <div className="textDiv">
          <h2>Lounge with a grand view of the clouds</h2>

        <div className="grids grid">

          <div className="singleGrid">
            <span className='gridTitle'>
              Help
            </span>
            <p>Our airline is committed to providing unmatched comfort, ensuring safety and efficiency, and delivering exceptional service throughout your journey.</p>
          </div>

          
          <div className="singleGrid">
            <span className='gridTitle'>
              Services
            </span>
            <p>Our airline is committed to providing unmatched comfort, ensuring safety and efficiency, and delivering exceptional service throughout your journey.</p>
          </div>

        
          <div className="singleGrid">
            <span className='gridTitle'>
              Boarding
            </span>
            <p>Our airline is committed to providing unmatched comfort, ensuring safety and efficiency, and delivering exceptional service throughout your journey.</p>
          </div>

          
          <div className="singleGrid">
            <span className='gridTitle'>
              Chauffeur
            </span>
            <p>Our airline is committed to providing unmatched comfort, ensuring safety and efficiency, and delivering exceptional service throughout your journey.</p>
          </div>

        </div>
        </div>
      </div>
    </div>
  )
}

export default Lounge
