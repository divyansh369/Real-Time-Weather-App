/**
 * @license MIT
 * @fileoverview All API-related stuff like API keys, API requests, etc.
 * @copyright codewithsadee 2023 All rights reserved
 * @author codewithsadee <mohammadsadee24@gmail.com>
 */

'use strict';

const apiKey = "d4a7065fc3acd0234c0f3f759f9ceee3";

/**
 * Fetch data from the server
 * @param {string} URL API URL
 * @param {Function} callback callback
 */
export const url = {
  currentWeather(lat, lon) {
    // return `https://api.openweathermap.org/data/2.5/weather?${lat}&${lon}&appid=${apiKey}`;
    return `https://api.openweathermap.org/data/2.5/weather?${lat}&${lon}&appid=${apiKey}&units=metric`;
  },
  forecast(lat, lon) {
    return `https://api.openweathermap.org/data/2.5/forecast?${lat}&${lon}&appid=${apiKey}`;
  },
  airPollution(lat, lon) {
    return `https://api.openweathermap.org/data/2.5/air_pollution?${lat}&${lon}&appid=${apiKey}`;
  },
  reverseGeo(lat, lon) {
    return `https://api.openweathermap.org/geo/1.0/reverse?${lat}&${lon}&limit=5&appid=${apiKey}`;
  },
  /**
   * @param {string} query Search query
   */
  geo(query) {
    return `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${apiKey}`;
  },
};

export const fetchData = function (URL, callback) {
  fetch(URL)
    .then((res) => {
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      return res.json();
    })
    .then((data) => callback(data))
    .catch((error) => {
      console.error('Error:', error);
    });
};
