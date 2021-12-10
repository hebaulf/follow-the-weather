import axios from 'axios';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const { latitude, longitude } = req.query;
  const exclude = 'minutely,alerts';
  const weatherKey= "c44f77911579d2cbc82efc379374400c"
  const API_ENDPOINT = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=${exclude}&appid=${weatherKey}&units=metric`;

  let formattedData = {};
  try {
    const {
      data: { daily, current },
    } = await axios.get(API_ENDPOINT);
    console.log(data);

    formattedData = {
      current: {
        temp: current.temp,
        feels_like: current.feels_like,
        humidity: current.humidity,
        uvi: current.uvi,
        weather: current.weather[0],
      },
 
      daily: daily.map((d) => ({
        dt: d.dt,
        temp: d.temp,
        weather: d.weather[0],
      })),
    };
    res.status(200).json(formattedData);
  } catch (error) {
    res.status(422).json({ data: String(error) });
  }

};