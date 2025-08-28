import { Link } from 'react-router-dom';
// import heroImage from '../assets/images/hero-image.png';
import PauseOnHover from '../components/corousel';


const Home = () => {
  return (
    <section id="home" className="home-page">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title animate-up delay-3">
              Hi, I'm <span className="highlight">KISPANY</span>
            </h1>
            <h2 className="hero-subtitle animate-up delay-2">
              Full Stack Developer & Designer
            </h2>
            <p className="hero-description animate-up delay-1">
              I build exceptional digital experiences with modern technologies.
              Specializing in React, Next.js, Django, and Node.js with an eye for design.
            </p>
            <div className="hero-actions">
              <Link to="/projects" className="btn btn-primary animate-up">
                View My Work
              </Link>
              <Link to="/contact" className="btn btn-secondary white animate-right delay-5">
                Contact Me
              </Link>
            </div>
          </div>
          <div className="hero-image animate-right delay-5">
            {/* <img src={heroImage} alt="Developer working" className="profile-image" /> */}
            <PauseOnHover />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;