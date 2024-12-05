import { FC, useEffect, useState } from "react";
import { Car, Query } from "../../graphql/generated";
import sortIcon from "./sortIcon.svg";
import searchIcon from "./searchIcon.svg";
import { CarCard } from "../../components/CarCard/CarCard";
import axios from "axios";
import { IUseFav } from "../../interfaces/interfaces";
import { getQuery } from "../../api/getQuery";
import "./CarsPage.css";


export const CarsPage: FC<IUseFav> = ({favList, onAddItem, onDeleteItem}: IUseFav) => {
    const [carsList, setCarsList] = useState<Query["cars"]>([]);
    const [data, setData] = useState<Query["cars"]>([]);
    
    useEffect(() => {
        const query = getQuery();

        axios
        .post("http://127.0.0.1:4000/api", {
            query,
        })
        .then((res) => {
            setCarsList(res.data.data.cars);
            setData(res.data.data.cars);
        });
        
        return () => {};
    }, []);

    const [selectValue, setSelectValue] = useState<string>("available");

    useEffect(() => {
        sort(selectValue);
    }, []);
    
    function handleSearchChange(event: React.FormEvent<HTMLInputElement>): void {
        setCarsList(data);
        const value = event.currentTarget.value || '';
        sort(selectValue);

        if (value) {
            setCarsList(items => items.filter((elem) => `${elem.brand.toLowerCase()} ${elem.model.toLowerCase()}`.includes(value.toLowerCase())));
        } 
    }
    
    function handleSortChange(event: React.FormEvent<HTMLSelectElement>): void {
        sort(event.currentTarget.value);
    }

    function sort(value: string): void {
        switch (value) {
            case 'name-up': 
                setCarsList(items => [...items].sort((a, b) => `${a.brand} ${a.model}`.localeCompare(`${b.brand} ${b.model}`)));
                break;
            case 'name-down': 
                setCarsList(items => [...items].sort((a, b) => `${b.brand} ${b.model}`.localeCompare(`${a.brand} ${a.model}`)));
                break;
            case 'year-up': 
                setCarsList(items => [...items].sort((a, b) => a.model_year - b.model_year));
                break;
            case 'year-down': 
                setCarsList(items => [...items].sort((a, b) => b.model_year - a.model_year));
                break;
            case 'price-up': 
                setCarsList(items => [...items].sort((a, b) => Number(a.price.slice(1)) - Number(b.price.slice(1))));
                break;
            case 'price-down': 
                setCarsList(items => [...items].sort((a, b) => Number(b.price.slice(1)) - Number(a.price.slice(1))));
                break;
            case 'available':
                setCarsList(items => [...items].sort((a, b) => Number(b.availability) - Number(a.availability)));
        }
        setSelectValue(value);
    }

    const carItem: JSX.Element[] = carsList.map( (car: Car) => (
        <li className="cars-catalog__item" key={car.id}>
            <CarCard
                car = {car}
                favList = {favList}
                onAddItem = {onAddItem}
                onDeleteItem = {onDeleteItem}
            />
        </li>
    ));

    return (
        <main>
            <section className="cars-catalog">
                <div className="container">
                    <h1 className="visually-hidden">Каталог машин</h1>
                    <form className="cars-form" action="#" method="GET">
                        <div className="cars-form__sorting-wrapper">                    
                            <img src={sortIcon} alt="Иконка сортировки" />
                            <select className="cars-form__sort-category" name="sort" id="sort" onChange={handleSortChange} defaultValue="available">
                                <option className="cars-form__sort-option" value="available">Сначала в наличии</option>
                                <option className="cars-form__sort-option" value="name-up">По имени (A-Z)</option>
                                <option className="cars-form__sort-option" value="name-down">По имени (Z-A)</option>
                                <option className="cars-form__sort-option" value="year-down">Сначала новее</option>
                                <option className="cars-form__sort-option" value="year-up">Сначала старше</option>
                                <option className="cars-form__sort-option" value="price-up">Сначала дешевле</option>
                                <option className="cars-form__sort-option" value="price-down">Сначала дороже</option>
                            </select>
                        </div>
                        <div className="cars-form__search-wrapper">
                            <input className="cars-form__search-input" name="search" id="search" type="input" placeholder="Найти авто" onChange={handleSearchChange} />
                            <button className="cars-form__search-btn btn btn--smallest" type="button" aria-label="Поиск">
                                <img src={searchIcon} alt="Иконка поиска" />
                            </button>       
                        </div>
                    </form>
                    <ul className="cars-catalog__list">
                        {carItem}
                    </ul>
                </div>
            </section>
        </main>
    );
}

