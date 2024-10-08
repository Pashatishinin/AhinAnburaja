import React, { useEffect } from "react";
import "./About.css";
import ScrollReveal from "scrollreveal";
import gsap from 'gsap'

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import SplitType from "split-type";



export default function About() {
  useEffect(() => {
    ScrollReveal().reveal(".semi_label", {
      origin: "bottom",
      distance: "200px",
      duration: 2000,
      delay: 200,
      interval: 300,
    });

    const splitTypes = document.querySelectorAll('.reveal')

    splitTypes.forEach((char, i) => {
        const text = new SplitType(char, { types: 'words'})
        console.log("Characters:", text.chars); 
        
        gsap.from(text.words, {
          scrollTrigger: {
            trigger: char,
            start: "-50px center",
            end: "bottom center",
            scrub: true,
            markers: false,
          },
          opacity: 0.05,
          stagger: 0.05,
          duration: 0.8,
          delay: i < 10 ? 0.2 : 0,
        });
    
      })
  }, []);

  return (
    <section className="relative h-full py-20 px-20 mb-20" id="about">
      <div className="circle z-10 absolute left-40 top-40 rounded-full"></div>
      <div
        className="relative h-full gap-3 flex w-full justify-between
      "
      >
        <h2 className="semi_label font-medium font-oswald bg-gradient-to-l text-transparent bg-clip-text from-cyan-500 via-cyan-500 to-sky-600 tracking-widest uppercase text-8xl leading-20 ">
          My STORY
        </h2>

        <div className="pt-10 text-white font-montserrat  w-3/5 text-2xl font-normal tracking-widest leading-relaxed">
          <div className="grid gap-5">
            <p className="reveal">
              Growing up, I had the privilege of traveling to various countries,
              which gave me a unique perspective on different cultures and
              lifestyles.
            </p>
            <p className="reveal">
              I discovered that sport is a universal language that unites people
              everywhere.
            </p>
            <p className="reveal">
              This passion for sports has shaped my career, leading me to roles
              within product management & consultancy.
            </p>
            <p className="reveal">
              I'm a product manager with a passion for sports and innovation,
              shaped by my global experiences and a deep understanding of
              diverse cultures.
            </p>
            <p className="reveal">
              My approach emphasizes customer focus, data-driven
              decision-making, and strong cross-functional collaboration to
              drive successful product launches.
            </p>
            <p className="reveal">
              I prioritize clear communication and adaptability, maintaining a
              flexible roadmap that balances immediate goals with long-term
              vision.
            </p>
            <p className="reveal">
              Continuous learning and staying attuned to market trends are key
              to my strategy, ensuring that my products resonate with users and
              stay ahead of the competition.
            </p>
            <p className="reveal">
              My journey has been fueled by a deep love for sport, innovation,
              and connecting with diverse communities around the world.
            </p>
            
          </div>
        </div>
      </div>
    </section>
  );
}
