import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../../context/AppContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useContext(AppContext);
  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Main navigation">
        <NavLink className="brand" to="/" onClick={closeMenu} aria-label="SkillTrack home">
          <img className="brand-logo" src="/skilltrack-logo.png" alt="SkillTrack" />
        </NavLink>
        <button className="menu-button" type="button" aria-expanded={open} aria-controls="primary-navigation" aria-label={open ? "Close navigation menu" : "Open navigation menu"} onClick={() => setOpen((value) => !value)}>
          {open ? "×" : "☰"}
        </button>
        <div id="primary-navigation" className={open ? "nav-links open" : "nav-links"}>
          <NavLink to="/" end onClick={closeMenu}>Home</NavLink>
          <NavLink to="/courses" onClick={closeMenu}>Courses</NavLink>
          <NavLink to="/roadmap" onClick={closeMenu}>Roadmap</NavLink>
          <NavLink to="/dashboard" onClick={closeMenu}>Dashboard</NavLink>
          <NavLink to="/achievements" onClick={closeMenu}>Achievements</NavLink>
          <NavLink to="/profile" onClick={closeMenu}>Profile</NavLink>
          <button className="theme-button" type="button" onClick={toggleTheme}>{theme === "light" ? "Dark mode" : "Light mode"}</button>
        </div>
      </nav>
    </header>
  );
}