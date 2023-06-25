import React from 'react'
import { BsBookmarkCheck, BsShieldCheck } from 'react-icons/bs'
import { RxCalendar } from 'react-icons/rx'

const Info = () => {
  return (
    <div className='info section'>
    <div className="infoContainer container">
      <div className="titleDiv flex">
        <h2>Discover Your Limitless Horizons</h2>
        <button className='btn'>
          View All
        </button>
      </div>

      <div className="cardsDiv grid">

      <div className="singleCard grid">
          <div className="iconDiv flex">
            <RxCalendar className='icon'/>
          </div>
          <span className='cardTitle'>Seize the Journey, Embrace Serenity</span>
          <p>Secure your ticket, embrace tranquility, and let worries dissolve in a realm of relaxation</p>
        </div>

        <div className="singleCard grid">
          <div className="iconDiv flex colorOne">
            <BsShieldCheck className='icon'/>
          </div>
          <span className='cardTitle'>Smart Checklist, Smarter Results.</span>
          <p>Effortlessly organized. Productivity amplified. Achieve more with the power of a smart checklist</p>
        </div>

        <div className="singleCard grid">
          <div className="iconDiv flex colorTwo">
            <BsBookmarkCheck className='icon'/>
          </div>
          <span className='cardTitle'>Unlock the Power of Savings</span>
          <p>Empowering You to Spend Wisely, Save Efficiently, and Secure Your Financial Future.</p>
        </div>

      </div>
    </div>
    </div>
  )
}

export default Info
