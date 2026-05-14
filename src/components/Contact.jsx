function Contact() {
  return (
    <section
      id="contact"
      className="bg-gray-100 text-black dark:bg-gray-950 dark:text-white px-10 py-24 transition duration-500"
    >

      <h2 className="text-4xl font-bold text-center mb-16">
        Contact Me
      </h2>

      <div className="max-w-3xl mx-auto bg-white dark:bg-black p-10 rounded-2xl shadow-lg">

        <div className="mb-6">
          <label className="block mb-2 text-lg">
            Name
          </label>

          <input
            type="text"
            placeholder="Enter your name"
            className="w-full p-4 rounded-xl bg-gray-200 dark:bg-gray-900 border border-gray-700 outline-none"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-lg">
            Email
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-4 rounded-xl bg-gray-200 dark:bg-gray-900 border border-gray-700 outline-none"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-lg">
            Message
          </label>

          <textarea
            rows="5"
            placeholder="Write your message..."
            className="w-full p-4 rounded-xl bg-gray-200 dark:bg-gray-900 border border-gray-700 outline-none"
          ></textarea>
        </div>

        <button className="px-6 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition">
          Send Message
        </button>

      </div>

    </section>
  );
}

export default Contact;