import PageNav from "../components/PageNav";

function Contact() {
  return (
    <>
      <PageNav />
      <div
        id="contact"
        className="w-full px-[12%] py-10 pt-20 bg-[url('./footer-bg-color.png')] bg-no-repeat bg-[length:90%_auto] bg-center"
      >
        <h2 className="text-center text-5xl mt-20">Get In Touch</h2>
        <p className="text-center max-w-2xl mx-auto my-5">
          Hello! I am here to help you with your projects. Please contact me for
          detailed information about your projects or to request a quote. I will
          respond to your questions as soon as possible! Thank you and see you
          soon!
        </p>

        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="max-w-2xl mx-auto"
        >
          <input
            type="hidden"
            name="access_key"
            value="0ceaa245-302c-4b21-8747-b603fde2067e"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-8">
            <input
              required
              name="name"
              type="text"
              placeholder="Enter your name"
              className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
            />
            <input
              required
              name="email"
              type="email"
              placeholder="Enter your email"
              className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
            />
          </div>
          <textarea
            required
            name="message"
            rows="6"
            placeholder="Enter your message"
            className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6"
          ></textarea>
          <button className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-16 hover:bg-[#e3e7eb] duration-500">
            Submit <img src="./up-arrow-icon.png" alt="" className="w-6" />
          </button>
        </form>
        <div className="mt-20">
          <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
            <p>© 2024 | Ioxx.</p>
            <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
              <li>
                <a href="https://www.linkedin.com/" target="_blank">
                  <img src="./linkedin-icon.png" alt="" className="w-10" />
                </a>
              </li>
              <li>
                <a href="https://github.com/" target="_blank">
                  <img src="./github-icon.png" alt="" className="w-10" />
                </a>
              </li>
              <li>
                <a href="https://leetcode.com/" target="_blank">
                  <img src="./leetcode-icon.png" alt="" className="w-6" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
