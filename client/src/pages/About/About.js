import React from 'react'

import './About.css'
import About_pic from '../../assets/images/shreya_about.png'

export function About() {
    return (
        <>
            <div className='about'>
                <div className='row'>
                    <div className='col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img'>
                        <img src={About_pic} alt='profile_pic' />
                    </div>
                    <div className='col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content'>
                        <h1>About Me</h1>
                        <p>
                            I am an enthusiastic and dedicated aspiring frontend developer, seeking a role to
                            enhance and explore my technical knowledge in your company.I am an enthusiastic and dedicated aspiring frontend developer, seeking a role to
                            enhance and explore my technical knowledge in your company.I am an enthusiastic and dedicated aspiring frontend developer, seeking a role to
                            enhance and explore my technical knowledge in your company.I am an enthusiastic and dedicated aspiring frontend developer, seeking a role to
                            enhance and explore my technical knowledge in your company.I am an enthusiastic and dedicated aspiring frontend developer, seeking a role to
                            enhance and explore my technical knowledge in your company.I am an enthusiastic and dedicated aspiring frontend developer, seeking a role to
                            enhance and explore my technical knowledge in your company.I am an enthusiastic and dedicated aspiring frontend developer, seeking a role to
                            enhance and explore my technical knowledge in your company.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
