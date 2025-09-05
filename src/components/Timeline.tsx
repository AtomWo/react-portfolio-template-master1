import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';
// Import company logos
import gafLogo from '../assets/images/GAF_Energy_logo.png';
import bayerLogo from '../assets/images/Logo_Bayer.svg.png';
import ucdavisLogo from '../assets/images/davis.png';

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="June 2025 - August 2025"
            iconStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            icon={<img src={gafLogo} alt="GAF Energy" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />}
          >
            <h3 className="vertical-timeline-element-title">Electro-Mechanical Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">GAF Energy</h4>
            <p>
              Graphical User Interface Development, Power Biasing Design, Data Acquisition
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="June 2024 - December 2024"
            iconStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            icon={<img src={bayerLogo} alt="Bayer" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />}
          >
            <h3 className="vertical-timeline-element-title">Central Utilities Electrical Engineering Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Bayer Pharmaceuticals</h4>
            <p>
              Power Systems, Low/Medium Voltage Maintenance, Electrical Safety, NFPA 70E, ArcFlash Studies, Power Factor Intrinsic Analysis
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="September 2021 - December 2025"
            iconStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            icon={<img src={ucdavisLogo} alt="UC Davis College of Engineering" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />}
          >
            <h3 className="vertical-timeline-element-title">B.S. Electrical Engineering</h3>
            <h4 className="vertical-timeline-element-subtitle">University of California, Davis</h4>
            <p>
            Data Structures, Algorithms, Computer Architecture, Embedded Systems, Signals and Systems, Linear Systems, Probability and Statistics, Digital Signal Processing, Control Systems
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;