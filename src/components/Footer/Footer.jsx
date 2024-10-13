import React, { useLayoutEffect } from "react";
import gsap from "gsap";
import img from "../../assets/About.jpg";
import RollingText from "../Contact/RollingText";

export default function Footer() {
  const texts = [
    { text: "Home", url: "#hero" },
    { text: "My Service", url: "#service" },
    { text: "My Projects", url: "#project" },
    { text: "About me", url: "#about" },
    { text: "Contact", url: "#contact" },
  ];

  return (
    <section className=" py-5 px-5 sm:px-10 ">
      <div className="flex flex-col md:flex-row justify-between sm:items-center w-full pb-5 border-b border-gray-100 px-5">
        <a
          href="#hero"
          className="opacity-0 md:opacity-100 sm:w-1/2 text-gray-100  relative font-bold font-oswald text-xl uppercase tracking-widest"
        >
          Ahin Anburaja
        </a>
        <div>
          <div className="sm:flex-row  container gap-5 t text-sm md:text-lg text-gray-100 ">
            {texts.map((item, index) => (
              <RollingText key={index} text={item.text} url={item.url} />
            ))}
          </div>
        </div>
      </div>
      <div className="p-5 flex flex-col sm:flex-row text-left justify-center text-gray-100 font-montserrat pt-5 font-medium tracking-widest text-sm">
        <p>
          © 2024 <span className="font-bold uppercase">Pavlo Tishynin</span>
          <span className="opacity-0 sm:opacity-100"> | </span>
        </p>
        <p>
          <span className="opacity-0 sm:opacity-100"> | </span> All Right
          Reserved
        </p>
      </div>
    </section>
  );
}
