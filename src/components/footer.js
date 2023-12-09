
import React from 'react';
import './footer.css';
import image1 from './images/image1 (1).png'; 
import image2 from './images/image2.png';
import image3 from  './images/image3.png';

const Footer = () => {
  return (
    <footer className="footer">
      <footer className="footer">
      <div className="image-container">
        <a href="https://github.com/theraunaksri" target="_blank" rel="noopener noreferrer">
          <img src={image1} alt="Logo 1" className="logo" />
        </a>
        <a href="https://www.instagram.com/theraunaksri/?igshid=YTQwZjQ0NmI0OA%3D%3D" target="_blank" rel="noopener noreferrer">
          <img src={image2} alt="Logo 2" className="logo" />
        </a>
        <a href="https://www.linkedin.com/in/theraunaksri/" target="_blank" rel="noopener noreferrer">
          <img src={image3} alt="Logo 3" className="logo" />
        </a>
      </div>
      <p>&copy; Raunak Srivastava. All rights reserved.</p>
    </footer>
    </footer>
  );
};

export default Footer;
