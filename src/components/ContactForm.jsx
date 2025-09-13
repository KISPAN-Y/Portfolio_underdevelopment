import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrors({});

    try {
      const response = await fetch('http://192.168.0.129:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus({ 
          type: 'success', 
          message: result.message,
          details: 'Your message has been sent successfully! You should receive a confirmation email shortly.'
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        if (result.errors) {
          setErrors(result.errors);
        }
        setSubmitStatus({ 
          type: 'error', 
          message: result.message || 'Failed to send message. Please try again.',
          details: result.errors ? result.errors.join(' ') : 'Please check your information and try again.'
        });
      }
    } catch (error) {
      setSubmitStatus({ 
        type: 'error', 
        message: 'Network error. Please check your connection and try again.',
        details: 'Unable to connect to the server. Please check your internet connection.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-form-container">
      <form action="" method="POST" className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className={`input backdrop-blur-10 ${errors.name ? 'error' : ''}`}
            value={formData.name}
            onChange={handleChange}
            required
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>
        
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className={`input backdrop-blur-10 ${errors.email ? 'error' : ''}`}
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>
        
        <div className="form-group">
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className={`input backdrop-blur-10 ${errors.subject ? 'error' : ''}`}
            value={formData.subject}
            onChange={handleChange}
            required
          />
          {errors.subject && <span className="error-message">{errors.subject}</span>}
        </div>
        
        <div className="form-group">
          <textarea
            name="message"
            placeholder="Your Message"
            className={`input backdrop-blur-10 white ${errors.message ? 'error' : ''}`}
            value={formData.message}
            onChange={handleChange}
            required
            rows="6"
          ></textarea>
          {errors.message && <span className="error-message">{errors.message}</span>}
        </div>
        
        <button 
          type="submit" 
          className={`btn opacity-1 btn-form ${isSubmitting ? 'loading' : ''}`}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <span className="spinner"></span>
              Sending...
            </>
          ) : (
            'Send Message'
          )}
        </button>
      </form>

      {/* Status Messages */}
      {submitStatus && (
        <div className={`status-message ${submitStatus.type}`}>
          <div className="status-header">
            {submitStatus.type === 'success' ? '✅ Success!' : '❌ Error'}
          </div>
          <div className="status-content">
            <p><strong>{submitStatus.message}</strong></p>
            {submitStatus.details && <p>{submitStatus.details}</p>}
          </div>
          {submitStatus.type === 'error' && (
            <button 
              className="btn btn-secondary"
              onClick={() => setSubmitStatus(null)}
            >
              Try Again
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default ContactForm;
