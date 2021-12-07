import axios from 'axios';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const { latitude, longitude } = req.query;
  const mapKey = "pk.eyJ1IjoiYXJuYXZhbGEiLCJhIjoiY2t3ZjM4Z2wzMGFtcjJ3bnU5ZDdhaHFmeCJ9.i-wJdflLC-HJCWPBXQL0JA"

  const API_ENDPOINT = `https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?country=is&limit=1&types=place&language=en&access_token=pk.eyJ1IjoiYXJuYXZhbGEiLCJhIjoiY2t3ZjM4Z2wzMGFtcjJ3bnU5ZDdhaHFmeCJ9.i-wJdflLC-HJCWPBXQL0JA`;

  try {
    const { data } = await axios.get(API_ENDPOINT);
    // console.log(data, 'data');
    res.status(200).json(data.features[0].place_name);
  } catch (error) {
    res.status(422).json({ data: String(error) });
  }
};