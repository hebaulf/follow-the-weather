import axios from 'axios'

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const location = req.query.location
  const baseUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places'
  const urlComplete = `${baseUrl}/${encodeURIComponent(
    location
  )}.json?limit=1&access_token="pk.eyJ1IjoiYXJuYXZhbGEiLCJhIjoiY2t3ZjM4Z2wzMGFtcjJ3bnU5ZDdhaHFmeCJ9.i-wJdflLC-HJCWPBXQL0JA"`

  // Trash undefined calls
  if (location === 'undefined') {
    return res
      .status(400)
      .json({ message: 'Location: "undefined" is an invalid request.' })
  } else {
    try {
      let lat, long, placeName
      const response = await axios.get(urlComplete)

      // Filter out empty responses. Mapbox will still respond with 200's on some bad calls.
      if (response.data.features !== []) {
        long = response.data.features[0].center[0]
        lat = response.data.features[0].center[1]
        placeName = response.data.features[0].place_name
        res.status(200).json({
          latitude: lat,
          longitude: long,
          placeName,
        })
      }

    } catch (error) {
      console.error('MAPBOX API ERROR: ', error)
      res.status(e.status || 400).json({ message: 'MAPBOX API ERROR', error: error })
    }
  }
}