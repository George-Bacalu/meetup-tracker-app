import React, { useState } from "react";

const FavoritesContext = React.createContext({
  favorites: [],
  numberOfFavorites: 0,
  addFavorite: favoriteMeetup => {},
  removeFavorite: meetupId => {},
  itemIsFavorite: meetupId => {},
});

export const FavoritesContextProvider = props => {
  const [userFavorites, setUserFavorites] = useState([]);

  const context = {
    favorites: userFavorites,
    numberOfFavorites: userFavorites.length,
    addFavorite: favoriteMeetup => setUserFavorites(prevUserFavorites => prevUserFavorites.concat(favoriteMeetup)),
    removeFavorite: meetupId => setUserFavorites(prevUserFavorites => prevUserFavorites.filter(meetup => meetup.id !== meetupId)),
    itemIsFavorite: meetupId => userFavorites.some(meetup => meetup.id === meetupId),
  };

  return <FavoritesContext.Provider value={context}>{props.children}</FavoritesContext.Provider>;
};

export default FavoritesContext;
