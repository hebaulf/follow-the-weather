import React from 'react';
import { createState, useState } from '@hookstate/core';
//import { evolve, clone } from 'ramda'

// internal variables - pass in object state props
// set a globalState for activities
const globalState = createState({
  selectedCategory: 'swimming',
  activities: {},
  boundaries: null
});

const wrapState = (s) => ({
  get: () => s.value,
  setActivities: (activities, category) => {
    s.activities[category].set(activities)
  },
  setSelectedCategory: (category) => {
    s.selectedCategory.set(category);
  },
  getSelectedCategory: () => {
    return s.value.selectedCategory
  },
  // set bounds to filter out activities that are in viewport
  setBoundaries: (bounds) => {
    s.boundaries.set(bounds);
  },

  // get the activities in the selected category
  getActivitiesSelectedCategory: () => {
    //console.log('These are the activites in viewport', s.value)
    const activities = s.value.selectedCategory ? s.value.activities[s.value.selectedCategory] ?? [] : [] ?? [];
    // find and return activities
    if (s.value.boundaries !== null) {
      console.log('is returning filtered activities')
      return activities.filter(activity => checkIfCoordsIsWithInBoundaries(activity, s.value.boundaries))
    }
    // create a new object with category value
    return s.value.selectedCategory ? s.value.activities[s.value.selectedCategory] ?? [] : [] ?? []
  }
});

// function to check if the coordinates of the activity is within the viewport boundries
const checkIfCoordsIsWithInBoundaries = (activity, boundaries) => {
  //console.log(boundaries)
  const coordinates = activity.location.coordinates
  const lng = coordinates[0];
  const lat = coordinates[1];

  // if the latitude and longitude coords are within the boundaries by checking
  //if they are smaller og equal to the lat[northeast, southwest], lng[northeast,]
  const isWithinLat = lat <= boundaries._ne.lat && lat >= boundaries._sw.lat;
  const isWithinLng = lng <= boundaries._ne.lng && lng >= boundaries._sw.lng;
  return isWithinLat && isWithinLng;
}

// The following 2 functions can be exported
export const accessGlobalState = () => wrapState(globalState)
export const useGlobalState = () => wrapState(useState(globalState))