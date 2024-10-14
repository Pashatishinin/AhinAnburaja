import { useState } from "react";
import viteLogo from "/vite.svg";
import Hero from "./components/Hero/Hero";
import Service from "./components/Service/Service";
import About from "./components/About/About";
import Country from "./components/Country/Country";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";
import Header from "./components/Header/Header";
import ArchiveProject from "./components/Projects/ArchiveProject.jsx";
import Preloader from "./components/PreLoader/PreLoader.jsx"
import MainContent from "./components/MainContent/MainContent.jsx"



import "./App.css";
import "./index.css";

function App() {

  const [loading, setLoading] = useState(true);

  // Функция для завершения preloader'а
  const handleFinish = () => {
    setLoading(false);
  };


  return (
    <>
      {loading ? <Preloader onFinish={handleFinish} /> : <MainContent />}
      {/* <Service /> 
      <About/>
      <Country/> */}
      {/* <Header />
      <Hero /> */}

      {/* <Service />
      <Projects />

      <ArchiveProject /> */}
      {/* <About /> */}

      {/* <Country /> */}
      {/* <Contact /> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;
