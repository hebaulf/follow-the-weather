
const URL = `https://api.openweathermap.org/data/2.5/onecall`;
const API_KEY = `c44f77911579d2cbc82efc379374400c`;

const getWeather = async (id) => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${id}&appid=${API_KEY}`
    );
    const data = await res.json();
    const latLon = data.coord;
    const res2 = await fetch(
      `${URL}?lat=${latLon?.lat}&lon=${latLon?.lon}&exclude=minutely&appid=${API_KEY}&units=metric`
    );
    
    const weatherData = await res2.json();
    return weatherData
}

export default getWeather
