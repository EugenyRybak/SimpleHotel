import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHotels, setNewDate, setNewDaysNumber, setNewLocation } from '../../store/reducers/hotels.reducer';
import './SearchHotel.css'

function SearchHotel() {

  const date = useSelector((state) => state.hotels.date)
  const dispatch = useDispatch()
  let locationValue = useRef()
  let dateValue = useRef()
  let daysValue = useRef()
  
  const handleSearch = (event) => {
    event.preventDefault()
    dispatch(setNewLocation(locationValue.current.value))
    dispatch(setNewDate(dateValue.current.value))
    dispatch(setNewDaysNumber(daysValue.current.value))
    dispatch(fetchHotels())
  }

  return (
    
    <>
      <div className='SearchBlock'>
        <form className='SearchFormBlock'>
          <div className='InputSearchBlock'>
            <label className='TextSearchLabel'>
              Локация
              <input className='InputSearchSize' ref={locationValue} defaultValue='Москва'/>
            </label>
          </div>
          <div className='InputSearchBlock'>
            <label className='TextSearchLabel'>
              Дата заселения
              <input className='InputSearchSize' ref={dateValue} type='date' defaultValue={date}/>
            </label>
          </div>
          <div className='InputSearchBlock'>
            <label className='TextSearchLabel'>
              Количество дней
              <input className='InputSearchSize' ref={daysValue} defaultValue='1'/>
            </label>
          </div>
          <input className='ButtonSearch' onClick={handleSearch} type='submit' value='Найти' />
        </form>
      </div>
    </>
  );
}

export default SearchHotel;
