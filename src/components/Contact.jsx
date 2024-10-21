import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'; // Import external CSS for styling';


const Contact = () => {
  
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        'service_8760sm9', // Replace with your EmailJS service ID
        'contact_form', // Replace with your EmailJS template ID
        form.current,
        'qjjJzQMPuLOVL_gnn' // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccessMessage('Message sent successfully!');
          setLoading(false);
          e.target.reset(); // Reset form fields after successful submission
        },
        (error) => {
          console.error(error.text);
          setSuccessMessage('Failed to send message. Please try again.');
          setLoading(false);
        }
      );
  };

  return (
    <div className="form-container">
      <h2>Get in Touch</h2>
      <form ref={form} onSubmit={sendEmail} className="form">
        <div className="form-group">
          <input 
            type="text" 
            name="user_name" 
            placeholder="Your Name" 
            required 
          />
        </div>
        <div className="form-group">
          <input 
            type="email" 
            name="user_email" 
            placeholder="Your Email" 
            required 
          />
        </div>
        <div className="form-group">
          <textarea 
            name="message" 
            placeholder="Your Message" 
            rows="5" 
            required 
          ></textarea>
        </div>
        
        <button type="submit" className="submit-button" disabled={loading}>
          {loading ? 'Sending...' : 'Send Message'}
        </button>
        {successMessage && <p className="success-message">{successMessage}</p>}
      </form>


      <h1>PDF Modal Example</h1>

    </div>
  );
};

export default Contact;
