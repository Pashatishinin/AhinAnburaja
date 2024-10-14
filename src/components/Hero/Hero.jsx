import React, {useLayoutEffect, useEffect, useRef, useState} from 'react'
import gsap from 'gsap'
import './Hero.css'

import ScrollReveal from "scrollreveal";

export default function Hero() {
  const headerRef = useRef(null);
  const websiteContentRef = useRef(null);
  const lettersRefs = useRef([]);

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [headtext, setHeadtext] = useState([]); // Состояние для headtext
  const [orderPairs, setOrderPairs] = useState([]); // Состояние для orderPairs

  const sectionHeight = 150;

  useEffect(() => {
    // Устанавливаем headtext в зависимости от ширины экрана
    if (screenWidth <= 640) {
      setHeadtext(["AHIN", "ANBURAJA"]); // Мобильная версия
      setOrderPairs([[0], [1]]); // Пары для мобильной версии
    } else {
      setHeadtext([
        "A",
        "H",
        "I",
        "N",
        "\u00A0",
        "A",
        "N",
        "B",
        "U",
        "R",
        "A",
        "J",
        "A",
      ]);
      setOrderPairs([
        [6, 7],
        [5, 8],
        [3, 9],
        [2, 10],
        [1, 11],
        [0, 12],
      ]); // Пары для десктопа // Десктопная версия
    }
  }, [screenWidth]); // Запускаем эффект при изменении screenWidth

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    ScrollReveal().reveal(".hero-block", {
      origin: "bottom",
      distance: "200px",
      duration: 800,
      delay: 50,
      interval: 100,
      opacity: 0,
      easing: "ease-in-out", // Тип плавности анимации
      reset: false, // Отключаем повторение анимации при прокрутке назад
      beforeReveal: (el) => {
        el.style.opacity = 0; // Перед анимацией делаем элемент полностью прозрачным
        el.style.transform = "translateY(200px)"; // Начальная позиция для движения
      },
      afterReveal: (el) => {
        el.style.opacity = 1; // После анимации делаем элемент видимым
        el.style.transform = "translateY(0)"; // Устанавливаем конечную позицию
      },
    });
    ScrollReveal().reveal(".circle_main", {
      duration: 2000,
      scale: 1,
      delay: 200,
      easing: "ease-in-out", // Тип плавности анимации
      reset: false, // Отключаем повторение анимации при прокрутке назад
      beforeReveal: (el) => {
        el.style.opacity = 0; // Перед анимацией делаем элемент полностью прозрачным
      },
      afterReveal: (el) => {
        el.style.opacity = 1; // После анимации делаем элемент видимым
      },
    });
  }, []);

  useEffect(() => {
    const header = headerRef.current;
    const websiteContent = websiteContentRef.current;
    const letters = lettersRefs.current;

    let lastScroll = 0;

    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Обновляем позицию `websiteContent` в зависимости от прокрутки
      if (scrollY < 900) {
        websiteContent.style.position = "fixed";
        websiteContent.style.top = "0px";
      } else {
        websiteContent.style.position = "absolute";
        websiteContent.style.top = "900px";
      }

      // Анимация букв при прокрутке
      orderPairs.forEach((pair, orderIndex) => {
        const startScroll = sectionHeight * orderIndex;

        if (scrollY >= startScroll) {
          const moveFactor = Math.min(
            1,
            (scrollY - startScroll) / sectionHeight
          );
          const translateY = -moveFactor * (header.offsetHeight * 1.25);

          pair.forEach((idx) => {
            const letter = letters[idx];
            gsap.to(letter, {
              y: translateY,
              zIndex: 1 - moveFactor,
            });
          });
        } else {
          pair.forEach((idx) => {
            const letter = letters[idx];
            gsap.to(letter, {
              y: 0,
              zIndex: 1,
            });
          });
        }
      });

      lastScroll = scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [orderPairs]);

  return (
    <>
      <section
        className="hero text-gray-800 font-montserrat h-screen mb-96 py-16"
        id="hero"
      >
        <div className="hero-block">
          <h1 className="text-gray-100 text-center sm:text-2xl z-1 font-normal tracking-widest uppercase">
            My name is
          </h1>
        </div>
        <div
          className="text-6xl sm:text-8xl  lg:text-large xl:text-extralarge
        hero-block flex flex-col sm:flex-row fixed items-center justify-center leading-none mt-20 sm:mt-16 md:mt-16 -top-1 p-8 z-1 w-full   font-black"
          ref={headerRef}
        >
          {headtext.map((char, index) => (
            <div
              key={index}
              className="letter"
              ref={(el) => (lettersRefs.current[index] = el)}
            >
              <h1 className="font-oswald font-bold text-gray-100">{char}</h1>
            </div>
          ))}
        </div>

        <div ref={websiteContentRef} className="w-full fixed top-0 overflow-hidden">
          <div className="flex justify-center">
            <div className="absolute circle_main circle rounded-full"></div>
          </div>
          <div className="hero-block">
            <h1 className="mt-96 text-gray-100 text-center sm:text-2xl  font-normal tracking-widest uppercase">
              And i am a
            </h1>
          </div>
          <h3 className="p-5 hero-block text-4xl sm:text-5xl tracking-widest font-medium text-center font-oswald uppercase  mb-28 bg-gradient-to-r text-transparent bg-clip-text from-cyan-500 via-cyan-500 to-sky-600 ">
            Product manager
          </h3>
          <div className="hero-block hero_box text-center w-1/2 md:w-2/5 lg:w-1/4 mx-auto relative mb-96 ">
            <i className="sm:text-xl absolute bx bxs-quote-alt-left -bottom-10 -left-10 text-gray-300"></i>
            <h4 className=" font-montserrat sm:text-2xl font-medium text-gray-300 tracking-widest">
              Moving together with your product at every stage
            </h4>
            <i className="sm:text-xl absolute bx bxs-quote-alt-right -top-10 -right-10 text-gray-300"></i>
          </div>
        </div>
      </section>

      {/* Space between section */}
      <div className="py-20 h-96 mb-10"></div>
    </>
  );
}
  