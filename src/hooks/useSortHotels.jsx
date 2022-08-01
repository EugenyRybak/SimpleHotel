export const useSortHotels = (hotels, isRating, isCost) => {
  if (isRating) {
    return hotels.sort((a, b) => b.stars - a.stars);
  }

  if (isRating === false) {
    return hotels.sort((a, b) => a.stars - b.stars);
  }

  if (isCost) {
    return hotels.sort((a, b) => b.priceFrom - a.priceFrom);
  }

  if (isCost === false) {
    return hotels.sort((a, b) => a.priceFrom - b.priceFrom);
  }

  return hotels;
};
