import React, { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import img1 from "../../assets/MAPF1_X_MAD DOG_JONES/project_1.jpg";
import img2 from "../../assets/PUMA_x_AMG_SEASONAL_CONCEPT_AH24/project_2.jpg";
import img3 from "../../assets/PUMA_X_AMG_GIANT_AH23/project_3.jpg";
import img4 from "../../assets/MAPF1_X_MAD DOG_JONES/bg_1(2).jpg"
import img5 from "../../assets/PUMA_x_AMG_SEASONAL_CONCEPT_AH24/bg_2(2).jpg"
import img6 from "../../assets/PUMA_X_AMG_GIANT_AH23/bg_3(2).jpg"

import { ScrollTrigger } from "gsap/ScrollTrigger";
import {useGSAP} from '@gsap/react'




export default function Projects() {
  const projects = useRef()


  useEffect(() => {
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

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); // Уничтожаем все триггеры
    };

  }, []);




  


  return (
    <section
      ref={projects}
      className="flex gallery w-screen
    flex-col md:flex-row"
    >
      <div className="absolute w-full overflow-hidden">
        <div className="w-max">
          <img
            className="h-screen xl:w-screen blur-xl brightness-50"
            src={img6}
            alt=""
            loading="lazy"
          />
        </div>
        <div className="w-max ">
          <img
            className="h-screen xl:w-screen blur-xl brightness-50"
            src={img5}
            alt=""
            loading="lazy"
          />
        </div>
        <div className="w-max">
          <img
            className="h-screen xl:w-screen blur-xl brightness-50"
            src={img4}
            alt=""
            loading="lazy"
          />
        </div>
      </div>
      <div
        className="absolute md:relative flex justify-center w-full 
      md:w-1/2 p-2"
      >
        <div className="projects-images left">
          <div className="photo ">
            <img src={img3} alt="" loading="lazy" />
          </div>
          <div className="photo ">
            <img src={img2} alt="" loading="lazy" />
          </div>
          <div className="photo ">
            <img src={img1} alt="" loading="lazy" />
          </div>
        </div>
      </div>
      <div className="right projects-items">
        <div className="details projects-itm">
          <h1 className="projects-itm-title">PUMA X AMG GIANT</h1>
          <p className="projects-itm-text">
            What if you could see speed and power rather than just feel it? This
            concept invites you into the AMG Headquarters, reimagined to
            physically embody the sensation of G-force. Inspired by brake lights
            and the motion of cars, the space uses vibrant colors and dynamic
            design language to make the product visually impactful and
            commercially appealing.
          </p>
        </div>
        <div className="details projects-itm">
          <h1 className="projects-itm-title">
            PUMA x AMG - THE HAMMER
          </h1>
          <p className="projects-itm-text">
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
        <div className="details projects-itm">
          <h1 className="projects-itm-title">MAPF1 X MAD DOG JONES</h1>
          <p className="projects-itm-text">
            With inspiration from the dynamic world of motorsport and the
            visionary artistry of Mad Dog Jones, this one-of-a-kind collection
            encapsulates the essence of championship spirit. By seamlessly
            blending the heritage of the Mercedes-AMG PETRONAS Formula 1 Team
            with the retro-futurism of Mad Dog Jones, each piece becomes a
            timeless symbol of excellence.
          </p>
        </div>
      </div>
    </section>
  );
}
