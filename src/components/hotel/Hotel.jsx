import React from "react";
import ListItemText from "@mui/material/ListItemText";
import "./Hotel.css";
import { useDispatch } from "react-redux";
import { isFavoritesHotel, isLiked, setDeleteFavorites, setFavoritesHotel } from "../../store/reducers/hotels.reducer";
import { HearthIcon } from "../icons/HearthIcon";
import Rating from "@mui/material/Rating";

function Hotel({ name, date, price, days, item }) {

  const dispatch = useDispatch();
  const { isFavorites } = item;

  const check = () => {
    
    if (!isFavorites) {
      dispatch(setFavoritesHotel(item));
    } else {
      dispatch(setDeleteFavorites(item.hotelId));
    }
    dispatch(isLiked(item.hotelId))
    dispatch(isFavoritesHotel(item.hotelId));
  };

  let lengthsDays;
  if (days <= 1) {
    lengthsDays = "день";
  } else if (days > 1 && days < 5) {
    lengthsDays = "дня";
  } else {
    lengthsDays = "дней";
  }

  const toFormatPrice = (Math.floor(price)).toLocaleString('ru-RU')

  return (

    <div className="ItemWrapper">
      <div>
        <ListItemText
          className="ItemText"
          primary={name}
          secondary={`${date} - ${days} ${lengthsDays}`}
        />
        <Rating name="read-only" value={item.stars} readOnly />
      </div>
      <div className="PriceBlock">
        <p className="HearthIcon">
          <HearthIcon favorite={isFavorites} onClick={check} />
        </p>
        <div className="PriceWrapper">
          <span className="PriceText">Price:</span>
          <span className="PriceValue">{`${toFormatPrice}₽`}</span>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Hotel);
