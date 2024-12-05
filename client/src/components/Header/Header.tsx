import "./Header.css";
import burgerIcon from "./burgerIcon.svg";
import headerLogo from "./headerLogo.svg";
import { FavoriteIcon } from "./FavoriteIcon.jsx";
import { Link } from "react-router-dom";
import { FC } from "react";


export const Header: FC = () => {
	return (
		<header className="header">
			<div className="container">
				<div className="header__wrapper">
					<div className="header__content-left">
						<Link to={"/"}><img src={headerLogo} alt="Логотип КупиАвто"/></Link>
						<button className="header__button btn btn--smaller">
							<img src={burgerIcon} alt="Иконка каталога" />
							<span className="header__button-text">Каталог</span>
						</button>
					</div>
					<div className="header__content-right">
						<a className="header__link">Москва, Волгоградский пр-кт, 43, стр 1</a>
						<a className="header__link" href="tel:+78005553535" >+7 800 555 35 35</a> 
						<Link to={"/favorite"}>
							<div className="header__favorite">
								<FavoriteIcon />
								<span className="header__favorite-text">Избранное</span>  	
							</div> 
						</Link>
					</div>
				</div>
			</div>
		</header>
	);
}