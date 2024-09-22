import img1 from "../../assets/Project_1.jpg";
import img2 from "../../assets/Project-1-1.jpg";
import mad_dog_jones_1 from "../../assets/MAPF1_X_MAD DOG_JONES/MAPF1_X_MAD DOG_JONES_1.jpg";
import React, { useEffect } from "react";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


export default function Projects() {
  useEffect(() => {
    const details = gsap.utils.toArray(
      ".desktopContentSection:not(:first-child)"
    );
    const photos = gsap.utils.toArray(".desktopPhoto:not(:first-child)");
    const allPhotos = gsap.utils.toArray(".desktopPhoto");

    // Устанавливаем начальные значения для анимации
    gsap.set(photos, { yPercent: 101 });

    // Создаем matchMedia для медиазапросов
    let mm = gsap.matchMedia();

    // Настраиваем анимацию для десктопов
    mm.add("(min-width: 600px)", () => {
      console.log("desktop");

      // Пин для галереи
      ScrollTrigger.create({
        trigger: ".gallery",
        start: "top top",
        end: "bottom bottom",
        pin: ".right",
      });

      // Анимация для каждого элемента details
      details.forEach((detail, index) => {
        const headline = detail.querySelector("h1");
        const animation = gsap
          .timeline()
          .to(photos[index], { yPercent: 0 })
          .set(allPhotos[index], { autoAlpha: 0 });

        ScrollTrigger.create({
          trigger: headline,
          start: "top 80%",
          end: "top 50%",
          animation: animation,
          scrub: true,
          markers: false,
        });
      });

      // Возвращаем функцию для очистки анимации при изменении на мобильный
      return () => {
        console.log("mobile");
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    });

    // Убираем анимации при размонтировании компонента
    return () => {
      mm.kill();
    };
  }, []);
  return (
    <section className="relative h-screen overflow-hidden">
      {/* <img
        src={mad_dog_jones_1}
        alt=""
        className="blur-2xl absolute brightness-75"
      />
      <div className="absolute flex m-36 w-full">
        <div className=" w-1/3">
          <img src={mad_dog_jones_1} alt="" className="rounded-xl" />
        </div>

        <div className="ml-20 mt-20 w-2/3 text-gray-100">
          <h3 className="font-oswald text-gray-100 text-5xl mb-20">
            PUMA x MAPF1 x MAD DOG JONES SS24
          </h3>
          <p className="font-montserrat w-2/3 text-gray-100 uppercase tracking-widest mb-3">
            wing inspiration from the dynamic world of motorsport and the
            visionary artistry of Mad Dog Jones, this one-of-a-kind collection
            encapsulates the essence of championship spirit. By seamlessly
            blending the heritage of the Mercedes-AMG PETRONAS Formula 1 Team
            with the retro-futurism of Mad Dog Jones, each piece becomes a
            timeless symbol of excellence.
          </p>
          <a
            className="mt-10 flex items-center gap-1 text-xl"
            href="https://about.puma.com/en/newsroom/product-and-brand-news/2024/26-04-2024-mercedes-amg-petronas-f1-team-mad-dog-jones-and"
          >
            LOAD MORE <i class="bx bx-link-external"></i>
          </a>
        </div>
      </div> */}
      <div class="spacer"></div>

      <div class="gallery">
        <div class="left">
          <div class="desktopContent">
            <div class="desktopContentSection">
              <h1>Red</h1>
              <p>
                Red is a color often associated with strong emotions such as
                passion, love, and anger. It's a bold and attention-grabbing
                color that can evoke feelings of excitement, warmth, and energy.
              </p>
            </div>
            <div class="desktopContentSection">
              <h1>Green</h1>
              <p>
                Green is a color that is often associated with nature, growth,
                and harmony. It is a calming and relaxing color that can evoke
                feelings of balance, stability, and freshness. In color
                psychology, green is said to represent balance and stability,
                making it a popular choice for branding and marketing in the
                health and wellness industry.{" "}
              </p>
            </div>
            <div class="desktopContentSection">
              <h1>Pink</h1>
              <p>
                Pink is a color that is often associated with femininity,
                romance, and sweetness. It is a softer and more delicate shade
                of red that can evoke feelings of warmth, love, and nurturing.
              </p>
              <p>
                In the world of branding and marketing, pink is often used to
                target a female audience or to promote products that are
                associated with beauty, love, or romance.
              </p>
              <p>
                Pink is also used in the food industry, as it is associated with
                sweetness and desserts. Pink is often used in breast cancer
                awareness campaigns, as it has become the signature color of the
                movement.{" "}
              </p>
              <p>
                Pink is also commonly used in baby showers and weddings, as it
                symbolizes love, innocence, and new beginnings.
              </p>
            </div>
            <div class="desktopContentSection">
              <h1>Blue</h1>
              <p>
                Blue is a color that is often associated with calmness, trust,
                and reliability. It is a peaceful and serene color that can
                evoke feelings of stability, security, and professionalism. In
                color psychology, blue is said to represent loyalty and trust,
                making it a popular choice for branding and marketing in the
                finance and technology industries.
              </p>
            </div>
          </div>
        </div>

        <div class="right">
          <div class="mobileContent">
            <div class="mobilePhoto red"></div>
            <h1>Red</h1>
            <p>
              Red is a color often associated with strong emotions such as
              passion, love, and anger. It's a bold and attention-grabbing color
              that can evoke feelings of excitement, warmth, and energy.
            </p>

            <div class="mobilePhoto green"></div>
            <h1>Green</h1>
            <p>
              Green is a color that is often associated with nature, growth, and
              harmony. It is a calming and relaxing color that can evoke
              feelings of balance, stability, and freshness. In color
              psychology, green is said to represent balance and stability,
              making it a popular choice for branding and marketing in the
              health and wellness industry.{" "}
            </p>

            <div class="mobilePhoto pink"></div>
            <h1>Pink</h1>
            <p>
              Pink is a color that is often associated with femininity, romance,
              and sweetness. It is a softer and more delicate shade of red that
              can evoke feelings of warmth, love, and nurturing. In the world of
              branding and marketing, pink is often used to target a female
              audience or to promote products that are associated with beauty,
              love, or romance.
            </p>

            <div class="mobilePhoto blue"></div>
            <h1>Blue</h1>
            <p>
              Blue is a color that is often associated with calmness, trust, and
              reliability. It is a peaceful and serene color that can evoke
              feelings of stability, security, and professionalism. In color
              psychology, blue is said to represent loyalty and trust, making it
              a popular choice for branding and marketing in the finance and
              technology industries.
            </p>
          </div>

          <div class="desktopPhotos">
            <div class="desktopPhoto red"></div>
            <div class="desktopPhoto green"></div>
            <div class="desktopPhoto pink"></div>
            <div class="desktopPhoto blue"></div>
          </div>
        </div>
      </div>

      <div class="spacer"></div>
      <div class="spacer"></div>
      <div class="spacer"></div>
    </section>
  );
}
