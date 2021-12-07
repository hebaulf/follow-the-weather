import React from 'react';
import { createState, useState, State } from '@hookstate/core';
import { evolve, clone } from 'ramda'

// internal variables
// pass in object 
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

  setBoundaries: (bounds) => {
    s.boundaries.set(bounds);
  },

  getActivitiesSelectedCategory: () => {
    console.log(s.value)
    const activities = s.value.selectedCategory ? s.value.activities[s.value.selectedCategory] ?? [] : [] ?? [];
    
    if (s.value.boundaries !== null) {
      console.log('is returning filtered activities')
      return activities.filter(activity => checkIfCordAIsWithInBoundaries(activity, s.value.boundaries)  )
    }
    return s.value.selectedCategory ? s.value.activities[s.value.selectedCategory] ?? [] : [] ?? []
  }
})


const checkIfCordAIsWithInBoundaries = (activity, boundaries) => {
  console.log(boundaries)
  const coordinates = activity.location.coordinates
  const lng = coordinates[0];
  const lat = coordinates[1];

  const isWithinLat = lat <= boundaries._ne.lat && lat >= boundaries._sw.lat;
  const isWithinLng = lng <= boundaries._ne.lng && lng >= boundaries._sw.lng;
  return isWithinLat && isWithinLng;
}

// The following 2 functions can be exported now:
export const accessGlobalState = () => wrapState(globalState)
export const useGlobalState = () => wrapState(useState(globalState))


