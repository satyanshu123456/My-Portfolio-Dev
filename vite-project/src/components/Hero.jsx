import React from 'react'
import "./Hero.css"

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-content">
        <p className="intro">Hello, I'm</p>

        <h1>Satyanshu Gautam</h1>

        <h2>MERN Stack Developer</h2>

        <p className="description">
          I build modern and responsive web applications
          using React, Node.js, Express and MongoDB.
        </p>

        <div className="hero-buttons">
  <button onClick={() => {
    document.getElementById("projects").scrollIntoView({
      behavior: "smooth"
    });
  }}>
    View My Projects
  </button>

  <a
  href="/resume.pdf"
  download="Satyanshu-Gautam-Resume.pdf"
  className="resume-btn"
>
  Download Resume
</a>
</div>
      </div>

    </section>
  );
}

export default Hero;
