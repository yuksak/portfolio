import React from "react";
import { FaCopyright } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer style={{ display: "flex", flexDirection: "column" }}>
      <span className="openingNames">footer</span>
      <div>
        <p style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <FaCopyright />
          All rights reserved. 2022.
        </p>
      </div>
      <span className="closingNames">footer</span>
    </footer>
  );
};
