import React from "react";
import { string, object, oneOfType } from 'prop-types'
import "./NavItem.css";

function NavItem({ item, path = "" }) {
  const size = item === '☆' ? "28px" : "16px"
  const className = item === '☆' ? "" : "btn btn-light"
  return (
    <li className="nav-item">
      <a style={{fontSize: size, textDecoration: "none", color: "black"}} className={className} href={path}>
        {item}
      </a>
    </li>
  );
}

NavItem.propTypes = {
  item: oneOfType([string, object]).isRequired,
  path: string,
}

export default NavItem
