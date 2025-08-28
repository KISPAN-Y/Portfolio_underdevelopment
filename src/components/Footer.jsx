const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-about">
            <h3 className="footer-title">DevPortfolio</h3>
            <p>
              A professional portfolio showcasing my full-stack development
              and design work. Building digital experiences with passion.
            </p>
          </div>
          <div className="footer-links">
            <h3 className="footer-title">Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/#projects">Projects</a></li>
              <li><a href="/#skills">Skills</a></li>
              <li><a href="/#contact">Contact</a></li>
              <li><a href="/#blog">Blog</a></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h3 className="footer-title">Contact Info</h3>
            <ul>
              <p>Sakina, Arusha</p>
              <p>kispany@gmail.com</p>
              <p>+255 659 418 404</p>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Kispan. All rights reserved.</p>
          <div className="social-links">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github blue"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin blue"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter blue"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-dribbble blue"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;