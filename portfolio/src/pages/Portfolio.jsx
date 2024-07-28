import PageNav from "../components/PageNav";

function Portfolio() {
  return (
    <>
      <PageNav />
      <div id="portfolio" className="w-full px-[12%] pt-20">
        <h2 className="text-center text-5xl pt-10">My latest works</h2>
        <p className="text-center max-w-2xl mx-auto mt-5 mb-4">
          I am happy to see the projects where I take your business one step
          further by providing creative and effective solutions. I prioritize
          customer satisfaction and business success with successful projects in
          the fields of web development, digital marketing and content
          management. Feel free to follow new projects!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 my-10 gap-5">
          <div className="aspect-square bg-[url('./work1.png')] bg-no-repeat bg-contain bg-left rounded-lg relative cursor-pointer group">
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
              <div>
                <h2 className="font-semibold">Frontend Project</h2>
                <p className="text-sm text-gray-700">
                  Website Design w Tailwind
                </p>
              </div>
              <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-200 transition">
                <img src="./send-icon.png" alt="send-icon" className="w-5" />
              </div>
            </div>
          </div>
          <div className="aspect-square bg-[url('./work2.png')] bg-no-repeat bg-contain bg-center rounded-lg relative cursor-pointer group">
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
              <div>
                <h2 className="font-semibold">Frontend Project</h2>
                <p className="text-sm text-gray-700">
                  Healthy-Food Website Design
                </p>
              </div>
              <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-200 transition">
                <img src="./send-icon.png" alt="send-icon" className="w-5" />
              </div>
            </div>
          </div>
          <div className="aspect-square bg-[url('./work2-2.png')] bg-no-repeat bg-contain bg-center rounded-lg relative cursor-pointer group">
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
              <div>
                <h2 className="font-semibold">Frontend Project</h2>
                <p className="text-sm text-gray-700">
                  Healthy-Food Website Design
                </p>
              </div>
              <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-200 transition">
                <img src="./send-icon.png" alt="send-icon" className="w-5" />
              </div>
            </div>
          </div>
          <div className="aspect-square bg-[url('./work3.png')] bg-no-repeat bg-contain bg-center rounded-lg relative cursor-pointer group">
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
              <div>
                <h2 className="font-semibold">Web Project</h2>
                <p className="text-sm text-gray-700">
                  Integratable Web Applications
                </p>
              </div>
              <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-200 transition">
                <img src="./send-icon.png" alt="send-icon" className="w-5" />
              </div>
            </div>
          </div>
          <div className="aspect-square bg-[url('./work4.png')] bg-no-repeat bg-contain bg-center rounded-lg relative cursor-pointer group">
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
              <div>
                <h2 className="font-semibold">Web Project</h2>
                <p className="text-sm text-gray-700">Consultant Landing Page</p>
              </div>
              <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-200 transition">
                <img src="./send-icon.png" alt="send-icon" className="w-5" />
              </div>
            </div>
          </div>
          <div className="aspect-square bg-[url('./work4-1.png')] bg-no-repeat bg-contain bg-center rounded-lg relative cursor-pointer group">
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
              <div>
                <h2 className="font-semibold">Web Project</h2>
                <p className="text-sm text-gray-700">Consultant Landing Page</p>
              </div>
              <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-200 transition">
                <img src="./send-icon.png" alt="send-icon" className="w-5" />
              </div>
            </div>
          </div>
          <div className="aspect-square bg-[url('./work4-2.png')] bg-no-repeat bg-contain bg-center rounded-lg relative cursor-pointer group">
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
              <div>
                <h2 className="font-semibold">Web Project</h2>
                <p className="text-sm text-gray-700">Consultant Landing Page</p>
              </div>
              <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-200 transition">
                <img src="./send-icon.png" alt="send-icon" className="w-5" />
              </div>
            </div>
          </div>
        </div>
        <a
          href="/contact"
          className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-10 hover:bg-[#e3e7eb] duration-500"
        >
          Explore{" "}
          <img src="./arrow-icon.png" alt="arrow-icon" className="w-4" />
        </a>
      </div>
    </>
  );
}

export default Portfolio;
