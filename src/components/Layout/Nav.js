import NavList from "./NavList";
import './Nav.css'

function Nav() {
    const navItems = [
        {
            item: "Home"
        },
        {
            item: "Mis proyectos",
            path: "proyectos"
        },
        {
            item: "Contacto",
            path: "contacto"
        }
    ];

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <NavList listPosition="left" navItems={navItems} />
                </div>
            </div>
        </nav>
    );
}

export default Nav
