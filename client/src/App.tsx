import { FC } from "react";
import { Header } from "./components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CarsPage } from "./pages/CarsPage/CarsPage";
import { FavoritePage } from "./pages/FavoritePage/FavoritePage";
import { useFavorite } from "./hooks/useFavorite";
import "./App.css";

const App: FC = () => {
  const {favList, onAddItem, onDeleteItem} = useFavorite();

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" 
        element = {
            <CarsPage 
              favList = {favList}
              onAddItem = {onAddItem}
              onDeleteItem = {onDeleteItem}
            />
          } />
        <Route path="/favorite" element={
            <FavoritePage 
              favList = {favList}
              onAddItem = {onAddItem}
              onDeleteItem = {onDeleteItem}
            />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
