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
    <section className=" py-5 px-20 ">
      <div className="flex justify-between items-center w-full pb-5 border-b border-gray-100 px-5">
        <a
          href="#hero"
          className="w-1/2 text-gray-100  relative font-bold font-oswald text-xl uppercase tracking-widest"
        >
          Ahin Anburaja
        </a>
        <div>
          <div className="flex-row container gap-5 t text-lg text-gray-100 ">
            {texts.map((item, index) => (
              <RollingText key={index} text={item.text} url={item.url} />
            ))}
          </div>
        </div>
      </div>
      <div className=" text-gray-100 font-montserrat pt-5 font-medium tracking-widest text-sm">
        <p className="text-center">
          Copyright © 2024 by <span className="font-bold">Pavlo Tishynin</span>{" "}
          || All Right Reserved
        </p>
      </div>
    </section>
  );
}
