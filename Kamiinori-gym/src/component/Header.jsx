import React from "react";
import { Search, Globe, User, Bell } from "lucide-react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const Navlink = [
    { name: "Home", path: "/" },
    { name: "Service", path: "/service" },
    { name: "About", path: "/about" },
    { name: "Product", path: "/product" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="header">
      <nav role="navigation" aria-label="Main">
        <div className="nav-col">
          {/* Left */}
          <div className="nav-left">
            <h4 className="brand">KamiInori</h4>
          </div>

          {/* Center */}
          <div className="nav-center">
            <div className="nav-search" role="search">
              <input
                type="search"
                placeholder="Search…"
                aria-label="Search"
                className="search-input"
              />
              <button
                type="button"
                aria-label="Submit search"
                className="search-button"
              >
                <Search size={22} />
              </button>
            </div>

            <ul className="nav-links">
              {Navlink.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `nav-link ${isActive ? "active" : ""}`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Right */}
          <div className="nav-right">
            <div className="nav-icon">
              <Globe size={22} />
            </div>

            <input
              list="languages"
              id="language-select"
              placeholder="Choose language"
              className="language-select"
            />
            <datalist id="languages">
              <option value="English" />
              <option value="Yorùbá" />
              <option value="Hausa" />
              <option value="Igbo" />
              <option value="Français" />
              <option value="Español" />
              <option value="العربية" />
              <option value="Português" />
            </datalist>

            <div className="nav-icon">
              <User size={22} />
            </div>

            <div className="nav-icon">
              <Bell size={22} />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

