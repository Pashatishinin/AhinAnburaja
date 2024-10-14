import React, { useRef, useEffect } from "react";
import gsap from "gsap";

import { useGSAP } from "@gsap/react";
import img1 from "../../assets/map_1.png";
import img2 from "../../assets/map_2.png";
import img3 from "../../assets/map_3.png";
import img4 from "../../assets/map_4.png";
import "./Country.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Country() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  const countryData = [
    {
      name: "CANADA",
      description: `In my roles, I developed strong decision-making and conflict
      management skills as an umpire, mentored new umpires, and
      participated in national tournaments. Additionally, as a
      co-founder and events coordinator for the Indian Students'
      Association at UBCO, I planned events, managed budgets, and
      supervised volunteers, honing my leadership and organizational
      abilities.`,
      image: img1,
    },
    {
      name: "FRANCE",
      description: `Conducted a needs analysis for a fitness start-up. Provided
      strategic recommendations to boost consumer interest and drive
      sales. Suggested avenues for business expansion to support growth
      initiatives.`,
      image: img2,
    },
    {
      name: "CHINA",
      description: `Conducted research on the Chinese football fan market and their
      consumer motivations. Delivered insights on enhancing the European
      football match-day experience for Chinese fans, with a focus on
      digital strategies.`,
      image: img3,
    },
    {
      name: "GERMANY",
      description: `Oversaw the entire product process from initial briefing to final
      launch. Aligned team calendars with Go-To-Market strategies and
      stakeholder requirements. Analyzed financial data to ensure
      products met targets.`,
      image: img4,
    },
  ];

  const CountrySection = ({ name, description, image }) => (
    <div className="country-container scroll-section">
      <div className="country-title ">{name}</div>
      <div className="country-info">
        <span className="w-3/4">{description}</span>
      </div>
      <div className="flex h-2/4 lg:h-3/4">
        <img src={image} alt={name} className="country-img" />
      </div>
    </div>
  );

  gsap.registerPlugin(ScrollTrigger);
  
  useEffect(() => {
    const pin = gsap.to(sectionRef.current, {
      transform: "translate(-75%)",
      scrollTrigger: {
        trigger: triggerRef.current,
        scroller: "body",
        markers: true,
        start: "top 0%",
        end:"top -150%",
        scrub:2,
        pin:true
      },
    });
    // const pin = gsap.fromTo(
    //   sectionRef.current,
    //   {
    //     translateX: 0,
    //   },
    //   {
    //     translateX: "-300vw",
    //     ease: "none",
    //     duration: 1,
    //     scrollTrigger: {
    //       trigger: triggerRef.current,
    //       start: "top top",
    //       end: "2000 top",
    //       scrub: 0.6,
    //       pin: true,
    //     },
    //   }
    // );
    return () => {
      {
        /* A return function for killing the animation on component unmount */
      }
      pin.kill();
    };
  }, []);

  return (
    <section ref={triggerRef} id="country" >
      <div
        ref={sectionRef}
        className="font-montserrat scroll-section-inner text-2xl tracking-widest leading-relaxed"
      >
        {countryData.map((country, index) => (
          <CountrySection
            key={index}
            name={country.name}
            description={country.description}
            image={country.image}
          />
        ))}
      </div>
    </section>
  );
}
