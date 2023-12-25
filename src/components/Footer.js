import './FooterStyles.css';

import React from 'react';
import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: '#F9EE03 ', marginRight: '2rem' }} />
            <div>
              <p>Chatzimichali 16, Agia</p>
              <p>Larissa, Greece</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: '#F9EE03 ', marginRight: '2rem' }}
              />
              +30 6908450868
            </h4>
          </div>

          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: '#F9EE03 ', marginRight: '2rem' }}
              />
              mrantonp@gmail.com
            </h4>
            
          </div>
        </div>

        <div className="right">
          <h4>About the Company</h4>
          <p>
            This is me Papaioannou Antonis.Founder of Papaioannou.Dev. I
            enjoy discussing new projects and design challenges. <span id='poetry'>`` Where
            Innovation meets Imagination ``</span>
          </p>
          <div className="social">
            

            <FaFacebook
              size={30}
              style={{ color: '#fff', marginRight: '1rem' }}
            />
            <FaTwitter
              size={30}
              style={{ color: '#fff', marginRight: '1rem' }}
            />
            <FaLinkedin
              size={30}
              style={{ color: '#fff', marginRight: '1rem' }}
            />
          </div>
          <h4>
            <span style={{color: "grey"}}>Copyright © 2023 Papaioannou Antonis. All rights reserved.</span> 
            </h4>
        </div>
      </div>
    </div>
    
  );
};

export default Footer;
