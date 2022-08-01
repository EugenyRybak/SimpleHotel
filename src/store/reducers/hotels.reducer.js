// дефолтная дата заезда
let date = new Date().toISOString().split("T")[0];

export const initialState = {
  hotels: [],
  favorites: [],
  location: "Москва",
  date,
  daysNumber: "1",
};

export const HOTELS_LIST = "HOTELS_LIST";
export const NEW_LOCATION = "NEW_LOCATION";
export const NEW_DATE = "NEW_DATE";
export const NEW_DAYSNUMBER = "NEW_DAYSNUMBER";
export const FAVORITES_HOTEL = "FAVORITES_HOTEL";
export const DELETE_FAVORITES = "DELETE_FAVORITES";
export const IS_FAVORITES = "IS_FAVORITES";
export const FETCH_HOTELS = "FETCH_HOTELS";
export const IS_LIKED = "IS_LIKED";


const hotelsReducer = (state = initialState, action) => {
  switch (action.type) {
    case HOTELS_LIST:
      return {
        ...state,
        hotels: action.payload.map((item) => ({ ...item, isFavorites: false })),
      };

    case NEW_LOCATION:
      return {
        ...state,
        location: action.payload,
      };

    case NEW_DATE:
      return {
        ...state,
        date: action.payload,
      };

    case NEW_DAYSNUMBER:
      return {
        ...state,
        daysNumber: action.payload,
      };

    case FAVORITES_HOTEL:
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      };
      
    case DELETE_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites.filter((el) => el.hotelId !== action.payload)]
      }
        
    case IS_LIKED:
      return {
        ...state,
        favorites: state.favorites.map((hotel) => {
          if (hotel.hotelId === action.payload) {
            return { ...hotel, isFavorites: !hotel.isFavorites };
          }
          return hotel;
        }),
      };

    case IS_FAVORITES:
      return {
        ...state,
        hotels: state.hotels.map((hotel) => {
          if (hotel.hotelId === action.payload) {
            return { ...hotel, isFavorites: !hotel.isFavorites };
          }
          return hotel;
        }),
      };

    default:
      return state;
  }
};

export const setHotels = (payload) => ({ type: HOTELS_LIST, payload });
export const setNewLocation = (payload) => ({ type: NEW_LOCATION, payload });
export const setNewDate = (payload) => ({ type: NEW_DATE, payload });
export const setNewDaysNumber = (payload) => ({ type: NEW_DAYSNUMBER, payload });
export const setFavoritesHotel = (payload) => ({type: FAVORITES_HOTEL, payload}) 
export const setDeleteFavorites = (payload) => ({type: DELETE_FAVORITES, payload}) 
export const isFavoritesHotel = (payload) => ({ type: IS_FAVORITES, payload});
export const isLiked = (payload) => ({ type: IS_LIKED, payload});
export const fetchHotels = () => ({ type: FETCH_HOTELS });

export default hotelsReducer;
