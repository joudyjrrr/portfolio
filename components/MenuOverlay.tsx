import React from "react";
import NavLink, { NavProps } from "./NavLink";
type MenuProps = {
  links: NavProps[];
};
const MenuOverlay = ({ links }: MenuProps) => {
  return (
    <div className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index} className="list-none">
          <NavLink path={link.path} title={link.title} />
        </li>
      ))}
    </div>
  );
};

export default MenuOverlay;
