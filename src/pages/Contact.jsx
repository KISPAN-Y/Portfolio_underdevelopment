import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <section id='contact' className="contact-page">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3 className="contact-subtitle">Contact Information</h3>
            <p>
              Feel free to reach out to me for any questions or opportunities.
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <span>kispany@gmail.com</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <span>+255 (555) 123-4567</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>San Francisco, CA</span>
              </div>
            </div>
            <div className="social-links">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-dribbble"></i>
              </a>
            </div>
          </div>
          <div className="contact-form-wrapper">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;