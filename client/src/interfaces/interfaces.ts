import { Car, Query } from "../graphql/generated";

export interface IUseFav {
    favList: Query["cars"];
    onAddItem(arg: Car): void;
    onDeleteItem(arg: number): void;
}

export interface ICard extends IUseFav {
    car: Car;
}

export interface IBuyText {
    text: string;
    buy: boolean;
    buyClass?: void;
}

export interface IAvailable {
    isAvailable: boolean
}

export interface IFavEl {
    isFav: boolean;
    elem: JSX.Element;
}