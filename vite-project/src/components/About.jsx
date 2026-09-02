import "./About.css";

function About() {
  return (
    <section className="about" id="about">

      <div className="about-content">

        <p className="section-title">Get To Know Me</p>

        <h2>About Me</h2>

        <p>
          I am a passionate Computer Science graduate and MERN Stack Developer
          who enjoys building modern and user-friendly web applications.
        </p>

        <p>
          I have experience working with React, JavaScript, Node.js,
          Express.js and MongoDB. I am always interested in learning new
          technologies and solving real-world problems through code.
        </p>

        <div className="about-info">
          <div>
            <strong>Education</strong>
            <span>B.Tech CSE (AIML)</span>
          </div>

          <div>
            <strong>Location</strong>
            <span>Bhopal, India</span>
          </div>

          <div>
            <strong>Focus</strong>
            <span>MERN Stack Development</span>
          </div>
        </div>

      </div>

    </section>
  );
}

export default About;