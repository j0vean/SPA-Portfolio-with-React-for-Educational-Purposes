import PageNav from "../components/PageNav";

function About() {
  return (
    <>
      <PageNav />
      <div
        id="about"
        className="w-full px-[12%] py-10 bg-[url('./footer-bg-color.png')] bg-no-repeat bg-[length:90%_auto] bg-center"
      >
        <h2 className="text-center text-5xl mt-20">About Me</h2>

        <div className="flex w-full flex-col lg:flex-row items-center gap-20 mt-20">
          <div className="max-w-max mx-auto relative mr-22">
            <img
              src="./coder.jpg"
              alt="user-icon"
              className="w-64 sm:w-80 rounded-3xl max-w-none"
            />

            <div className="bg-white w-1/2 aspect-square absolute right-0 bottom-0 rounded-full translate-x-1/4 translate-y-1/3 shadow-[0_4px_55px_rgba(149,0,162,0.15)] flex items-center justify-center">
              <img src="./curved-text.png" alt="" className="w-full" />
              <img
                src="./dev-icon.png"
                alt=""
                className="w-1/4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              />
            </div>
          </div>
          <div className="flex-1">
            <p className="mb-10 max-w-2xl">
              Hello! I&apos;m Alperen. As a passionate Web Developer, I thrive
              on working with new technologies with each project. I enjoy
              creating user-centric designs and solving technical challenges. I
              specialize in frontend development using HTML, CSS, JavaScript,
              and modern frameworks(just react). I also have experience in
              database management and little bit API development. I&apos;m
              always open to developing new ideas and solutions. I look forward
              to collaborating together!
            </p>
            <ul className="grid grid-cols-1 xl:grid-cols-2 gap-6 max-w-2xl">
              <li className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-[#e3e7eb] hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000]">
                <img src="./code-icon.png" alt="" className="w-7 mt-3" />
                <h3 className="my-4 font-semibold text-gray-700">Languages</h3>
                <p className="text-gray-600 text-sm">
                  HTML, CSS, JavaScript, ReactJS, NextJS, NodeJs, ExpressJS, SQL
                </p>
              </li>
              <li className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-[#e3e7eb] hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000]">
                <img src="./edu-icon.png" alt="" className="w-7 mt-3" />
                <h3 className="my-4 font-semibold text-gray-700">Education</h3>
                <p className="text-gray-600 text-sm">CEIT - Gazi Uni.</p>
                <p className="text-gray-600 text-sm">
                  Management Information Systems - Ankara Uni.
                </p>
              </li>
              <li className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-[#e3e7eb] hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000]">
                <img src="./project-icon.png" alt="" className="w-7 mt-3" />
                <h3 className="my-4 font-semibold text-gray-700">Projects</h3>
                <p className="text-gray-600 text-sm">
                  Built more than 5 projects
                </p>
              </li>
              <li className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-[#e3e7eb] hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000]">
                <img src="./tools-icon.png" alt="" className="w-7 mt-3" />
                <h3 className="my-4 font-semibold text-gray-700">Tools</h3>
                <ul className="flex items-center gap-3 sm:gap-5">
                  <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000]">
                    <img
                      src="./vscode-icon.png"
                      alt="vscode-icon"
                      className="w-5 sm:w-7"
                    />
                  </li>
                  <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000]">
                    <img
                      src="./firebase-icon.png"
                      alt="firebase-icon"
                      className="w-5 sm:w-7"
                    />
                  </li>
                  <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000]">
                    <img
                      src="./mongodb-icon.png"
                      alt="mongodb-icon"
                      className="w-5 sm:w-7"
                    />
                  </li>
                  <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000]">
                    <img
                      src="./figma-icon.png"
                      alt="figma-icon"
                      className="w-5 sm:w-7"
                    />
                  </li>
                  <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000]">
                    <img
                      src="./git-icon.png"
                      alt="git-icon"
                      className="w-5 sm:w-7"
                    />
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
