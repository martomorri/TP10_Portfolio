import React, { useContext } from "react";
import { string, object, oneOfType } from 'prop-types'
import "./NavItem.css";
import { favContext } from "../../context/favContext";
import Badge from "@mui/material/Badge";

function NavItem({ item, path = "" }) {
  const { favProj } = useContext(favContext)
  const size = item === '☆' ? "28px" : "16px"
  const className = item === '☆' ? "m-0" : "btn btn-light"
  const badge = item === '☆' ? favProj.length : 0

  return (
    <li className="nav-item">
      <Badge id="badge" color="primary" badgeContent={badge}>
        <a style={{ fontSize: size, textDecoration: "none", color: "black" }} className={className} href={path}>
          {item}
        </a>
      </Badge>
    </li>
  );
}

NavItem.propTypes = {
  item: oneOfType([string, object]).isRequired,
  path: string,
}

export default NavItem
