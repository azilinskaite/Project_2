import React from 'react';
import '../Cocktail-list-component-AR/Cocktail-list.css';
import FavouriteItemComponent from "../FavouriteItemComponent/FavouriteItemComponent.jsx";
import { useFavourites } from '../FavouritesContext/FavouritesContext';

const FavouritesList = () => {
    const { favourites } = useFavourites();

    return (

        // fix to correct layout
        <div>
        <div className="cocktail-grid">
        {favourites.map(item => (
          <FavouriteItemComponent key={item.id} item={item} />
        ))}
        </div>
      </div>
    );
  };

  export default FavouritesList;