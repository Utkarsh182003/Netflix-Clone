import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; 

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__content">
                <p>© 2024 Netflix Clone. All rights reserved.</p>
                <nav>
                    <ul>
                        <li><a href="https://github.com/Utkarsh182003" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} className="footer__icon" /></a></li>
                        <li><a href="https://www.instagram.com/utkarsh.pathak.18/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} className="footer__icon" /></a></li>
                        <li><a href="mailto:utkarshpathak11up@gmail.com" className="footer__email"><FontAwesomeIcon icon={faEnvelope} className="footer__icon" /></a></li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
}

export default Footer;