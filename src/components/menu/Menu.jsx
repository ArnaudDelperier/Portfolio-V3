import { Link } from "react-router-dom"

import "./menu.scss"


export default function Menu({ menuOpen, setMenuOpen }) {

    
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
            <li onClick={() => setMenuOpen(false)}>
                    <Link to={"/"}>Accueil</Link>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <Link to={"about"}>A propos</Link>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <Link to="projects">Projets</Link>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <Link to="contact">Contact</Link>
                </li>
            </ul>
        </div>
    )
}
