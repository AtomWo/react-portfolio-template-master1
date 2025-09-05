import React from "react";
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';
import gafLogo from '../assets/images/GAF_Energy_logo.png';
import bayerLogo from '../assets/images/Logo_Bayer.svg.png';
import ucdavisLogo from '../assets/images/davis.png';

const labelsFirst = [
    "Python",
    "HTML",
    "SPCI",
    "ASCII",
    "TKinter",
    "PyVISA",
    "RS-232",
    "Keysight DAQ",
    "TDK-Lambda Z+",
    "Github",
    "Pandas"
];

const labelsSecond = [
    "SAP",
    "AutoCAD",
    "Schneider Electric",
    "Siemens",
    "NFPA 70E",
    "NFPA 79",
    "OSHA",
    'SCADA'
];

const labelsThird = [
    "OpenMV",
    "Altium Designer",
    "Python",
    "PID Control",
    "Blob Detection",
    "Pulse Width Modulation",
    "Microcontrollers"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Experience</h1>
            <div className="skills-grid">
                <div className="skill">
                    <img src={gafLogo} alt="GAF Energy" style={{ width: '100px', height: '100px', objectFit: 'contain' }} />
                    <h3>GAF Energy: Electro-Mechanical Engineering Intern</h3>
                    <p>Engineered Python-based HMI to automate PV module reliability testing per IEC Standard 61730. Architected control logic for 16 power supplies and multiple DAQ systems. Developed Tkinter GUI for dynamic power supply assignment and designed PyVISA communication protocols over RS-232.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <img src={bayerLogo} alt="Bayer" style={{ width: '100px', height: '100px', objectFit: 'contain' }} />
                    <h3>Bayer Pharmaceuticals: Central Utilites Electrical Engineer Intern</h3>
                    <p>Conducted low/medium voltage power system maintenance and created 20 Energized Work Permits. Calculated EV charging capacity for three-phase transformers, ensuring 125% compliance and installing six additional charging stations. Analyzed voltage regulators and transformer feeds in Delta/Y configurations.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Protocols:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;