function Projects() {

  const projects = [
    {
      title: "AWS Resume Builder",
      description:
        "A cloud-based resume builder using AWS services like S3, Lambda, API Gateway, and SES.",
    },

    {
      title: "AI Personal Assistant",
      description:
        "Built a desktop voice assistant for controlling media, opening websites, and answering queries.",
    },

    {
      title: "Flutter Learning Apps",
      description:
        "Mobile applications built while learning Flutter widgets and UI development.",
    },
  ];

  return (

    <section
      id="projects"
      className="bg-gray-100 text-black dark:bg-gray-950 dark:text-white px-10 py-24 transition duration-500"
    >

      <h2 className="text-4xl font-bold text-center mb-16">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">

        {projects.map((project, index) => (

          <div
            key={index}
            className="bg-white dark:bg-black border border-gray-300 dark:border-gray-800 p-8 rounded-2xl shadow-lg hover:scale-105 transition duration-300"
          >

            <h3 className="text-2xl font-bold mb-4 text-blue-500">
              {project.title}
            </h3>

            <p className="text-gray-700 dark:text-gray-300 leading-7">
              {project.description}
            </p>

            <button className="mt-6 px-5 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition">
              View Project
            </button>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Projects;