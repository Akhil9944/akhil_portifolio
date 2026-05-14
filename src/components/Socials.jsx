function Socials() {

  return (

    <section
      id="socials"
      className="bg-gray-100 text-black dark:bg-gray-950 dark:text-white px-10 py-24 transition duration-500"
    >

      <h2 className="text-4xl font-bold text-center mb-16">
        socials
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">

        {/* GitHub */}

        <a
          href="https://github.com/Akhil9944"
          target="_blank"
          rel="noopener noreferrer"
        >

          <div className="bg-white dark:bg-black p-8 rounded-2xl shadow-lg hover:scale-105 transition duration-300 text-center">

            <h3 className="text-2xl font-bold mb-4 text-blue-500">
              GitHub
            </h3>

            <p className="text-gray-700 dark:text-gray-300">
              Explore my repositories and development projects.
            </p>

          </div>

        </a>

        {/* LinkedIn */}

        <a
          href="https://www.linkedin.com/in/akasapu-akhil-3b58832a5/"
          target="_blank"
          rel="noopener noreferrer"
        >

          <div className="bg-white dark:bg-black p-8 rounded-2xl shadow-lg hover:scale-105 transition duration-300 text-center">

            <h3 className="text-2xl font-bold mb-4 text-blue-500">
              LinkedIn
            </h3>

            <p className="text-gray-700 dark:text-gray-300">
              Connect with me professionally and view my profile.
            </p>

          </div>

        </a>

        {/* HackerRank */}

        <a
          href="https://codolio.com/profile/akhil_"
          target="_blank"
          rel="noopener noreferrer"
        >

          <div className="bg-white dark:bg-black p-8 rounded-2xl shadow-lg hover:scale-105 transition duration-300 text-center">

            <h3 className="text-2xl font-bold mb-4 text-blue-500">
              Codilio
            </h3>

            <p className="text-gray-700 dark:text-gray-300">
              Check out my coding profile
            </p>

          </div>

        </a>

      </div>

    </section>

  );
}

export default Socials;