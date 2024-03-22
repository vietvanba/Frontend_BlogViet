import "./navbar.scss";
import menus from "./navbar.json";
import { Link, NavLink } from "react-router-dom";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState();

  const handleMouseEnter = (title: any) => {
    setIsOpen(true);
    setTitle(title);
  };

  const handleMouseLeave = (title: any) => {
    setIsOpen(false);
    setTitle(title);
  };
  return (
    <div className="navbar">
      <Link to={"/"} className="homepage">
        <img src="logo.svg" alt="" className="logo" />
        <div className="logo-text">VanBaViet</div>
      </Link>
      <ul className="items">
        {menus.map((menu) => (
          <li className="item">
            <NavLink
              onMouseEnter={() => handleMouseEnter(menu.name)}
              onMouseLeave={() => handleMouseLeave(menu.name)}
              to={menu.url}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              {menu.name}
            </NavLink>
            {isOpen && title === menu.name && menu.items.length != 0 && (
              <div
                className="sub"
                onMouseEnter={() => handleMouseEnter(menu.name)}
                onMouseLeave={() => handleMouseLeave(menu.name)}
              >
                {menu.items.map((subItem, index) => (
                  <Link className="subItem" key={index} to={subItem.url}>
                    {subItem.name}
                  </Link>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
      <div className="bx">
        <FontAwesomeIcon icon={faBars} color="antiquewhite" />
      </div>
    </div>
  );
};
