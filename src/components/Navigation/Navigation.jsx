import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

export default function Navigation() {
  return (
    <div className={css.box}>
      <header className={css.header}>
        <nav className={css.navigation}>
          <NavLink to="/" className={css.link}>
            Home
          </NavLink>

          <NavLink to="/movies" className={css.link}>
            Movies
          </NavLink>
        </nav>
      </header>
    </div>
  );
}
