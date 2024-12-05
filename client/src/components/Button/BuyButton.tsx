import { FC, useState, MouseEvent} from "react";
import "./Button.css";
import { IAvailable, IBuyText } from "../../interfaces/interfaces";

export const BuyButton: FC<IAvailable> = ( {isAvailable}:IAvailable ) => {
    const [buyText, setBuyText] = useState<IBuyText>({text: "Купить", buy: false});
	
    function handleBuyClick(event: MouseEvent): void {
        if (buyText.buy) {
            setBuyText({text: 'Купить', buy: false, buyClass: event.currentTarget.classList.remove('btn--success')});
        } else {
            setBuyText({text: 'Куплено', buy: true, buyClass: event.currentTarget.classList.add('btn--success')});
        }
    }

    const availableBtn = (
        <button className="car-card__buy-button btn"  onClick={handleBuyClick}>
            {buyText.text}
        </button>
    );

    const unAvailableBtn = (
        <button className="car-card__buy-button btn" disabled>
            {buyText.text}
        </button>
    );

    return !isAvailable ? availableBtn : unAvailableBtn;
}