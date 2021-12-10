import { useState, useContext } from 'react'
import { MapboxContext } from '../../../state/MapboxContext'
import { WeatherContext } from '../../../state/WeatherContext'
import { getWeather } from '../../../pages/api/weather-now'
import FetchError from '../FetchError/FetchError';
import style from './form.module.scss'




const Form = () => {
  const [city, setCity] = useState('')
  const { viewport, setViewport } = useContext(MapboxContext)
  const { setWeatherData } = useContext(WeatherContext)
  
  const setWeather = (weatherData) => {
    setViewport({
      ...viewport,
      latitude: weatherData.coord.lat,
      longitude: weatherData.coord.lon
    });
    setWeatherData({
      weatherData
    });
  };

  // input city search
  const onChangeHandler = (e) => {
    e.preventDefault();
    setCity(e.target.value);
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    const weatherData = await getWeather(city);

    if (weatherData.cod !== 200) {
      console.log(weatherData)
    } else {
      setWeather(weatherData)
    }
    setCity('');
  };

 
  return (
    <form  onSubmit={submitHandler} className={style.form}>
      <div className={style.form__group} value={city}>
        <input
          name='city'
          autoFocus
          onChange={onChangeHandler}
          value={city}
          className={style.form__input}
          type='text'
          placeholder='search for a city'
          autoComplete='off'
        />
        <button type="submit" className={style.form__btn}>
          Search city
        </button>
      </div>
    </form>
  )
}

export default Form;


/*  <form  onSubmit={submitHandler} className={style.form}>
      <div ref={ref} className={style.form__group}>
        <input
          name='city'
          autoFocus
          onChange={onChangeHandler}
          value={city}
          className={style.form__input}
          type='text'
          placeholder='search for a city'
          autoComplete='off'
        />
        <button type="submit" className={style.form__btn}>
          Search city
        </button>
      </div>
    </form> */