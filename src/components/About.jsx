function About() {
  return (
        <section id="about" className="px-10 py-24 bg-gray-100 text-black dark:bg-gray-950 dark:text-white">
      <h2 className="text-4xl font-bold mb-8 text-center">
        About Me
      </h2>

      <div className="max-w-4xl mx-auto text-lg leading-8 text-gray-700 dark:text-gray-300">

        <p>
          I am a passionate software developer interested in cloud computing,
          web development, and mobile app development.
        </p>

        <p className="mt-6">
          I have worked on AWS-based projects using services like S3, Lambda,
          API Gateway, and SES. I am also learning Flutter and React to build
          modern and responsi0ve applications.
        </p>

        <p className="mt-6">
          My goal is to continuously improve my technical skills, contribute to
          meaningful projects, and grow as a software engineer.
        </p>

      </div>

    </section>
  );
}

export default About;