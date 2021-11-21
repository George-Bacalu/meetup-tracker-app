import React, { useContext } from "react";
import { Link } from "react-router-dom";
import FavoritesContext from "../../store/favorites-context";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const favoritesCtx = useContext(FavoritesContext);

  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <Link to="/">Meetup Tracker</Link>
      </h1>
      <ul>
        <li>
          <Link to="/">All Meetups</Link>
        </li>
        <li>
          <Link to="/new-meetup">New Meetup</Link>
        </li>
        <li>
          <Link to="/favorites">
            Favorites <span className={classes.badge}>{favoritesCtx.numberOfFavorites}</span>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default MainNavigation;
