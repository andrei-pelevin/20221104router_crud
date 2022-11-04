import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/">Главная</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/posts/new">Создать пост</NavLink>
                </li>

            </ul>
        </nav>
    )
}
export default Navbar;