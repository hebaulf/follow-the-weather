
const URL = `https://api.openweathermap.org/data/2.5/onecall`;
const API_KEY = `c44f77911579d2cbc82efc379374400c`;

/* export const getWeather = async (city) => {
  try {
    const base = `https://api.openweathermap.org/data/2.5/weather?`;
    const query = `q=${city}&units=metric&appid=${API_KEY}`;
    const request = await fetch(base + query);
    const data = await request.json();
    return data;
  } catch (err) {
    return err;
  }
};
console.log({ request }) */

export const getWeather = async (city) => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
  )
  const data = await res.json();
  return data;
}

console.log(getWeather)