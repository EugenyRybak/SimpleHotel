import React from 'react';
import FavoritesList from '../favoritesList/FavoritesList';
import SearchHotel from '../search/SearchHotel';
import HotelList from '../hotelList/HotelList';
import Navbar from '../navbar/Navbar';
import './HotelPage.css';

function HotelPage() {

  return (
      <div>
        <div className='Childers'>
            <Navbar />
          <div className='PagePosition'>
            <div className='ItemPosition'>
              <SearchHotel />
              <FavoritesList />
            </div>
            <HotelList />
          </div>
        </div>
      </div>
  );
}

export default HotelPage;
