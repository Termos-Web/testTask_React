import { FC} from "react";
import "./CarCard.css";
import { BuyButton } from "../Button/BuyButton";
import { FavButton } from "../Button/FavButton";
import { ICard } from "../../interfaces/interfaces";

export const CarCard: FC<ICard> = ( {car, favList, onAddItem, onDeleteItem}: ICard) => {
    
    let imageEl1 = <img className="car-card__image" src={car.img_src} alt={car.brand + " " + car.model} />;
    let imageEl2 = 
        (
            <div className="car-card__image-wrapper">
                <img className="car-card__image" src={car.img_src} alt={car.brand + " " + car.model} />
                <span className="car-card__missing">Нет в наличии</span>
            </div>
        );
    
    return (
        <div className={`car-card ${!car.availability && "car-card car-card--out-stock"}`}>
            {car.availability ? imageEl1 : imageEl2}
            <div className="car-card__text-content">
                <h2 className="car-card__title">{car.brand + " " + car.model}</h2>
                <div className="car-card__info">
                    <span className="car-card__info-item">Год: {car.model_year}</span>
                    <span className="car-card__info-item">Цвет: {car.color}</span>
                </div>
                <span className="car-card__price">от {car.price}</span>
                <div className="car-card__buttons">
                    <BuyButton isAvailable={!car.availability}/>
                    <FavButton 
                        car = {car}
                        favList = {favList}
                        onAddItem = {onAddItem}
                        onDeleteItem = {onDeleteItem}
                    />
                </div>
            </div>
        </div>
    );
}