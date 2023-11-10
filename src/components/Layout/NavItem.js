import React from "react";
import { string, object, oneOfType } from 'prop-types'
import "./NavItem.css";

function NavItem({ item, path = "" }) {
  return (
    <li className="nav-item">
      <a className="btn btn-light" href={path}>
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
