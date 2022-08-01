import React from "react";
import Hotel from "../hotel/Hotel";
import './CommonHotelList.css'
import { HouseIcon } from "../icons/HouseIcon";

function NormHotelsList({ currentDate, numberOfDays, withDomik, hotels }) {

  return (
    <>
      {hotels.length > 0 &&
        hotels.map((item) => (
          <div key={item.hotelId} className="ListItem">
            {withDomik && (
              <p className="HouseIcon">
                <HouseIcon />
              </p>
            )}
            <Hotel
              key={item.hotelId}
              name={item.hotelName}
              date={currentDate}
              price={item.priceFrom}
              days={numberOfDays}
              item={item}
              stars={item.stars}
            />
          </div>
        ))}
    </>
  );
}

export default React.memo(NormHotelsList);
