import React from "react";
import "./Contact.css";

const RollingText = ({ text, url }) => {
  return (
    <a href={url} className="rolling-text">
      <div className="block">
        {text.split("").map((contact_letter, index) => (
          <span key={index} className="contact_letter font-oswald">
            {contact_letter.trim() === "" ? "\xa0" : contact_letter}
          </span>
        ))}
      </div>
      <div className="block">
        {text.split("").map((contact_letter, index) => (
          <span key={index} className="contact_letter font-oswald">
            {contact_letter.trim() === "" ? "\xa0" : contact_letter}
          </span>
        ))}
      </div>
    </a>
  );
};

export default RollingText;
