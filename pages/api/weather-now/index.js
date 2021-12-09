import { useEffect, useState } from "react";


const URL = `https://api.openweathermap.org/data/2.5/onecall`;
const API_KEY = `c44f77911579d2cbc82efc379374400c`;

export const getWeather = async (city) => {

  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
  );
  const data = await res.json();
  console.log(data);
  return data;
}


