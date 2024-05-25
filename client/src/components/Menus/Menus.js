import React from 'react';
import { Link } from 'react-scroll';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import {
  FcAbout,
  FcBiotech,
  FcBusinessContact,
  FcHome,
  FcReadingEbook,
  FcVideoProjector
} from 'react-icons/fc';

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
          <Zoom>
            <div className='navbar-profile-pic'>
              <img src={Profile} alt='profile pic'></img>
            </div>
          </Zoom>

          <Fade left>
            <div className='nav-items'>
              <div className='nav-item'>
                <div className='nav-link'>
                  <Link
                    to='home'
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcHome />
                    Home
                  </Link>
                </div>

                <div className='nav-link'>
                  <Link
                    to='about'
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcAbout />
                    About
                  </Link>
                </div>

                <div className='nav-link'>
                  <Link
                    to='education'
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcReadingEbook />
                    Education
                  </Link>
                </div>

                <div className='nav-link'>
                  <Link
                    to='techstack'
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcBiotech />
                    Tech Stack
                  </Link>
                </div>
                <div className='nav-link'>
                  <Link
                    to='project'
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcVideoProjector />
                    Projects
                  </Link>
                </div>

                {/* <div className='nav-link'>
                <FcPortraitMode />
                Work Experience
              </div> */}

                <div className='nav-link'>
                  <Link
                    to='contact'
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcBusinessContact />
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </Fade>
        </>
      ) : (
        <>
          <div className='nav-items'>
            <div className='nav-item'>

              <div className='nav-link'>
                <Link
                  to='home'
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcHome title='Home' />
                </Link>
              </div>

              <div className='nav-link'>
                <Link
                  to='about'
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcAbout title='About' />
                </Link>
              </div>

              <div className='nav-link'>
                <Link
                  to='education'
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcReadingEbook title='Education' />
                </Link>
              </div>

              <div className='nav-link'>
                <Link
                  to='techstack'
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcBiotech title='Tech Stack' />
                </Link>
              </div>

              <div className='nav-link'>
                <Link
                  to='project'
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcVideoProjector title='Projects' />
                </Link>
              </div>

              {/* <div className='nav-link'>
                <FcPortraitMode title='Work Experience' />
              </div> */}

              <div className='nav-link'>
                <Link
                  to='contact'
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcBusinessContact title='Contact' />
                </Link>
              </div>
            </div>
          </div>
        </>
      )}

    </>
  )
}


