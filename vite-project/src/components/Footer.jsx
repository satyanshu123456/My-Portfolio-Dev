import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <h2>Satyanshu Gautam</h2>

      <p>MERN Stack Developer</p>

      <div className="footer-links">
        <a href="https://github.com/" target="_blank" rel="noreferrer">
          GitHub
        </a>

        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
          LinkedIn
        </a>

        <a href="mailto:satyanshugautam6@gmail.com">
          Email
        </a>
      </div>

      <p className="copyright">
        © 2026 Satyanshu Gautam. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;