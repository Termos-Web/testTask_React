import { FC, useEffect, useState } from "react";
import { FavoriteCarIcon } from "./icons/FavoriteCarIcon";
import { FavoriteCarIconPainted } from "./icons/FavoriteCarIconPainted";
import { ICard, IFavEl } from "../../interfaces/interfaces";

export const FavButton: FC<ICard> = ( {car, favList, onAddItem, onDeleteItem}: ICard) => {
    const [favEl, setFavoriteEl] = useState<IFavEl>({isFav: false, elem: <FavoriteCarIcon />});
    
    useEffect(() => {
        favList.forEach(elem => {
            if (elem.id === car.id) {
                setFavoriteEl({isFav: true, elem: <FavoriteCarIconPainted />});
            }
        })
    }, []);

    function handleFavoriteClick() {
        if (!favEl.isFav) {
            setFavoriteEl({isFav: true, elem: <FavoriteCarIconPainted />});
            onAddItem(car);
        } else {
            setFavoriteEl({isFav: false, elem: <FavoriteCarIcon />});
            onDeleteItem(car.id);
        }
    }

    return (
        <button className="car-card__favorite-button" onClick={handleFavoriteClick}>
            {favEl.elem}
        </button>
    );
}