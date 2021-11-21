import React, { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";

const FavoriteMeetups = () => {
  const favoritesCtx = useContext(FavoritesContext);

  return (
    <>
      <h1>My Favorites</h1>
      {favoritesCtx.numberOfFavorites > 0 ? <MeetupList meetupsList={favoritesCtx.favorites} /> : <p>You got no favorites yet. Start adding some?</p>}
    </>
  );
};

export default FavoriteMeetups;
