import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import "./Header.css";

import ScrollReveal from "scrollreveal";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleButtonRef = useRef(null);
  const timeline = useRef(gsap.timeline({ paused: true }));
  const logoRef = useRef(null);
  const textRefs = useRef([]); // Ссылка на все текстовые элементы меню

  useEffect(() => {
    ScrollReveal().reveal(".nav", {
      origin: "top",
      distance: "200px",
      duration: 2000,
      delay: 200,
    });
  }, []);

  // LOGOTYPE ANIMATION =============================================================== //
  useEffect(() => {
    const logo = logoRef.current;

    const sectionHeight = 150;
    const buffer = 50;
    const orderPairsLength = 6;

    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (
        scrollY >= orderPairsLength * sectionHeight + buffer &&
        !gsap.isTweening(logo)
      ) {
        gsap.to(logo, {
          top: "0px",
          ease: "power1.out",
          overwrite: true,
        });
      } else if (
        scrollY <= (orderPairsLength - 1) * sectionHeight &&
        !gsap.isTweening(logo)
      ) {
        gsap.to(logo, {
          top: "-100px",
          ease: "power1.out",
          overwrite: true,
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // MENU ANIMATION =============================================================== //
  useEffect(() => {
    // Инициализация анимации меню
    gsap.set(".menu-item p", { y: 225 });

    // Создаем анимацию для overlay и пунктов меню
    timeline.current
      .to(".overlay", {
        duration: 1.5,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "power4.inOut",
      })
      .to(
        ".menu-item p",
        {
          duration: 1.5,
          y: 0,
          stagger: 0.2,
          ease: "power4.out",
        },
        "-=1"
      );
  }, []);

  // TEXT ANIMATION =============================================================== //
  useEffect(() => {
    textRefs.current.forEach((element) => {
      if (!element || element.classList.contains("initialized")) return; // Проверка, чтобы не инициализировать элемент повторно

      const innerText = element.innerText;
      element.innerHTML = ""; // Очищаем текст перед добавлением

      const textContainer = document.createElement("div");
      textContainer.classList.add("block");

      for (let char of innerText) {
        const span = document.createElement("span");
        span.innerText = char.trim() === "" ? "\xa0" : char;
        span.classList.add("char");
        textContainer.appendChild(span);
      }

      element.appendChild(textContainer);
      element.appendChild(textContainer.cloneNode(true));

      // Добавляем класс, чтобы пометить, что элемент уже инициализирован
      element.classList.add("initialized");

      const handleMouseOver = () => {
        element.classList.remove("play");
      };

      element.addEventListener("mouseover", handleMouseOver);

      // Удаляем обработчик события при размонтировании
      return () => {
        element.removeEventListener("mouseover", handleMouseOver);
      };
    });
  }, []); //пуск эффекта при изменении состояния меню

  // MENU BURGER ANIMATION =============================================================== //
  const toggleMenu = () => {
    if (isOpen) {
      timeline.current.reverse();
      toggleButtonRef.current.classList.remove("active");
    } else {
      timeline.current.play();
      toggleButtonRef.current.classList.add("active");
    }
    setIsOpen(!isOpen);
  };

  // LINKS CLICK =============================================================== //
  const handleLinkClick = (event, targetId) => {
    event.preventDefault(); // Предотвращаем стандартное поведение

    // Закрываем меню
    toggleMenu();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  

  const handleLogoClick = (event) => {
    event.preventDefault();

    if (isOpen) {
      toggleMenu();
    }

    const heroSection = document.querySelector("#hero");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const texts = [
    { text: "Home", url: "#hero" },
    { text: "My Service", url: "#service" },
    { text: "My Projects", url: "#project" },
    { text: "About me", url: "#about" },
    { text: "Contact", url: "#contact" },
  ];

  return (
    <section>
      <div className="nav mix-blend-difference ">
        <div className="logo relative ">
          <a
            href="#hero"
            className=" relative tracking-huge -top-20 font-black  text-gray-100  font-oswald  uppercase
            text-xl sm:text-2xl"
            ref={logoRef}
            onClick={handleLogoClick}
          >
            Ahin Anburaja
          </a>
        </div>

        <div className="toggle-btn">
          <button
            className="burger"
            ref={toggleButtonRef}
            onClick={toggleMenu}
          ></button>
        </div>
      </div>

      <div className="overlay">
        <div className="overlay-menu">
          {texts.map((item, index) => (
            <div className="menu-item" key={index}>
              <div className="menu-item-name">
                <p>
                  <a
                    ref={(el) => (textRefs.current[index] = el)}
                    href={item.url} // Указываем ссылку на якорь
                    className="text"
                    onClick={(e) => handleLinkClick(e, item.url)} // Передаем id секции
                  >
                    {item.text} {/* Выводим текст ссылки */}
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
