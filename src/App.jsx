import { useState } from "react";
import { motion } from "framer-motion";

import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Socials from "./components/Socials";
import Contact from "./components/Contact";

function App() {

  const [darkMode, setDarkMode] = useState(false);

  return (

    <div className={darkMode ? "dark" : ""}>

      <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white transition-all duration-500">

        <Navbar />

        {/* Theme Toggle Button */}

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="fixed top-24 right-6 z-50 bg-gray-300 dark:bg-gray-800 p-3 rounded-full shadow-lg hover:scale-110 transition-all duration-300"
        >

          {darkMode ? (

            /* Sun Icon */

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-yellow-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364 6.364l-1.414-1.414M7.05 7.05 5.636 5.636m12.728 0-1.414 1.414M7.05 16.95l-1.414 1.414M12 7a5 5 0 100 10 5 5 0 000-10z"
              />
            </svg>

          ) : (

            /* Moon Icon */

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 12.79A9 9 0 1111.21 3c0 .28.02.56.05.83A7 7 0 0021 12.79z"
              />
            </svg>

          )}

        </button>

        {/* Hero Section */}

        {/* Hero Section */}

<div
  className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center px-6"
  style={{
    backgroundImage: "url('src/bg.jpg')",
  }}
>

  {/* Dark Overlay */}

  <div className="absolute inset-0 bg-black/80"></div>

  {/* Glowing Background */}

  <motion.div
    animate={{
      y: [0, -30, 0],
      x: [0, 20, 0],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
    }}
    className="absolute w-96 h-96 bg-blue-500 opacity-20 rounded-full blur-3xl top-10 left-10"
  />

  <motion.div
    animate={{
      y: [0, 40, 0],
      x: [0, -20, 0],
    }}
    transition={{
      duration: 10,
      repeat: Infinity,
    }}
    className="absolute w-96 h-96 bg-purple-500 opacity-20 rounded-full blur-3xl bottom-10 right-10"
  />

  {/* Main Content */}

  <div className="relative z-10 max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-16">

    {/* Left Content */}

    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="text-center md:text-left"
    >

      <div className="inline-block px-5 py-2 border border-blue-500 rounded-full text-blue-400 mb-6">
        Hello, I'm
      </div>

      <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
        Akhil Akasapu
      </h1>

      <p className="text-2xl text-gray-300 mb-6">
        AWS | React | Flutter Developer
      </p>

      <p className="text-gray-400 text-lg leading-8 max-w-2xl mb-10">
        Passionate developer building scalable and efficient web and mobile applications.
        I love turning ideas into real-world solutions.
      </p>

      {/* Social Icons */}

      <div className="flex gap-5 justify-center md:justify-start mb-10">

        <a
          href="https://www.linkedin.com/in/akasapu-akhil-3b58832a5/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-900 hover:bg-blue-500 p-4 rounded-xl transition duration-300"
        >
          <span className="text-2xl">💼</span>
        </a>

        <a
          href="https://github.com/Akhil9944"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-900 hover:bg-purple-500 p-4 rounded-xl transition duration-300"
        >
          <span className="text-2xl">💻</span>
        </a>

        <a
          href="https://www.instagram.com/phantom_.deluxe/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-900 hover:bg-pink-500 p-4 rounded-xl transition duration-300"
        >
          <span className="text-2xl">📷</span>
        </a>

      </div>

      {/* Resume Button */}

      <a
        href="/my resume1.pdf"
        download
        className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-2xl text-lg font-semibold hover:scale-105 transition duration-300 shadow-2xl"
      >
        Download Resume
      </a>

    </motion.div>

    {/* Right Image */}

    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="relative"
    >

      {/* Glow */}

      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur-2xl opacity-70 scale-110"></div>

      {/* Image */}

      <img
        src="/me.jpeg"
        alt="Akhil"
        className="relative w-[350px] h-[350px] md:w-[450px] md:h-[450px] object-cover rounded-full border-4 border-blue-500 shadow-[0_0_50px_rgba(59,130,246,0.7)]"
      />

    </motion.div>

  </div>

</div>

        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Socials />
        <Contact />

      </div>

    </div>

  );
}

export default App;