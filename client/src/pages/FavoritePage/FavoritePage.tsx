import { FC } from "react";
import { Car } from "../../graphql/generated";
import { FavoriteCarCard } from "../../components/FavoriteCarCard/FavoriteCarCard";
import { IUseFav } from "../../interfaces/interfaces";
import "./FavoritePage.css";


export const FavoritePage: FC<IUseFav> = ({favList, onAddItem, onDeleteItem}: IUseFav) => {
    const carItem: JSX.Element[] = favList.map( (favCar: Car) => (
        <li className="cars-catalog__item" key={favCar.id}>
            <FavoriteCarCard 
                car = {favCar}
                favList = {favList}
                onAddItem = {onAddItem}
                onDeleteItem = {onDeleteItem}
            />
        </li>
    ));

    function getNoun(num: number, one: string, two: string, five: string): string {
        let n = Math.abs(num);
        n %= 100;
    
        if (n >= 5 && n <= 20) {
          return five;
        }
        n %= 10;
        if (n === 1) {
          return one;
        }
        if (n >= 2 && n <= 4) {
          return two;
        }
    
        return five;
    }

    return (
        <main>
            <section className="cars-catalog">
                <div className="container">
                    <h1 className="cars-catalog__title">Избранные товары — {favList.length} {getNoun(favList.length, 'позиция', 'позиции', 'позиций')}</h1>
                    <ul className="cars-catalog__list cars-catalog__list--vertical">
                        {carItem}
                    </ul>
                </div>
            </section>
        </main>
    );
}