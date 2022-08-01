import {put, takeEvery, call, select } from 'redux-saga/effects'
import { setHotels, FETCH_HOTELS } from '../store/reducers/hotels.reducer'

export function checkOutDate(days, date) {
  let outDays = new Date(date.split('-').join(','))
      outDays.setDate(outDays.getDate() + Number(days));
  return outDays.toISOString().split("T")[0];
}

async function fetchHotelsFromApi(location, daysNumber, date) {
  const response = await fetch (`https://engine.hotellook.com/api/v2/cache.json?location=${location}&currency=rub&checkIn=${date}&checkOut=${checkOutDate(daysNumber, date)}&limit=10`)
  return await response.json()
 }

function* fetchHotelsWorker() {
  const data = yield select()
  const {location, daysNumber, date} = data.hotels
  const payload = yield call(fetchHotelsFromApi, location, daysNumber, date)
  yield put(setHotels(payload))
}

 export function* hotelsWatcher() {
  yield takeEvery(FETCH_HOTELS, fetchHotelsWorker)  
}
