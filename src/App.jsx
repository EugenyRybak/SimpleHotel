import { fetchHotels } from './store/reducers/hotels.reducer.js';
import HotelPage from './components/hotelPage/HotelPage.jsx';
import Login from './components/form/login/Login.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import './App.css';

function App() {

  const dispatch = useDispatch()
  // const test = useSelector((state) => state.user.isUser)
  // const navigate = useNavigate()

  useEffect(() => {
    dispatch(fetchHotels())
  }, [])

  // const redirect = () => {
  //   if (window.location.pathname !== '/') window.location.replace('/')
  //   navigate('/')
  // }

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login />} />
        {/* {test ? <Route path='/hotels' element={<HotelPage />} /> : <>{redirect()}</>} */}
        <Route path='/hotels' element={<HotelPage />} /> 
      </Routes>
    </div>
  );
}

export default App;
