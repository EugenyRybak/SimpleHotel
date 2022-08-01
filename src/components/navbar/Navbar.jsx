import * as React from 'react';
import { setUser } from '../../store/reducers/user.reducer';
import { AppBar, Toolbar, Button} from '@mui/material'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './Navbar.css'

function Navbar() {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleExit = () => {
    dispatch(setUser(false))
    navigate('/')
  }

  return (

      <AppBar style={{background: '#E5E5E5', boxShadow: 'none'}} position="static">
        <Toolbar>
          <div className='NavbarPosition'>
            <p className='NavbarText'>
              Simple Hotel Check
            </p>
            <Button onClick={handleExit} style={{color: '#424242'}} >Выйти</Button>
          </div>
        </Toolbar>
      </AppBar>
  );
}

export default Navbar;
