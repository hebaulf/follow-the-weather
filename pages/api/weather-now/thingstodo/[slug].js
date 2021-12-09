/*
// FETCHING THE API 
- This API fetches data for Tourism Services Providers and Activities in Iceland.
- The Data is originally from an API db from Ferðamálastofa, but unfortunately only accessible for us in Icelandic.
- We therefore hacked the API from VisitIceland.is - which uses the same dataset but in English.

// CHALLENGE OF FILTERING THROUGH the DATA BY CATEGORIES
- The original data from Ferðamálastofa, gave each ServiceProvider a category value.
- On the VisitIceland site the data we got had already been filtered, and the object did not have a category property.
- Therefore 'simple' filtering of all the serviceProviders by category was not possible trough one single api query.
- We therefore had to retrieve an array of ServiceProviders through a slug with the id=number of each category from the website.
- We created an object array for the categories, replacing the categoryID with a string='name of category'
- This category array was then used to create a slug, in page/api - with dynamic routing in NEXTjs
- This created an api route where we could FETCH the filtered data for each category
that is an array of serviceProviders for that specific category.
- We then Used a graphql query used to filter and access the info for each ServiceProvider and render to the DOM.
// 
*/

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

// the GRAPHQL query from visiticeland - 
// it is possible to control how many objects are fetched with the 'take' variable.

const body = {
  operationName: null,
  variables: { take: 50, skip: 0, categoryIds: [] },
  query: `
  query(
    $categoryIds: [String!]
    $take: Int
    $skip: Int
  ) {
    ServiceProviders(
      filter: { categoryIds: $categoryIds }
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


const getData = async (category) => {
  //body.variables.regionIds[0] = regions[region]
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

// pass in the query for each slug (the [slug].js) creating a api route for each category
export default async function handler(req, res) {
  const {
    query: { slug }
  } = req
  
  const json = await getData(slug)
  res.status(200).json(json)
}

/* let regions = {
  capital: "5ec7d096a90548233654dbb2",
  west: "5ec7d096a90548233654dbaf",
  east: "5ec7d096a90548233654dbb0",
  south: "5ec7d096a90548233654dbb5",
  north: "5ec7d096a90548233654dbb3",
  reykjanes: "5ec7d096a90548233654dbb4",
  westfjords: "5ec7d096a90548233654dbb6"
} */