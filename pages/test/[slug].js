
let regions = {
  capital: "5ec7d096a90548233654dbb2",
  west: "5ec7d096a90548233654dbaf",
  east: "5ec7d096a90548233654dbb0",
  south: "5ec7d096a90548233654dbb5",
  north: "5ec7d096a90548233654dbb3",
  reykjanes: "5ec7d096a90548233654dbb4",
  westfjords: "5ec7d096a90548233654dbb6"
}

let categories = {
  'swimming': "5ec7d096a90548233654d47c",
   'museums': "5ec7d096a90548233654d4aa",
  'horse-riding': "5ec7d096a90548233654d48e",
  'geothermal-baths': "5ec7d096a90548233654d493",
  'diving': "5ec7d096a90548233654d480",
  'culinary-experience': "5ec7d096a90548233654d4a0",
  'hiking': "5ec7d096a90548233654d47d",
  'whale-wathching': "5ec7d096a90548233654d4a6",
  'skiing': "5ec7d096a90548233654d483",
  'cave-exploring': "5ec7d096a90548233654d493",
  'glacier-tours': "5ec7d096a90548233654d4a9",
  'kayaking': "5ec7d096a90548233654d4a5",
}

const body = {
  operationName: null,
  variables: { take: 36, skip: 0, regionIds: [], categoryIds: [] },
  query: `
  query(
    $regionIds: [String!]
    $categoryIds: [String!]
    $take: Int
    $skip: Int
  ) {
    ServiceProviders(
      filter: { regionIds: $regionIds, categoryIds: $categoryIds }
      take: $take
      skip: $skip
      sort: { isApprovedTourismService: ASC }
    ) {
      count
      ServiceProviders {
        legalName
        id: serviceProviderId
        SSN
        website
        photos {
          alt
          src: photoUri
        }
        translations {
          description
          name
          locale
       
        }
        location {
          coordinates
        }
      }
    }
  }
`
}

const getData = async (region, category) => {
  body.variables.regionIds[0] = regions[region]
  body.variables.categoryIds[0] = categories[category]

const r = await fetch("https://www.visiticeland.com/.netlify/functions/request-proxy", {
  "headers": {
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.9,is;q=0.8",
    "cache-control": "no-cache",
    "content-type": "application/json",
    "pragma": "no-cache",
    "sec-ch-ua": "\"Google Chrome\";v=\"95\", \"Chromium\";v=\"95\", \";Not A Brand\";v=\"99\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin"
  },
  "referrer": "https://www.visiticeland.com/things-to-do/?category=5ec7d096a90548233654d4ba&page=0&region=5ec7d096a90548233654dbb0&subcategory=5ec7d096a90548233654d47c%2C5ec7d096a90548233654d47d",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "method": "POST",
  "body": JSON.stringify(body),
  "mode": "cors",
  "credentials": "include"
});
  
const json = await r.json();
  console.log(JSON.stringify(json));
  return json
}
getData();

export default async function handler(req, res) {
  const {
    query: { slug } 
  } = req
  const json = await getData(slug[0], slug[1])
  res.status(200).json(json)
}


