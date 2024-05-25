import React from 'react';
import { MdSchool } from 'react-icons/md';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import './Education.css'

export function Education() {
    return (
        <>
            <div className='education' id='education'>
                <h2 className='col-12 mt- mb-1 text-center text-uppercase'>
                    Education Details
                </h2>
                <hr />
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'white', color: 'black' }}
                        contentArrowStyle={{ borderRight: '7px solid  white' }}
                        date="2020 - 2023"
                        iconStyle={{ background: '#138781', color: '#fff' }}
                        icon={<MdSchool />}
                    >
                        <h3 className="vertical-timeline-element-title">Bachelor's of Engineering (B.E)</h3>
                        <h4 className="vertical-timeline-element-subtitle">Anjuman College of Engineering & Technology, Nagpur</h4>
                       
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'white', color: 'black' }}
                        contentArrowStyle={{ borderRight: '7px solid  white' }}
                        date="2017 - 2020"
                        iconStyle={{ background: '#138781', color: '#fff' }}
                        icon={<MdSchool />}
                    >
                        <h3 className="vertical-timeline-element-title">Diploma</h3>
                        <h4 className="vertical-timeline-element-subtitle">Anjuman Polytechnic College, Nagpur</h4>
                       
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </>
    )
}
