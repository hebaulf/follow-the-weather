## Folder structure for components

Components

- atoms
- layout
- blocks
- sections

Layout

- PageWrapper
  -- MainContent
  -- Sidebar

Page Templates

## Home

## Weather Now

Main View

HeaderSection

- Full Width Image
- Page Title block
  -- Headline + Paragraph
  -- Button (to activities in this location based on weather)
- 'Fun facts' - what to wear, weather lingo etc.
- Recommended activities block
  -- Section headline
  -- List of activity cards: Image, Title, Short Description, Button (on click open up activity template page)

## City page with weather

- shows city name
- activity in the region
  REGION:CATEGORY(RECREATION):SUBCATEGORY:SERVICE_PROVIDER
- When you click 'weather now', route to page which queries your current location.
- Current location page displays the weather info now in sidebar and in main view there comes general
  info about the weather in your location, and then a suggested list of activity types in the recreation category based on the current weather.
- Click on a type of activity from list 'hiking' =>
- open page 'recreation template' - displays general info on the type of activity and a list of service provider in your region based on the current
- Region(City) shows a list of subcategorys in the category:recreation
- Click on a subcategory(type of activity, e.g. hiking) =>
- sent to a page 'activity template (slug = activity name)'
  location:id (id=lat/lon), locatin:id/thingstodo/hiking/hiking:id
