import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(""); // "", "loading", "success", "error"

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.log(error);
      setStatus("error");
    }
  };

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

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" disabled={status === "loading"}>
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p style={{ color: "green", marginTop: "10px" }}>
              Message sent successfully! ✅
            </p>
          )}
          {status === "error" && (
            <p style={{ color: "red", marginTop: "10px" }}>
              Something went wrong. Please try again. ❌
            </p>
          )}
        </form>

      </div>
    </section>
  );
}

export default Contact;