import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../../context/AppContext";

const navigationItems = [
  { label: "Home", path: "/" },
  { label: "Courses", path: "/courses" },
  { label: "Roadmap", path: "/roadmap" },
  { label: "Dashboard", path: "/dashboard" },
  { label: "Achievements", path: "/achievements" },
  { label: "Profile", path: "/profile" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useContext(AppContext);

  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Main navigation">
        <NavLink
          className="brand"
          to="/"
          onClick={closeMenu}
          aria-label="SkillTrack home"
        >
          <img
            className="brand-logo"
            src="/skilltrack-logo.png"
            alt="SkillTrack"
          />
         
        </NavLink>

        <button
          className="menu-button"
          type="button"
          aria-expanded={open}
          aria-controls="primary-navigation"
          aria-label={
            open ? "Close navigation menu" : "Open navigation menu"
          }
          onClick={() => setOpen((value) => !value)}
        >
          <span aria-hidden="true">{open ? "×" : "☰"}</span>
        </button>

        <div
          id="primary-navigation"
          className={open ? "nav-links open" : "nav-links"}
        >
          {navigationItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? "active" : undefined
              }
            >
              {item.label}
            </NavLink>
          ))}

          <button
            className="theme-button"
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${
              theme === "light" ? "dark" : "light"
            } mode`}
          >
            {theme === "light" ? "Dark mode" : "Light mode"}
          </button>
        </div>
      </nav>
    </header>
  );
}