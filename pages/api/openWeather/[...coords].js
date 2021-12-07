import axios from 'axios'

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const latitude = req.query.coords[0]
  const longitude = req.query.coords[1]
  const weatherApi = `https://api.openweathermap.org/data/2.5`
  const key = `${process.env.API_KEY}`

  if (latitude === 'undefined' || longitude === 'undefined') {
    return res.status(400).json({ message: 'No coords included in request' })
  } else {
    try {
      const weatherData = await axios.get(
        `${darkSkiesUrl}${latitude},${longitude}?exclude=flags`
      )
      res.status(200).json(weatherData.data)
    } catch (e) {
      console.error(e)
      res.status(e.status || 400).json({ message: 'Api error' })
    }
  }
}