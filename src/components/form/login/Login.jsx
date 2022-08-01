import React from 'react';
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchHotels } from '../../../store/reducers/hotels.reducer';
import { setUser } from '../../../store/reducers/user.reducer';
import './Login.css'

function Login() {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm({
    mode: 'onBlur'
  })

  const onSubmit = () => {
    dispatch(fetchHotels())
    dispatch(setUser(true))
    reset()
    navigate('/hotels')
  }

  return (
    <>
      <div className='BackgroundLogin'></div>
        <div className='LoginForm'>
          <p className='LoginFormText'>Simple Hotel Check</p>
            <form className='InputBlock' onSubmit={handleSubmit(onSubmit)}>
              <div className='InputForm'>
                <label className='LabelText'>
                  Логин
                  <input className='InputSize' {...register('firstName', {
                    required: 'Поле обязательно к заполнению',
                    pattern: {
                      // eslint-disable-next-line no-useless-escape
                      value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: "Введите верный email",
                    }
                  })}
                  />
                </label>
                <div className='ErrorText'>{errors?.firstName && <p>{errors?.firstName?.message || 'Error!'}</p>}</div>
              </div>
              <div className='InputForm'>
                <label className='LabelText'>
                  Пароль
                  <input type='password' className='InputSize' {...register('Password', {
                    required: 'Поле обязательно к заполнению',
                    minLength: {
                      value: 8,
                      message: 'Минимум 8 символов'
                    },
                    pattern: {
                      value: /[^а-яА-Я]/,
                      message: 'Пароль не может содержать кириллицу'
                    }
                  })}
                  />
                </label>
                <div className='ErrorText'>{errors?.Password && <p>{errors?.Password?.message || 'Error!'}</p>}</div>
              </div>
              <input className='ButtonLogin' type='submit' value='Войти' />
            </form>
          </div>
        </>
  );
}

export default Login;
