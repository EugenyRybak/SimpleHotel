import React, { useState } from "react";
import { useSelector } from "react-redux";
import CommonHotelList from "../commonHotelList/CommonHotelList";
import { useGetHotels } from "../../hooks/useGetHotels";
import { useSortHotels } from "../../hooks/useSortHotels";
import "./FavoritesList.css";

function FavoritesList() {
  const [sortStars, setSortStars] = useState(null);
  const [sortPrice, setSortPrice] = useState(null);
  const favorite = useGetHotels(true);
  const currentDate = useSelector((state) => state.hotels.date);
  const numberOfDays = useSelector((state) => state.hotels.daysNumber);
  const sortedHotels = useSortHotels(favorite, sortStars, sortPrice);

  const handleRating = () => {
    setSortStars((prev) => !prev);
    setSortPrice(null);
  };

  const handlePrice = () => {
    setSortPrice((prev) => !prev);
    setSortStars(null);
  };

  return (

    <div className="FavoritesSize">
      <p className="FavoritesText">Избранное</p>
      <div className="ButtonBlock">
        <button className="Button" type="submit" onClick={handleRating}>Рейтинг</button>
        <button className="Button" type="submit" onClick={handlePrice}>Цена</button>
      </div>
      <div className="FavoritesList">
        <CommonHotelList
          currentDate={currentDate}
          numberOfDays={numberOfDays}
          hotels={sortedHotels}
        />
      </div>
    </div>
  );
}

export default FavoritesList;
