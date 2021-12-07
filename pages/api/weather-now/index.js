import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const type = req.query.type;
  const lat = req.query.lat;
  const lon = req.query.lon;
  const city = req.query.city;

  if (type === "coords") {
    const { data } = await axios.get(
      `https://api.weatherapi.com/v1/forecast.json?key="da80dff9846628584a158c4c17eb8ca9"&q=${lat},${lon}&days=5&aqi=no&alerts=no`
    );

    res.json(data);
  }

  if (type === "city") {
    const { data } = await axios.get(
      `https://api.weatherapi.com/v1/forecast.json?key="da80dff9846628584a158c4c17eb8ca9"&q=${city}&days=5&aqi=no&alerts=no`
    );

    res.json(data);
  }
};