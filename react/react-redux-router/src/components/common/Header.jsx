import React from "react";
import { NavLink } from "react-router-dom";

const LINKS = [
  { to: "/", link: "Home" },
  { to: "/about", link: "About" },
  { to: "/courses", link: "Courses" },
];

export default function Header() {
  const activeStyle = { color: "#F15B2A" };
  const style = { marginRight: "1rem" };

  return (
    <div>
      {LINKS.map((link, i) => (
        <NavLink key={i} style={style} activeStyle={activeStyle} to={link.to}>
          {link.link}
        </NavLink>
      ))}
    </div>
  );
}
