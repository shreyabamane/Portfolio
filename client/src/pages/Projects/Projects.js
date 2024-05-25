import React from 'react';
import Spin from 'react-reveal/Spin';

import './Projects.css';

export function Projects() {
    return (
        <>
            <div className='container project' id='project'>
                <h2 className='col-12 mt- mb-1 text-center text-uppercase'>
                    Top Recent Projects
                </h2>
                <hr />
                <p className='pb-3 text-center'>
                    Here are my top 2 recent project with live links and source code
                </p>

                {/* card design */}
                <div className='row' id='ads'>
                    <Spin>
                        <div className='col-md-6'>
                            <div className='card rounded'>
                                <div className='card-image'>
                                    <span className='card-notify-badge'>Full Stack</span>
                                    <img src='https://www.ppcmate.com/wp-content/uploads/2023/03/2021-03-15_eCommerceCOVID19report-1-1220x675px.jpg' alt='project1' />
                                </div>
                                <div className='card-image-overly m-auto mt-3'>
                                    <span className='card-details-badge'>Node</span>
                                    <span className='card-details-badge'>Express</span>
                                    <span className='card-details-badge'>React</span>
                                    <span className='card-details-badge'>Mongodb</span>
                                </div>
                                <div className='card-body text-center'>
                                    <div className='ad-title m-auto'>
                                        <h5 className='text-uppercase'>shopping website</h5>
                                    </div>
                                    <a className='ad-btn' href='https://github.com/shreyabamane/Flipkart-Clone-App'>
                                        View
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-6'>
                            <div className='card rounded'>
                                <div className='card-image'>
                                    <span className='card-notify-badge'>Mern stack</span>
                                    <img src='https://i.ytimg.com/vi/EtMOgsWEAmQ/maxresdefault.jpg' alt='project2' />
                                </div>
                                <div className='card-image-overly m-auto mt-3'>
                                    <span className='card-details-badge'>Node</span>
                                    <span className='card-details-badge'>Express</span>
                                    <span className='card-details-badge'>React</span>
                                    <span className='card-details-badge'>Mongodb</span>
                                </div>
                                <div className='card-body text-center'>
                                    <div className='ad-title m-auto'>
                                        <h5 className='text-uppercase'>Video website</h5>
                                    </div>
                                    <a className='ad-btn' href='https://github.com/shreyabamane/UI-Youtube-Clone'>
                                        View
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Spin>
                </div>
            </div>
        </>
    )
}
