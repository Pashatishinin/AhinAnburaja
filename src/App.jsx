import { useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Preloader from "./components/PreLoader/PreLoader.jsx";
import MainContent from "./components/MainContent/MainContent.jsx";

import "./App.css";
import "./index.css";

function App() {
  gsap.registerPlugin(ScrollTrigger);

  const [loading, setLoading] = useState(true);

  // Функция для завершения preloader'а
  const handleFinish = () => {
    setLoading(false);
  };

  return (
    <>{loading ? <Preloader onFinish={handleFinish} /> : <MainContent />}</>
  );
}

export default App;
