import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faAngellist, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import './Footer.css';


const Footer = () => (
  <footer className="footer">
    {/* <p className="shamelessness">I'm currently looking for work, pls hmu 🥺</p> */}
    <div className="icons">
      <a className="external-link" href="https://www.linkedin.com/in/mendesnathanj/" rel="noopener noreferrer" target="_blank">
        <FontAwesomeIcon className="footer-icon" icon={faLinkedin} />
      </a>
      <a className="external-link" href="https://angel.co/u/nathanmendes" rel="noopener noreferrer" target="_blank">
        <FontAwesomeIcon className="footer-icon" icon={faAngellist} />
      </a>
      <a className="external-link" href="https://github.com/mendesnathanj" rel="noopener noreferrer" target="_blank">
        <FontAwesomeIcon className="footer-icon" icon={faGithub} />
      </a>
      <a className="external-link" href="http://nathanmendes.com/" rel="noopener noreferrer" target="_blank">
        <FontAwesomeIcon className="footer-icon" icon={faUser} />
      </a>
    </div>
  </footer>
);


export default Footer;
