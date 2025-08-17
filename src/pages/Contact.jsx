import ContactForm from '../components/ContactForm';
import { motion } from 'framer-motion';

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
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 1.}}
                viewport={{ once: false, amount: 0.2 }}
                className="contact-item opacity-0"
              >
                <i className="fas fa-envelope"></i>
                <span>kispany@gmail.com</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 1}}
                viewport={{ once: false, amount: 0.2 }}
                className="contact-item opacity-0"
              >
                <i className="fas fa-phone"></i>
                <span>+255 (555) 123-4567</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                viewport={{ once: false, amount: 0.2 }}
                className="contact-item"
              >
                <i className="fas fa-map-marker-alt"></i>
                <span>San Francisco, CA</span>
              </motion.div>
            </div>
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
          <motion.div
            initial={{ opacity: 1, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.2 }}
            className="contact-form-wrapper"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;