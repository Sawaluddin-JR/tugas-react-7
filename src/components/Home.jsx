import { useContext } from "react";
import { AiFillYoutube, AiFillInstagram, AiFillGithub } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { ThemeContext } from "../App";

const Home = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <img
          src="home-photo.png"
          alt="sawaluddin"
          className="h-full md:w-11/12 object-cover"
        />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1
            className={`md:text-5xl text-2xl md:leading-normal leading-10 font-bold ${
              theme === "light" ? "text-black" : "text-white"
            }`}
          >
            <span className="text-primary md:text-6xl text-5xl">
              Halo!✋
              <br />
            </span>
            Nama Saya <span>Sawaluddin</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            Junior Frontend Developer
          </h4>
          <button className="btn-primary mt-8">Hubungi saya</button>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            <a href="https://www.youtube.com/@Sawalnet">
              <AiFillYoutube
                size={26}
                className={` ${
                  theme === "light"
                    ? "text-gray-900 hover:text-yellow-800"
                    : "text-gray-600 hover:text-white"
                } cursor-pointer`}
              />
            </a>
            <a href="https://www.instagram.com/sawaluddinsiregar_28/">
              <AiFillInstagram
                size={26}
                className={` ${
                  theme === "light"
                    ? "text-gray-900 hover:text-yellow-800"
                    : "text-gray-600 hover:text-white"
                } cursor-pointer`}
              />
            </a>
            <a href="https://github.com/Sawaluddin-JR">
              <AiFillGithub
                size={26}
                className={` ${
                  theme === "light"
                    ? "text-gray-900 hover:text-yellow-800"
                    : "text-gray-600 hover:text-white"
                } cursor-pointer`}
              />
            </a>
            <a href="https://web.telegram.org/a/">
              <FaTelegramPlane
                size={26}
                className={` ${
                  theme === "light"
                    ? "text-gray-900 hover:text-yellow-800"
                    : "text-gray-600 hover:text-white"
                } cursor-pointer`}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
