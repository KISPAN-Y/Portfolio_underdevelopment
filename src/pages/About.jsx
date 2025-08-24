import aboutImage from '../assets/images/kpy.png';
import resume from '../documents/Resume.docx'

const About = () => {
  return (
    <section id="about" className="about-page">
      <div className="container">
        <h2 className="section-title white">About Me</h2>
        <div className="about-content">
          <div className="about-image">
            <img src={aboutImage} alt="About me" className="profile-image animate-left delay-3" />
          </div>
          <div className="about-text">
            <p>
              I'm a passionate full-stack developer with 5+ years of experience creating
              web applications and digital experiences. My journey began with graphic design,
              which gave me a strong foundation in UI/UX principles that I bring to every project.
            </p>
            <p>
              I specialize in JavaScript ecosystems (React, Next.js, Node.js) and Python (Django).
              My design background allows me to bridge the gap between beautiful interfaces and
              robust backend systems.
            </p>
            <p>
              When I'm not coding, you can find me contributing to open-source projects,
              writing technical articles, or exploring new design trends and technologies.
            </p>
            <div className="about-details">
              <div className="detail-item">
                <h3>Name:</h3>
                <p className='p animate-left'>KISPANY Developer</p>
              </div>
              <div className="detail-item">
                <h3>Email:</h3>
                <p className='p opacity-0 animate-left delay-5'>kispany@gmail.com</p>
              </div>
              <div className="detail-item">
                <h3>Experience:</h3>
                <p>2+ Years</p>
              </div>
              <div className="detail-item">
                <h3>Location:</h3>
                <p>Sakina, Arusha</p>
              </div>
            </div>
            <a href={resume} className="btn btn-primary bounce bounce-hover-none" download>
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;