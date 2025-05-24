import './header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Crowbar<span>Ltd</span></div>
      <nav className="nav-links">
        <a href="#hero">Home</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
