import WeatherActionTypes from './weather.types';

export const updateCurrentCityWeather = (currentCityWeatherData) => ({
  type: WeatherActionTypes.UPDATE_CURRENT_CITY_WEATHER,
  payload: currentCityWeatherData
});

export const updateCurrentCity = (city) => ({
  type: WeatherActionTypes.UPDATE_CURRENT_CITY,
  payload: city
});

export const addCityToFavorites = (city) => ({
  type: WeatherActionTypes.ADD_CITY_TO_FAVORITES,
  payload: city
});

export const removeCityFromFavorites = (city) => ({
  type: WeatherActionTypes.REMOVE_CITY_FROM_FAVORITES,
  payload: city
});

// export const replaceVideosList = (videos) => ({
//   type: WeatherActionTypes.REPLACE_VIDEOS_LIST,
//   payload: videos
// });