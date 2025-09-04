import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import 'Screenshot 2024-07-12 at 11.26.13 PM.png'

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="Screenshot 2024-07-12 at 11.26.13 PM.png" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/AtomWo" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/adam-wong-09061b22b/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Adam Wong</h1>
          <p>Electrical Engineer @ UC Davis</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/AtomWo" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/adam-wong-09061b22b/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;