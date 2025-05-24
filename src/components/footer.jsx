import './footer.css';

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
