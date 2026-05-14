function Certificates() {

  const certificates = [
    {
      title: "AWS Cloud Certificate",
      issuer: "APSSDC Skill Development",
      file: "/certificates/AWS.pdf",
    },

    {
      title: "Java Certificate",
      issuer: "HackerRank",
      file: "/certificates/java.pdf",
    },

    {
      title: "Python Certificate",
      issuer: "HackerRank",
      file: "/certificates/python.pdf",
    },

    {
      title: "SQL Certificate",
      issuer: "HackerRank",
      file: "/certificates/sql.pdf",
    },

    {
      title: "Software Testing Certificate",
      issuer: "HQL Edutech",
      file: "/certificates/Software testing.pdf",
    },

    {
      title: "Cyber Security Certificate",
      issuer: "Cisco Networking Academy",
      file: "/certificates/cybersecurity.pdf",
    },
    {
      title: "React",
      issuer: "LinkedIn Learning",
      file: "/certificates/react.pdf",
    },
    {
      title: "HTML & CSS",
      issuer: "LinkedIn Learning",
      file: "/certificates/html&css.pdf",
    },
    {
      title: "UI",
      issuer: "UIpath",
      file: "/certificates/ui.pdf",
    },

  ];

  return (

    <section
      id="certificates"
      className="bg-white text-black dark:bg-black dark:text-white px-10 py-24 transition duration-500"
    >

      <h2 className="text-4xl font-bold text-center mb-16">
        Certificates
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">

        {certificates.map((certificate, index) => (

          <div
            key={index}
            className="bg-gray-200 dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:scale-105 transition duration-300"
          >

            <h3 className="text-2xl font-bold mb-4 text-blue-500">
              {certificate.title}
            </h3>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Issued by {certificate.issuer}
            </p>

            <a
              href={certificate.file}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition"
            >
              View Certificate
            </a>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Certificates;