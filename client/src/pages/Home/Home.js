import React from 'react';
import Typewriter from 'typewriter-effect';

import './Home.css';
import Resume from '../../assets/docs/Shreya_Bamane-Resume.pdf'

export function Home() {
  return (
    <>
      <div className='container-fluid home-container'>
        <div className='container home-content'>
          <h2>Hi 👋 I'm a </h2>
          <h1>
            <Typewriter
              options={{
                strings: [
                  "Frontend Developer!", 
                  "Mern Stack Developer!"
                ],
                autoStart: true,
                loop: true
              }}
            />
          </h1>
          <div className='home-buttons'>
            <button className='btn btn-hire'>Hire Me</button>
            <a className='btn btn-cv' href={Resume} download="Shreya_Bamane.pdf">My Resume</a>
          </div>
        </div>
      </div>
    </>
  )
}


