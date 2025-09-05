import React from "react";
import CAN from '../assets/images/CAN.png';
import Smart from '../assets/images/Smart.jpg';
import PAN from '../assets/images/PAN.png';
import ML from '../assets/images/ML.png';
import auto from '../assets/images/AUTO.png';
import cake from '../assets/images/cake.png';
import lol from '../assets/images/lol.png';

import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';


function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://yujisatojr.itch.io/spacecraft" target="_blank" rel="noreferrer"><img src={cake} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://yujisatojr.itch.io/spacecraft" target="_blank" rel="noreferrer"><h2>Senior Design: Autonomous Vehicle </h2></a>
                <p>Achieved 1st place fastest time from 20 teams in autonomous vehicle system using Python and OpenMV camera for real-time lane detection via blob detection/regions of interest(ROI), optimizing lane tracking through deflection angles.</p>
            </div>
            <div className="project">
                <a href="https://www.filmate.club/" target="_blank" rel="noreferrer"><img src={ML} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.filmate.club/" target="_blank" rel="noreferrer"><h2>Pill Counter</h2></a>
                <p>Developed a economical and efficient alternative to pill counting within Pharmaceuticals utilizing OpenCV and Python Object Oriented Programming.</p>
            </div>
            <div className="project">
                <a href="https://yujisatojr.itch.io/highspeedchase" target="_blank" rel="noreferrer"><img src={Smart} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://yujisatojr.itch.io/highspeedchase" target="_blank" rel="noreferrer"><h2>Pan Lab: Smart-Probes</h2></a>
                <p>Developed and debugged Nordic semiconductor modeled “SmartProbes” using C/C++ assembly and Zephyr’s interprocess communication mechanisms, utilizing eSPI IDE and ESP-32 for input output communication and memory allocation.</p>
            </div>
            <div className="project">
                <a href="https://yujisatojr.itch.io/spacecraft" target="_blank" rel="noreferrer"><img src={CAN} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://yujisatojr.itch.io/spacecraft" target="_blank" rel="noreferrer"><h2>CAN Breakout Board (Formula Racing) </h2></a>
                <p>Utilizing Altium Designer for the block diagram, schematic capture, and layout design of the Formula SAE racecar’s PCBs enabling real-time communication between ECUs for CAN protocol and loopback testing logic.</p>
            </div>
            <div className="project">
                <a href="https://devpost.com/software/unitrans-bus-tracker" target="_blank" rel="noreferrer"><img src={lol} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://devpost.com/software/unitrans-bus-tracker" target="_blank" rel="noreferrer"><h2>Unitrans Bus Tracker 2.0 </h2></a>
                <p>Engineered a Raspberry Pi–based real-time bus tracking system integrating GPS and data processing to optimize public transport efficiency, improve passenger experience, and enable precise transportation management.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;