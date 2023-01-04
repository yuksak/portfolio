import React from "react";
import { FaGithubAlt, FaLinkedinIn } from "react-icons/fa";

export const Header = () => {
  return (
    <header>
      <span className="openingNames">header</span>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h3>@yuksak</h3>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            fontSize: "2rem",
          }}
        >
          <a href="https://github.com/yuksak">
            <FaGithubAlt />
          </a>
          <a href="https://linkedin.com/in/yuksak">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
      <span className="closingNames">header</span>
    </header>
  );
};
