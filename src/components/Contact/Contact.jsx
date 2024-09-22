import React, { useEffect } from "react";
import img from "../../assets/About.jpg";
import "./Contact.css";

import RollingText from "./RollingText";

import ScrollReveal from "scrollreveal";

export default function Contact() {
  const texts = [
    { text: "Phone", url: "tel:+491771915288" },
    { text: "Email", url: "mailto:ahinthhan@gmail.com" },
    { text: "WhatsApp", url: "https://wa.me/491771915288" },
    { text: "LinkedIn", url: "http://www.linkedin.com/in/ahinthhan-anburaja" },
  ];

  useEffect(() => {
    ScrollReveal().reveal(".semi_label", {
      origin: "bottom",
      distance: "200px",
      duration: 2000,
      delay: 200,
      reset: true,
    });
    ScrollReveal().reveal(".cont-box", {
      origin: "right",
      distance: "200px",
      duration: 2000,
      delay: 200,
      reset: true,
    });
    ScrollReveal().reveal(".img-box", {
      origin: "left",
      distance: "200px",
      duration: 2000,
      delay: 200,
      reset: true,
    });
  }, []);

  return (
    <section
      className="overflow-hidden z-20 relative h-full py-20 
    px-5 sm:px-20 w-screen"
      id="contact"
    >
      <div className="z-10 absolute left-1/3 top-1/3 circle rounded-full "></div>
      <div className="sm:text-center">
        <h2
          className="semi_label font-oswald bg-gradient-to-r uppercase text-transparent bg-clip-text  from-cyan-500 via-cyan-600 to-sky-800  font-medium tracking-widest 
        text-4xl sm:text-8xl  "
        >
          Let's be in touch
        </h2>
      </div>

      <div className="mt-10">
        <div
          className=" flex justify-center w-full
        gap-10 sm:gap-24 
        flex-col-reverse sm:flex-row"
        >
          <div
            className="img-box  z-20 
          md:w-1/4"
          >
            <img
              src={img}
              alt=""
              className="w-full rounded-3xl shadow shadow-sky-950 border border-gray-800"
            />
          </div>

          <div className=" cont-box">
            <div
              className="z-20 container  gap-6 
             text-xl sm:text-2xl text-gray-100 "
            >
              {texts.map((item, index) => (
                <RollingText key={index} text={item.text} url={item.url} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
