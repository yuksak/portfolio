import React from "react";
import { BsBoxArrowUpRight, BsGithub } from "react-icons/bs";
const projects = [
  {
    name: "Rick and Morty API",
    image:
      "https://user-images.githubusercontent.com/103451495/210374304-0454f077-9475-4b6b-b8b3-f88e075ea891.png",
    about:
      "App that allows you have access to about hundreds of characters, images, locations and episodes of Rick and Morty. It has many functionalities such as pagination, filtering, searching and etc.",
    deploy: "https://rnm-yuksak.netlify.app/",
    sourceCode: "https://github.com/yuksak/rick-and-morty-app",
  },
];

export const Projects = () => {
  return (
    <section>
      <span className="openingNames">section</span>
      <div className="block">
        <span className="openingNames">div</span>
        <div style={{ paddingLeft: "2rem" }}>
          <span className="openingNames">h2</span>
          <h2>Some of my projects:</h2>
          <span className="closingNames">h2</span>
          <br />
          <span className="openingNames">div</span>
          {projects.map((project) => (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
              className="block"
              key={project.image}
            >
              {project.image && (
                <>
                  <span className="openingNames">img</span>
                  <div
                    style={{
                      maxWidth: "550px",
                    }}
                  >
                    <img
                      style={{
                        width: "100%",
                      }}
                      src={project.image}
                    />
                  </div>
                  <span className="closingNames">img</span>
                </>
              )}

              <span className="openingNames">h3</span>
              <h3>{project.name}</h3>
              <span className="closingNames">h3</span>

              <span className="openingNames">p</span>
              <p>{project.about}</p>
              <span className="closingNames">p</span>

              <span className="openingNames">a</span>
              <div style={{ display: "flex", gap: "2rem", fontSize: "1.5rem" }}>
                <a href={project.sourceCode}>
                  <BsGithub />
                </a>
                <a href={project.deploy}>
                  <BsBoxArrowUpRight />
                </a>
              </div>
              <span className="closingNames">a</span>
            </div>
          ))}

          <span className="closingNames">div</span>
        </div>
        <span className="closingNames">div</span>
      </div>
      <span className="closingNames">section</span>
    </section>
  );
};
