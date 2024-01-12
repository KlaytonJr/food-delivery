import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <ul className="flex gap-5 text-slate-800 font-semibold">
      <li>
        <NavLink
          to={`/`}
          className={({ isActive }) => (isActive ? "text-amber-400" : "")}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={`/menu`}
          className={({ isActive }) => (isActive ? "text-amber-400" : "")}
        >
          Menu
        </NavLink>
      </li>
      <li>
        <NavLink
          to={`/orders`}
          className={({ isActive }) => (isActive ? "text-amber-400" : "")}
        >
          Pedidos
        </NavLink>
      </li>
    </ul>
  );
}

export default Navbar;
