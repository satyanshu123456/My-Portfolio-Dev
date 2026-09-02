import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <p className="contact-subtitle">Get In Touch</p>

      <h2>Contact Me</h2>

      <p className="contact-description">
        Feel free to contact me for any project, job opportunity or
        collaboration.
      </p>

      <div className="contact-container">

        <div className="contact-info">
          <h3>Let's Talk</h3>

          <p>
            I am open to discussing new projects, opportunities and
            collaborations.
          </p>

          <p>📧 Email: satyanshugautam6@gmail.com</p>
          <p>📍 Location: Bhopal, India</p>
        </div>

        <form className="contact-form">
          <input
            type="text"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            required
          />

          <textarea
            placeholder="Your Message"
            rows="6"
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>

      </div>
    </section>
  );
}

export default Contact;