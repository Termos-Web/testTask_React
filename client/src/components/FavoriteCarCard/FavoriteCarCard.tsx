import { FC } from "react";
import deleteIcon from "./deleteIcon.svg";
import "./FavoriteCarCard.css";
import { ICard } from "../../interfaces/interfaces";

export const FavoriteCarCard: FC<ICard> = ({car, favList, onAddItem, onDeleteItem}: ICard) => {
    function handleDeleteCar() {
        onDeleteItem(car.id);
    }

    return (
        <div className="car-card car-card--vertical">
            <img className="car-card__image" src={car.img_src} alt={car.brand + " " + car.model} />
            <div className="car-card__content-right">
                <div className="car-card__text-content">
                    <h2 className="car-card__title">{car.brand + " " + car.model}</h2>
                    <p className="car-card__description">{car.description}</p>
                    <span className="car-card__info-item">Год: {car.model_year}</span>
                    <span className="car-card__info-item">Цвет: {car.color}</span>
                </div>
                <div className="car-card__bottom-content">
                    <span className="car-card__price">от {car.price}</span>
                    <div className="car-card__buttons">
                        {car.availability ? 
                            <button className="car-card__choose-button btn">Выбрать комплектацию</button>
                            : <button className="car-card__choose-button btn" disabled>Нет в наличии</button>
                        }
                        <button className="car-card__delete-button" onClick={handleDeleteCar}>
                            <img src={deleteIcon} alt="" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}