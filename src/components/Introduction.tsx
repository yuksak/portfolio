import React from "react";
import { BiMailSend } from "react-icons/bi";

export const Introduction = () => {
  return (
    <section>
      <span className="openingNames">section</span>
      <div className="block">
        <span className="openingNames">h2</span>
        <h2>Hi, I'm Alisher!</h2>
        <span className="closingNames">h2</span>

        <br />

        <span className="openingNames">p</span>
        <p style={{ maxWidth: "700px", width: "100%" }}>
          I am a self-taught junior Front-end Developer with over 6 months of
          intern experience developing dynamic web applications. I am passionate
          about creating clean, functional, and responsive web applications that
          are easy to use and maintain. I have a good understanding of UX
          principles and strive to create user-friendly experiences. I am always
          eager to learn new technologies, and I am open to feedback. I am a
          fast learner and am always looking for new challenges and ways to
          expand my skill set. I am confident that I can bring value to any
          project I am assigned to.
        </p>
        <span className="closingNames">p</span>

        <br />

        <span className="openingNames">button</span>
        <a
          style={{ display: "inline-flex", alignItems: "center" }}
          href="mailto:argulamov@gmail.com"
        >
          Send an email
          <BiMailSend style={{ fontSize: "1.5rem" }} />
        </a>
        <span className="closingNames" style={{ marginLeft: "0" }}>
          button
        </span>
      </div>
      <span className="closingNames">section</span>
    </section>
  );
};
