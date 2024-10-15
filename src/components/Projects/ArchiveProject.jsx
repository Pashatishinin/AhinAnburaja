import { useEffect, useState } from "react";
import ScrollReveal from "scrollreveal";
import "./Projects.css";

import img1 from "../../assets/MAPF1_X_MAD DOG_JONES/1.jpg";
import img2 from "../../assets/MAPF1_X_MAD DOG_JONES/2.jpg";
import img3 from "../../assets/PUMA_X_AMG_ MASTERS_OF_CAMOUFLAGE/3.jpg";
import img4 from "../../assets/PUMA_X_AMG_ MASTERS_OF_CAMOUFLAGE/4.jpg";
import img5 from "../../assets/PUMA_x_AMG_SEASONAL_CONCEPT_AH24/5.jpg";
import img6 from "../../assets/PUMA_x_AMG_SEASONAL_CONCEPT_AH24/6.jpg";
import img7 from "../../assets/PUMA_x_AMG_SEASONAL_CONCEPT_AH24/7.jpg";
import img8 from "../../assets/PUMA_x_AMG_Car_Spotter/8.jpg";
import img9 from "../../assets/PUMA_x_AMG_Car_Spotter/9.jpg";
import img10 from "../../assets/PUMA_X_AMG_GIANT_AH23/10.jpg";
import img11 from "../../assets/PUMA_X_AMG_GIANT_AH23/11.jpg";
import img12 from "../../assets/PUMA_X_AMG_GIANT_AH23/12.jpg";

import img13 from "../../assets/PUMA_x_MAPF1_CREWS_GO_SUMMER/24SS_PR_MS_MAPF1-Crews-Go-Summer_Look-2_0867_16x9_1920x1080px.jpg";
import img14 from "../../assets/PUMA_x_MAPF1_CREWS_GO_SUMMER/24SS_PR_MS_MAPF1-Crews-Go-Summer_Look-1_3443_16x9_1920x1080px.jpg";

import img15 from "../../assets/PUMA_X_MAPF1_GARAGE_CREW/15.jpg";
import img16 from "../../assets/PUMA_X_MAPF1_GARAGE_CREW/16.jpg";

import img17 from "../../assets/PUMA_X_MAPF1_NEON_ENERGY/17.jpg";
import img18 from "../../assets/PUMA_X_MAPF1_NEON_ENERGY/18.jpg";
import img19 from "../../assets/PUMA_X_MAPF1_NEON_ENERGY/19.jpg";
import img20 from "../../assets/PUMA_X_MAPF1_NEON_ENERGY/20.jpg";

import img21 from "../../assets/PUMA_X_MAPF1_X_Power_AH23/21.jpg";
import img22 from "../../assets/PUMA_X_MAPF1_X_Power_AH23/22.jpg";
import img23 from "../../assets/PUMA_X_MAPF1_X_Power_AH23/23.jpg";
import img24 from "../../assets/PUMA_X_MAPF1_X_Power_AH23/24.jpg";

export default function ArchiveProject() {
  // project animation
  useEffect(() => {
    const sr_pc = ScrollReveal();
    sr_pc.reveal(".project-card", {
      origin: "bottom",
      distance: "200px",
      duration: 2000,
      delay: 200,
      interval: 300,
    });
    return () => {
      sr_pc.destroy();
    };
  }, []);
  const [model, setModel] = useState(false);
  const [tempimgScr, setTempImgScr] = useState("");
  const getImg = (imgScr) => {
    setTempImgScr(imgScr);
    setModel(true);
  };
  const projects = [
    {
      images: [img3, img4],
      title: "PUMA X AMG - MASTER'S OF CAMOUFLAGE",
      body: "This collection pays homage to the world of automotive design, drawing inspiration from the intriguing world of car prototypes.  this collection celebrates the fusion of fashion, technology, and car culture.  The collection's details and designs are meticulously crafted to reflect the passion and excitement associated with the automotive world.",
    },
    {
      images: [img21, img22, img23, img24],
      title: "PUMA X MAPF1 - X Power AH23",
      body: "Drawing inspiration from the Mercedes-AMG Petronas F1 Team, PUMA brilliantly merges top-notch performance design with day-to-day wearability. Blending performance and style inspired by the champions of the race track",
    },

    {
      images: [img8, img9],
      title: "PUMA x AMG Car Spotter",
      body: "The first PUMA x Mercedes-AMG Motorsport collection is a bold, stylish statement that mirrors the performance and dynamic design of Mercedes-AMG vehicles. Featuring eye-catching colors—green, pink, blue, and black—and the iconic AMG lettering in white, the collection includes Woven Jackets, T-Shirts, Woven Shorts, and long Woven tracksuit pants in three different colorways. Celebrating AMG's 'Wild Child' spirit, the 2023 Spring/Summer collection is engineered for both street and track, embodying power and luxury with every piece.",
    },
    {
      images: [img10, img11, img12],
      title: "PUMA X AMG GIANT AH23",
      body: "What if you could see speed and power rather than just feel it? This concept invites you into the AMG Headquarters, reimagined to physically embody the sensation of G-force. Inspired by brake lights and the motion of cars, the space uses vibrant colors and dynamic design language to make the product visually impactful and commercially appealing.",
    },
    {
      images: [img13, img14],
      title: "PUMA x MAPF1 - CREWS GO SUMMER",
      body: "From the sleek designs of the racetrack to the urban streets, each piece in this collection reimagines the iconic team identity into casual streetwear silhouettes, delivering a blend of performance and style that's perfect for race day and beyond.",
    },
    {
      images: [img15, img16],
      title: "PUMA X MAPF1 - GARAGE CREW",
      body: "The PUMA x MAPF1 'Garage Crew' collection creatively explores the shared DNA of each partner's garage crew, drawing inspiration from authentic mechanic aesthetics. The collection features mechanic-inspired silhouettes and badges, reflecting the gritty, hands-on spirit of a racing garage. This collaboration captures the essence of the behind-the-scenes work that drives the success of the Mercedes-AMG Petronas Formula One Team.",
    },
    {
      images: [img5, img6, img7],
      title: "PUMA x AMG - THE HAMMER AH24",
      body: "The collection inspired by AMG's Hammer visually channels the car's power through sound and movement. It features talent moving to music, reflecting the vibrations and energy of the Hammer, with bold, eccentric movements and interactions with the car. The use of the AMG crest ties the collection to the car's heritage, enhancing the sense of power and prestige. The collection embodies the Hammer's dynamic vibe, showcasing the self-confidence and energy of the cast in a setting that resonates with the car's essence.",
    },
    {
      images: [img1, img2],
      title: "MAPF1 X MAD DOG JONES SS24",
      body: "With inspiration from the dynamic world of motorsport and the visionary artistry of Mad Dog Jones, this one-of-a-kind collection encapsulates the essence of championship spirit. By seamlessly blending the heritage of the Mercedes-AMG PETRONAS Formula 1 Team with the retro-futurism of Mad Dog Jones, each piece becomes a timeless symbol of excellence.",
      link: "https://about.puma.com/en/newsroom/product-and-brand-news/2024/26-04-2024-mercedes-amg-petronas-f1-team-mad-dog-jones-and",
    },

    {
      images: [img17, img18, img19, img20],
      title: "PUMA X MAPF1 - NEON ENERGY",
    },
  ];

  return (
    <section className="z-20 relative 
    p-10 md:p-20 text-gray-100 overflow-hidden" id="project">
      <div className={model ? "model open" : "model"}>
        <img src={tempimgScr} />
        <i
          className="bx bx-x hover:scale-105 hover:text-cyan-200"
          onClick={() => setModel(false)}
        ></i>
      </div>

      <div className="">
        <h3 className="mb-5 font-light uppercase text-4xl">All Projects</h3>
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card flex justify-between py-5 border-b
            flex-col-reverse md:flex-row w-full
            gap-10 md:gap-0"
          >
            <div
              className="flex gap-5 flex-wrap sm:w-1/2
            "
            >
              {project.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt=""
                  className="h-36  transition duration-500 cursor-pointer hover:brightness-50 hover:scale-105"
                  onClick={() => getImg(img)}
                />
              ))}
            </div>
            <div className="
            w-full md:w-1/2
            lg:w-1/3">
              <h4 className=" font-oswald font-bold tracking-widest text-3xl uppercase mb-5 ">
                {project.title}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2"
                  >
                    <i className="bx bx-link-external hover:text-cyan-200 hover:scale-105 transition duration-300"></i>
                  </a>
                )}
              </h4>
              <p className="tracking-widest">{project.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
