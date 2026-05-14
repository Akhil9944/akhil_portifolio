function Skills() {

  const skills = [
    "AWS",
    "React",
    "Flutter",
    "JavaScript",
    "Java",
    "Python",
    "Git & GitHub",
    "CSS"
  ];

  return (
<section id="skills" className="bg-white text-black dark:bg-black dark:text-white px-10 py-24">
      <h2 className="text-4xl font-bold text-center mb-16">
        Skills
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">

        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-200 dark:bg-gray-900 p-8 rounded-2xl text-center shadow-lg hover:scale-105 transition duration-300"
          >
            <h3 className="text-2xl font-semibold">
              {skill}
            </h3>
          </div>
        ))}

      </div>

    </section>
  );
}

export default Skills;