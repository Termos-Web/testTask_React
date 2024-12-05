import { useState } from "react";
import { Car, Query } from "../graphql/generated";
import { IUseFav } from "../interfaces/interfaces";


export function useFavorite(): IUseFav {
    const [favList, setFavList] = useState<Query["cars"]>([]);

    const onAddItem = (car: Car): void => {
        setFavList(state => [...state, car]);
    };

    const onDeleteItem = (id: number): void => {
        setFavList(state => state.filter(elem => elem.id !== id));
    };

    return {
        favList,
        onAddItem,
        onDeleteItem,
    };
}