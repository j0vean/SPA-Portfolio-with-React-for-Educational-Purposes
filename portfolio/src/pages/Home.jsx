import PageNav from "../components/PageNav";
import styles from "../components/BubbleText.module.css";

function Home() {
  return (
    <>
      <PageNav />
      <div
        id="home"
        className="w-11/12 max-w-4xl text-center mx-auto flex flex-col items-center justify-center gap-4 bg-[url('./footer-bg-color.png')] bg-no-repeat bg-[length:90%_auto] bg-center"
      >
        <img
          src="./profile-pic.png"
          alt="profile picture"
          className="rounded-full w-32 pt-[20%] mt-20"
        />
        <h3 className="flex items-center gap-2 text-xl md:text-2xl mb-3">
          Hey! I&apos;m Alperen Arslan
          <img src="./hello-icon.png" alt="hand icon" className="w-6" />
        </h3>
        <h1 className="text-3xl sm:text-6xl lg:text-[66px]">
          <BubbleText />
        </h1>
        <p className="max-w-2xl mx-auto">
          While working as a Web Developer, I pursue my work with great passion.
          Creating creative solutions using my technical skills brings me
          immense joy.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
          <a
            href="/contact"
            className="px-10 py-3 border rounded-full bg-gradient-to-tr from-[#405D72] to-[#d7d8da] text-wrap flex items-center gap-2 text-white"
          >
            contact me
            <img src="./right-arrow-icon.png" alt="" className="w-7" />
          </a>
          <a
            href="./ioxx.png"
            download
            className="px-10 py-3 border rounded-full border-gray-500 text-wrap flex items-center gap-2 bg-white"
          >
            my resume
            <img src="./download-icon.png" alt="" className="w-6" />
          </a>
        </div>
      </div>
    </>
  );
}

const BubbleText = () => {
  return (
    <h2 className="text-center text-6xl text-[#2c6e9e]">
      {"web developer based in Türkiye.".split("").map((child, idx) => (
        <span className={styles.hoverText} key={idx}>
          {child}
        </span>
      ))}
    </h2>
  );
};

export default Home;
