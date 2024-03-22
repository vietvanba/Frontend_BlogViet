import "./navbar.scss";
import menus from "./navbar.json";
import { Link, NavLink } from "react-router-dom";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const Navbar = () => {
  return (
    <div className="navbar">
      <Link to={"/"} className="homepage">
        <img src="vite.svg" alt="" className="logo" />
        <div className="logo-text">VanBaViet</div>
      </Link>
      <ul className="items">
        {menus.map((menu) => (
          <li className="item">
            <NavLink
              to={menu.url}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              {menu.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="bx">
        <FontAwesomeIcon icon={faBars} color="antiquewhite" />
      </div>
    </div>
  );
};
