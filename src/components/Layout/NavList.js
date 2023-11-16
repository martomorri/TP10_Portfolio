import NavItem from "./NavItem";
import { arrayOf } from 'prop-types'
import { NavItemShape } from '../../shapes'
import './NavList.css'

function NavList({ navItems, listPosition }) {
  return (
    <ul id={listPosition} className="navbar-nav me-auto mb-2 mb-lg-0">
      {navItems.map((i) => (
        <NavItem className="navItem"
          item={i.item}
          path={i.path}
        />
      ))}
    </ul>
  );
}

NavList.propTypes = {
  navItems: arrayOf(NavItemShape).isRequired
}

export default NavList
