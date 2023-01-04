import React from "react";

const skills = [
  "HTML",
  "CSS",
  "SASS/SCSS",
  "JAVASCRIPT ES6+",
  "REACT",
  "REDUX",
  "REDUX TOOLKIT",
  "GIT",
  "RESPONSIVE WEB DESIGN",
  "FIGMA",
];

export const Skills = () => {
  return (
    <section>
      <span className="openingNames">section</span>
      <div className="block">
        <span className="openingNames">h2</span>
        <h2>Skills & Tools</h2>
        <span className="closingNames">h2</span>
        <br />
        <span className="openingNames">ul</span>
        <ul
          style={{
            listStyle: "none",
          }}
          className="block"
        >
          {skills.map((skill) => (
            <li style={{ display: "block" }} key={skill}>
              <span className="openingNames">li</span>
              {skill}
              <span className="closingNames" style={{ paddingLeft: "2rem" }}>
                li
              </span>
            </li>
          ))}
        </ul>
        <span className="closingNames">ul</span>
      </div>
      <span className="closingNames">section</span>
    </section>
  );
};
