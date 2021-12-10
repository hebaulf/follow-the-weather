import axios from 'axios';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const { searchTerm, latitude, longitude } = req.query;
  const proximity =
    latitude !== 0 && longitude !== 0
      ? `&proximity=${longitude},${latitude}`
      : '';
  const API_ENDPOINT = `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchTerm}.json?country=is&limit=10${proximity}&types=place%2Clocality&language=en&access_token=pk.eyJ1IjoiYXJuYXZhbGEiLCJhIjoiY2t3ZjM4Z2wzMGFtcjJ3bnU5ZDdhaHFmeCJ9.i-wJdflLC-HJCWPBXQL0JA`;

  try {
    const { data } = await axios.get(API_ENDPOINT);
    // console.log(data, 'data');
    const places = data.features.map((feature) => ({
      id: feature.id,
      coordinates: feature.geometry.coordinates,
      name: feature.name,
      region: feature.region,
      level: feature.level
      
    }));
    res.status(200).json(places);
  } catch (error) {
    res.status(422).json({ data: String(error) });
  }
};
