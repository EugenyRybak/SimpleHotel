import { fetchHotels } from './store/reducers/hotels.reducer.js';
import HotelPage from './components/hotelPage/HotelPage.jsx';
import Login from './components/form/login/Login.jsx';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom'
import { useEffect } from 'react';
import './App.css';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchHotels())
  }, [])

  const redirect = () => {
    if (window.location.pathname !== '/') window.location.replace('/')
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login />} />
        {test ? <Route path='/hotels' element={<HotelPage />} /> : <>{redirect()}</>}
      </Routes>
    </div>
  );
}

export default App;
