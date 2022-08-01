import { useSelector } from "react-redux";

export const useGetHotels = (isFavorite = false,) => {
  const hotels = useSelector((state) => state.hotels.favorites);
  
  if (isFavorite) return hotels.filter((hotel) => hotel.isFavorites === true);
  return hotels;
};
