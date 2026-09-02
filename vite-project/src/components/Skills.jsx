import "./skills.css";

function Skills() {
  const skills = [
    {
      title: "Frontend",
      skills: "HTML • CSS • JavaScript • React",
    },
    {
      title: "Backend",
      skills: "Node.js • Express.js",
    },
    {
      title: "Database",
      skills: "MongoDB",
    },
    {
      title: "Tools",
      skills: "Git • GitHub • VS Code",
    },
  ];

  return (
    <section className="skills" id="skills">
      <p className="skills-subtitle">My Technical Skills</p>

      <h2>Skills</h2>

      <div className="skills-container">
        {skills.map((skill) => (
          <div className="skill-card" key={skill.title}>
            <h3>{skill.title}</h3>
            <p>{skill.skills}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;