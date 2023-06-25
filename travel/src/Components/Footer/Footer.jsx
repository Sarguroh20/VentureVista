import React from 'react'
import logo from '../../assets/logo.png'
import {TiSocialFacebook} from 'react-icons/ti'
import { AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai'
import {FaPinterestP} from 'react-icons/fa'

const Footer = () => {
  return (
    <div>
        <div className="sectionContainer container grid">
            <div className="gridOne">
              <div className="logoDiv">
                <img src={logo} className='Logo'/>
              </div>
              <div className="socialIcon flex">
                <TiSocialFacebook className='icon'/>
                <AiOutlineTwitter className='icon'/>
                <AiFillYoutube className='icon'/>
                <FaPinterestP className='icon'/>
              </div>
            </div>

            <div className="footerLinks">
              <span className="linkTitle">Information</span>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Explore</a>
              </li>
              <li>
                <a href="">Travel</a>
              </li>
              <li>
                <a href="">Flight Status</a>
              </li>
              <li>
                <a href="">Manage Booking</a>
              </li>
            </div>

        </div>
    </div>
  )
}

export default Footer
