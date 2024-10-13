import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import img1 from "../../assets/MAPF1_X_MAD DOG_JONES/project_1(2).jpg";
import img2 from "../../assets/PUMA_x_AMG_SEASONAL_CONCEPT_AH24/project_2(2).jpg";
import img3 from "../../assets/PUMA_X_AMG_GIANT_AH23/project_3(2).jpg";
import img4 from "../../assets/MAPF1_X_MAD DOG_JONES/bg-1(2).jpg"
import img5 from "../../assets/PUMA_x_AMG_SEASONAL_CONCEPT_AH24/bg-2(2).jpg"
import img6 from "../../assets/PUMA_X_AMG_GIANT_AH23/bg-3(2).jpg"

import { ScrollTrigger } from "gsap/ScrollTrigger";
import {useGSAP} from '@gsap/react'
gsap.registerPlugin(ScrollTrigger);



export default function Projects() {
  const projects = useRef()


  useGSAP(() => {
    let ctx = gsap.context(() => {
      gsap.set(".photo:not(:first-child)", { y: 500 });

      const animation = gsap.to(".photo:not(:first-child)", {
        y: 0,
        duration: 1,
        stagger: 1,
        ease: "power2.out",
      });

      ScrollTrigger.create({
        trigger: ".gallery",
        start: "top top",
        end: "bottom bottom",
        pin: ".left",
        animation: animation,
        scrub: true,
        // markers: true,
      });
    });
  }, {scope: projects});




  


  return (
    <section
    ref={projects}
      className="flex gallery w-screen
    flex-col md:flex-row "
    >
      <div className="absolute w-screen overflow-hidden">
        <div className="w-max">
          <img
            className="h-screen w-full blur-xl brightness-50"
            src={img4}
            alt=""
          />
        </div>
        <div className="w-max ">
          <img className="h-screen blur-xl brightness-50" src={img5} alt="" />
        </div>
        <div className="w-max">
          <img className="h-screen blur-xl brightness-50" src={img6} alt="" />
        </div>
      </div>
      <div
        className="absolute md:relative 
      w-full md:w-1/2 flex justify-center"
      >
        <div className="relative left flex w-96  h-96 overflow-hidden top-20 md:top-40 shadow-2xl rounded-xl z-50">
          <div className="photo absolute w-96 h-screen overflow-hidden">
            <img src={img1} alt="" />
          </div>
          <div className="photo absolute w-96 h-screen overflow-hidden">
            <img src={img2} alt="" />
          </div>
          <div className="photo absolute w-96 h-screen overflow-hidden">
            <img src={img3} alt="" />
          </div>
        </div>
      </div>
      <div
        className="right text-gray-100
      w-screen md:w-1/2 z-40"
      >
        <div className="details md:pt-40 h-screen w-screen md:w-2/3 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-oswald font-bold">
            MAPF1 X MAD DOG JONES
          </h1>
          <p className="font-montserrat text-md md:text-xl mt-10">
            wing inspiration from the dynamic world of motorsport and the
            visionary artistry of Mad Dog Jones, this one-of-a-kind collection
            encapsulates the essence of championship spirit. By seamlessly
            blending the heritage of the Mercedes-AMG PETRONAS Formula 1 Team
            with the retro-futurism of Mad Dog Jones, each piece becomes a
            timeless symbol of excellence.
          </p>
        </div>
        <div className="details h-screen md:pt-40 w-full md:w-2/3 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-oswald font-bold">
            PUMA x AMG - SEASONAL CONCEPT AH24
          </h1>
          <p className="font-montserrat text-md md:text-xl mt-10">
            The collection inspired by AMG's Hammer visually channels the car's
            power through sound and movement. It features talent moving to
            music, reflecting the vibrations and energy of the Hammer, with
            bold, eccentric movements and interactions with the car. The use of
            the AMG crest ties the collection to the car's heritage, enhancing
            the sense of power and prestige. The collection embodies the
            Hammer's dynamic vibe, showcasing the self-confidence and energy of
            the cast in a setting that resonates with the car's essence.
          </p>
        </div>
        <div className="details h-screen md:pt-40 w-full md:w-2/3 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-oswald font-bold">
            PUMA X AMG GIANT AH23
          </h1>
          <p className="font-montserrat text-md md:text-xl mt-10">
            What if you could see speed and power rather than just feel it? This
            concept invites you into the AMG Headquarters, reimagined to
            physically embody the sensation of G-force. Inspired by brake lights
            and the motion of cars, the space uses vibrant colors and dynamic
            design language to make the product visually impactful and
            commercially appealing.
          </p>
        </div>
      </div>
    </section>
  );
}
