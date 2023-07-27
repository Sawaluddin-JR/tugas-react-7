import { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import ListProject from "./components/ListProject";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import { createContext } from "react";

export const ThemeContext = createContext({
  theme: null,
  setTheme: () => {},
});

const App = () => {
  const [theme, setTheme] = useState("light");
  return (
    <div
      className={`${
        theme === "light" ? "bg-gray-100 text-black" : "bg-gray-900 text-white"
      }`}
    >
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Navbar />
        <Home />
        <About />
        <Skills />
        <ListProject />
        <Contact />
        <Footer />
      </ThemeContext.Provider>
    </div>
  );
};

export default App;
