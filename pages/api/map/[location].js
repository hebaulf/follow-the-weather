import axios from 'axios'


export default async (req, res) => {
  const location = req.query.location
  
  const baseUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places'
  const urlComplete = `${baseUrl}/${encodeURIComponent(
    location
  )}.json?limit=1&access_token=${process.env.MAPBOX_KEY}`
}