import React from "react";
import { useSelector } from "react-redux";
import CommonHotelList from "../commonHotelList/CommonHotelList";
import Carousel from "../carousel/Carousel";
import { ArrowIcon } from "../icons/ArrowIcon";
import "./HotelList.css";

function HotelList() {
  const allHotels = useSelector((state) => state.hotels.hotels);
  const currentDate = useSelector((state) => state.hotels.date);
  const numberOfDays = useSelector((state) => state.hotels.daysNumber);
  const favorit = allHotels?.filter((hotel) => hotel.isFavorites === true);
  const location = useSelector((state) => state.hotels.location);

  let lengthsHotels;
  if (favorit.length === 1) {
    lengthsHotels = "отель";
  } else if (favorit.length > 1 && favorit.length < 5) {
    lengthsHotels = "отеля";
  } else {
    lengthsHotels = "отелей";
  }

  let options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timezone: 'UTC'
  };
  
  let time = new Date(currentDate.split('-').join(',')).toLocaleString("ru", options)
  let newtime = time.slice(0, -3)

  return (
    
    <div className="HotelListBlock">
      <div className="HotelListTopText">
        <div className="TextPosition">
          <span className="NowHotelName">Отели</span>
          <ArrowIcon className={'ArrowIcon'}/>
          <span className="NowHotelName">{`${location}`}</span>
        </div>
        <span className="NowDateName">{`${newtime}`}</span>
      </div>
      <Carousel />
      <div className="HotelList">
        <span className="HotelListText">{`Добавлено в Избранное: ${favorit.length} ${lengthsHotels}`}</span>
        <div className="HotelListCards">
          <CommonHotelList
            withDomik
            currentDate={currentDate}
            numberOfDays={numberOfDays}
            hotels={allHotels}
          />
        </div>
      </div>
    </div>
  );
}

export default HotelList;
