// import React from 'react'



// function Footer() {
//   return (
//     <div>
//         <nav className="navbar">
//         <div class="logo">CrowbarLtd</div>
            
//         </nav>

//     </div>
//   )
// }

// export default Footer

import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Crowbar Ventures. All rights reserved.</p>
      <div className="footer-links">
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
        <a href="#">Careers</a>
      </div>
    </footer>
  );
};

export default Footer;
