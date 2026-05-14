function Navbar() {
  return (
    <nav className="w-full bg-gray-200 dark:bg-gray-900 text-black dark:text-white px-8 py-4 flex justify-between items-center shadow-lg sticky top-0 z-50 transition duration-500">

      <h1 className="text-2xl font-bold">
        Akhil Akasapu
      </h1>

      <ul className="flex gap-6 text-lg">

        <a href="#about">
          <li className="hover:text-blue-400 cursor-pointer">
            About
          </li>
        </a>

        <a href="#skills">
          <li className="hover:text-blue-400 cursor-pointer">
            Skills
          </li>
        </a>

        <a href="#projects">
          <li className="hover:text-blue-400 cursor-pointer">
            Projects
          </li>
        </a>

        <a href="#certificates">
          <li className="hover:text-blue-400 cursor-pointer">
            Certificates
          </li>
        </a>

        <a href="#socials">
          <li className="hover:text-blue-400 cursor-pointer">
            Socials
          </li>
        </a>

        <a href="#contact">
          <li className="hover:text-blue-400 cursor-pointer">
            Contact
          </li>
        </a>

      </ul>

    </nav>
  );
}

export default Navbar;