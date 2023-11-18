import NavList from "./NavList";
import { StarBorder } from "@mui/icons-material";
import './Nav.css'

function Nav() {
    const navItems = [
        {
            item: "Home",
            path: "/"
        },
        {
            item: "About Us",
            path: "#about-us"
        },
        {
            item: "Proyectos",
            path: "#proyectos"
        },
        {
            item: "Skills",
            path: "#skills"
        },
        {
            item: "Contacto",
            path: "#form-contacto"
        }
    ];

    const navItemsRight = [
        {
            item: <StarBorder />,
            path: "/favoritos"
        }
    ]

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <NavList listPosition="left" navItems={navItems} />
                    <NavList listPosition="right" navItems={navItemsRight} />
                </div>
            </div>
        </nav>
    );
}

export default Nav
