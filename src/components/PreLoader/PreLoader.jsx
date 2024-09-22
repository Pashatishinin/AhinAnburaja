import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Preloader = ({ onFinish }) => {
  const wordRefs = useRef([]);
  wordRefs.current = [];

  const addToRefs = (el) => {
    if (el && !wordRefs.current.includes(el)) {
      wordRefs.current.push(el);
    }
  };

  useEffect(() => {
    // Показ слов поочередно
    const tl = gsap.timeline({ onComplete: onFinish });

    wordRefs.current.forEach((el, index) => {
      tl.fromTo(
        el,
        { opacity: 0 },
        { opacity: 1, duration: 0.2, delay: 0.1, ease: "Power3.easeInOut" }
      ).to(el, { opacity: 0, duration: 0.1, delay: 0.1 });
    });
  }, [onFinish]);

  const words = ["Hello!", "Salut!", "你好!", "Hallo!"];

  return (
    <section className="flex justify-center items-center text-center h-screen">
      {words.map((word, index) => (
        <div
          ref={addToRefs}
          key={index}
          className="absolute
        font-montserrat font-bold  text-gray-100 
        text-5xl sm:text-6xl md:text-8xl xl:text-9xl
        opacity-0
        "
        >
          {word}
        </div>
      ))}
    </section>
  );
};


export default Preloader;
