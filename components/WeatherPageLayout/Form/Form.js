import { useState, useContext } from 'react'
import { MapboxContext } from '../../../state/MapboxContext'
import { WeatherContext } from '../../../state/WeatherContext'
import { getWeather } from '../../../pages/api/weather-now/weather'
import FetchError from '../FetchError/FetchError';
import style from './form.module.scss'




const Form = ({ref}) => {
  const [city, setCity] = useState('')
  const { viewport, setViewport } = useContext(MapboxContext)
  const { setData, setLoading } = useContext(WeatherContext)
  const [error, setError] = useState(false)
  
  const setWeather = (data) => {
    setViewport({
      ...viewport,
      latitude: data.coord.lat,
      longitude: data.coord.lon
    });
    setData({
      data
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
    const data = await getWeather(city);

    if (data.cod !== 200) {
      setError(data);
      console.log(data)
    } else {
      setWeather(data)
      setError(false);
    }
    setLoading(false)
    setCity('');
  };

 
  return (
    <form  onSubmit={ submitHandler} className={style.form}>
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
    </form>
  )
}

export default Form;


/*  <form  onSubmit={ submitHandler} className={style.form}>
      <div ref={ref} onChange={onChangeHandler} className={style.form__group}>
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