import PageNav from "../components/PageNav";

function Services() {
  return (
    <>
      <PageNav />
      <div
        id="services"
        className="w-full px-[12%] py-4 bg-[url('./footer-bg-color.png')] bg-no-repeat bg-[length:90%_auto] bg-center"
      >
        <h2 className="text-center text-5xl mt-20">My Services</h2>
        <p className="text-center max-w-2xl mx-auto mt-5 mb-12">
          I offer comprehensive services to help you succeed in the digital
          world. I provide strategic solutions to strengthen your brand in the
          digital space and help you achieve your business goals. Work with me
          to maximize your business digital presence and gain a competitive
          advantage.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
          <div className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-[4px_4px_0_#000] hover:bg-[#e3e7eb] transition duration-300 cursor-pointer hover:-translate-y-1">
            <img src="./design-icon.png" alt="" className="w-10" />
            <h3 className="text-lg my-4 text-gray-700">Web Design</h3>
            <p className="text-sm text-gray-600 leading-5">
              I offer professional web design services to give your business a
              strong presence in the digital world.
            </p>
          </div>
          <div className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-[4px_4px_0_#000] hover:bg-[#e3e7eb] transition duration-300 cursor-pointer hover:-translate-y-1">
            <img src="./development-icon.png" alt="" className="w-10" />
            <h3 className="text-lg my-4 text-gray-700">Web Development</h3>
            <p className="text-sm text-gray-600 leading-5">
              I provide fast, reliable and scalable professional web
              applications using ReactJS, NextJS and NodeJS for modern web
              solutions.
            </p>
          </div>
          <div className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-[4px_4px_0_#000] hover:bg-[#e3e7eb] transition duration-300 cursor-pointer hover:-translate-y-1">
            <img src="./marketing-icon.png" alt="" className="w-10" />
            <h3 className="text-lg my-4 text-gray-700">Digital Marketing</h3>
            <p className="text-sm text-gray-600 leading-5">
              I offer effective PPC, social media management and content
              strategies for your brand to shine in the digital world. Increase
              your online success by reaching your target audience.
            </p>
          </div>
          <div className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-[4px_4px_0_#000] hover:bg-[#e3e7eb] transition duration-300 cursor-pointer hover:-translate-y-1">
            <img src="./seo-icon.png" alt="" className="w-10" />
            <h3 className="text-lg my-4 text-gray-700">
              Search Engine Optimization
            </h3>
            <p className="text-sm text-gray-600 leading-5">
              I strengthen your online visibility by increasing your organic
              traffic through keyword research, technical SEO, content
              optimization and link building strategies.
            </p>
          </div>
          <div className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-[4px_4px_0_#000] hover:bg-[#e3e7eb] transition duration-300 cursor-pointer hover:-translate-y-1">
            <img src="./content-icon.png" alt="" className="w-10" />
            <h3 className="text-lg my-4 text-gray-700">Content Management</h3>
            <p className="text-sm text-gray-600 leading-5">
              With our content strategy development, editing, updating and
              optimization services, I will give your brand a clear voice and
              build a strong connection with your target audience.
            </p>
          </div>
          <div className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-[4px_4px_0_#000] hover:bg-[#e3e7eb] transition duration-300 cursor-pointer hover:-translate-y-1">
            <img src="./consultant-icon.png" alt="" className="w-10" />
            <h3 className="text-lg my-4 text-gray-700">Consultant</h3>
            <p className="text-sm text-gray-600 leading-5">
              I offer customized solutions in strategic planning, process
              improvement and digital transformation to increase your
              productivity and strengthen your business success. Take your
              business one step further with professional guidance and strategic
              advice.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
