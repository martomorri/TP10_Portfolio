import React, { useContext } from "react";
import { string, object, oneOfType } from 'prop-types'
import "./NavItem.css";
import { favContext } from "../../context/favContext";
import Badge from "@mui/material/Badge";

function NavItem({ item, path = "" }) {
  const { favProj } = useContext(favContext)
  const badge = item instanceof Object ? favProj.length : 0

  return (
    <li className="nav-item">
      <a className="btn" id="botonesNav" href={path}>
        <Badge id="badge" color="secondary"  badgeContent={badge}>
          {item}
        </Badge>
      </a>
    </li>
  );
}

NavItem.propTypes = {
  item: oneOfType([string, object]).isRequired,
  path: string,
}

export default NavItem
