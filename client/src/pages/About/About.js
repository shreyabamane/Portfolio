import React from 'react';
import Jump from 'react-reveal/Jump';

import './About.css'
import About_pic from '../../assets/images/shreya_about.png'

export function About() {
    return (
        <>
            <Jump>
                <div className='about' id='about'>
                    <div className='row'>
                        <div className='col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img'>
                            <img src={About_pic} alt='profile_pic' />
                        </div>
                        <div className='col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content'>
                            <h1>About Me</h1>
                            <p>
                                Hello! I'm Shreya, a passionate and dedicated front-end developer with a keen eye for creating sleek, user-friendly interfaces. 
                                My journey into web development started with a simple curiosity about how websites work, 
                                and it quickly evolved into a full-fledged passion.

                                I have sharpened my skills in HTML, CSS, JavaScript, and modern libraries like React.js. 
                                I love the challenge of transforming complex problems into intuitive and beautiful digital solutions. 
                                The ever-evolving nature of technology keeps me constantly seeking opportunities to learn and stay updated with the latest industry trends.

                                I'm eager to bring my enthusiasm and fresh perspective to a dynamic team where I can contribute and grow as a front-end developer.
                            </p>
                        </div>
                    </div>
                </div>
            </Jump>
        </>
    )
}
