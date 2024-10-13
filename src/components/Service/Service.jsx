import React, { useEffect, useRef } from "react";
import "./Service.css";
import ScrollReveal from "scrollreveal";

export default function Service() {
  useEffect(() => {
    ScrollReveal().reveal(".item-card, .service-title ", {
      origin: "bottom",
      distance: "200px",
      duration: 2000,
      delay: 200,
      interval: 300,
    });
  }, []);

  const services = [
    {
      num: "01",
      text_label: "Product Lifecycle Management",
      text: "Overseeing the entire lifecycle of products. By integrating data, new processes, and market trends I’ve been able to enhance collaboration, team performance, and achieve business goals.",
    },
    {
      num: "02",
      text_label: "Brand and Product Line Expertise ",
      text: "Specialized experience in managing high-profile product lines, such as Mercedes AMG Petronas Formula One Team Apparel and AMG Motorsport Apparel.",
    },
    {
      num: "03",
      text_label: "Strategic Go-To-Market Planning ",
      text: "Managing and aligning department calendars with Go-To-Market strategies and internal stakeholders to ensure seamless scheduling and project alignment",
    },
    {
      num: "04",
      text_label: "End to end product management ",
      text: "Overseeing the entire process of a product, from the initial concept and design phase through to development, launch, and eventual discontinuation. It requires coordinating with various teams to ensure the product meets market demands and business objectives",
    },
    {
      num: "05",
      text_label: "Quality Assurance and Final Approvals ",
      text: "Responsible for the final approval of products, maintaining high standards and ensuring alignment with the brand’s vision before release.",
    },
    {
      num: "06",
      text_label: "Cross functional collaboration ",
      text: "Working closely with different departments, such as design, marketing, sales, and supply chain, to ensure all aspects of the product line are aligned. This cross-functional collaboration ensures smooth project execution and that everyone is working towards the same goals",
    },
    {
      num: "07",
      text_label: "Financial acumen ",
      text: "Ensuring that the product line meets or exceeds financial goals set by the company. This includes managing budgets, pricing strategies, and working with vendors to optimize costs and margins",
    },
    {
      num: "08",
      text_label: "Go to Market Strategy ",
      text: "Developing and executing strategies to bring a product to market effectively. This includes planning product launches, aligning with marketing and sales teams, and ensuring the product reaches the target audience successfully",
    },
    {
      num: "09",
      text_label: "Stakeholder Communication and Presentation ",
      text: "Experience in presenting product lines both internally and externally, including to key accounts and stakeholders, ensuring alignment and buy-in.",
    },
  ];

  return (
    <section
      className="z-20 h-full relative overflow-hidden py-10 
    px-5
    sm:px-10"
      id="service"
    >
      <h2 className="service-title">My Service</h2>

      <div className="service-container">
        {services.map((item, index) => (
          <div key={index} className={`item-card service-card`}>
            <h4 className="item-num service-num">{item.num}</h4>
            <p className="flex flex-col">
              <span className="mb-2 font-bold uppercase text-gray-100  ">
                {item.text_label}
              </span>
              <span className="">{item.text}</span>
            </p>
          </div>
        ))}
        <div className=" circle  left-20 top-72 "></div>
        <div className="circle  right-20 bottom-0 "></div>
      </div>
    </section>
  );
}
