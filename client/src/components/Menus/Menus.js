import React from 'react';
import { FcAbout, FcBiotech, FcBusinessContact, FcHome, FcPortraitMode, FcReadingEbook, FcVideoProjector } from 'react-icons/fc';

import './Menus.css';
import Profile from '../../assets/images/shreya.jpg';


export function Menus({ toggle }) {
  return (
    <>
      {/* normal toggle
      {toggle && (
        <div className='navbar-profile-pic'>
          <img src={profile} alt='profile pic'></img>
        </div>
      )} */}

      {/* with ternary operator */}
      {toggle ? (
        <>
          <div className='navbar-profile-pic'>
            <img src={Profile} alt='profile pic'></img>
          </div>

          <div className='nav-items'>
            <div className='nav-item'>
              <div className='nav-link'>
                <FcHome />
                Home
              </div>
              <div className='nav-link'>
                <FcAbout />
                About
              </div>
              <div className='nav-link'>
                <FcReadingEbook />
                Education
              </div>
              <div className='nav-link'>
                <FcBiotech />
                Tech Stack
              </div>
              <div className='nav-link'>
                <FcVideoProjector />
                Projects
              </div>
              <div className='nav-link'>
                <FcPortraitMode />
                Work Experience
              </div>
              <div className='nav-link'>
                <FcBusinessContact />
                Contact
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
        <div className='nav-items'>
            <div className='nav-item'>
              <div className='nav-link'>
                <FcHome title='Home'/>
              </div>
              <div className='nav-link'>
                <FcAbout title='About' />
              </div>
              <div className='nav-link'>
                <FcReadingEbook title='Education' />
              </div>
              <div className='nav-link'>
                <FcBiotech title='Tech Stack' />
              </div>
              <div className='nav-link'>
                <FcVideoProjector title='Projects' />
              </div>
              <div className='nav-link'>
                <FcPortraitMode title='Work Experience' />
              </div>
              <div className='nav-link'>
                <FcBusinessContact title='Contact' />
              </div>
            </div>
          </div>
        </>
      )}

    </>
  )
}


