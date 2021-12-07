import axios from 'axios'

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const latitude = req.query.coords[0]
  const longitude = req.query.coords[1]
  const exclude = 'alerts'
  const units = 'metric'
  const weatherApi = `https://api.openweathermap.org/data/2.5/onecall`
  const key = `da80dff9846628584a158c4c17eb8ca9`
  const API_ENDPOINT =`${weatherApi}?lat=${latitude}&lon=${longitude}&=${exclude}&appid="${key}"&units=metric`

  if (latitude === 'undefined' || longitude === 'undefined') {
    return res.status(400).json({ message: 'No coords included in request' })
  } else {
    try {
      const weatherData = await axios.get(
        API_ENDPOINT
      )
      res.status(200).json(weatherData.data)
    } catch (error) {
      console.error(error)
      res.status(e.status || 400).json({ message: 'Api error' })
    }
  }
}