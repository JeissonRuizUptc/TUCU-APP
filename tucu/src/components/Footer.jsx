import React from 'react';
import './styles/Footer.scss';
import youtubeIcon from '../icons/youtubeIcon.png';
import whatsaapIcon from '../icons/whatsaapIcon.png';
import instagramIcon from '../icons/instagramIcon.png';
import facebookIcon from '../icons/facebookIcon.png';
import twitterIcon from '../icons/twitterIcon.png';
import linkedindIcon from '../icons/linkedindIcon.png';

const Footer = () => {
    return(
        <div className='footer'>
            <div className='footer-icons'>
                <img className='footer-icons__image' src={facebookIcon} alt="Facebook" />
                <img className='footer-icons__image' src={whatsaapIcon} alt="WhatsApp" />
                <img className='footer-icons__image' src={instagramIcon} alt="Instagram" />
                <img className='footer-icons__image' src={twitterIcon} alt="Twitter" />
                <img className='footer-icons__image' src={linkedindIcon} alt="Linkedind" />
                <img className='footer-icons__image' src={youtubeIcon} alt="Youtube" />
            </div>
            <div className='footer-text'>
                <p>www.tucu.com</p>
                <p>copyright 2022</p>
            </div>
        </div>
        
    )
}

export default Footer;