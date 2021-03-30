import WeatherActionTypes from './weather.types';
import { removeCityFromFavoritesArray } from './weather.utils';

const INITIAL_STATE = {
  currentCity: {
    cityName: 'Tel Aviv',
    cityCode: '215854'
  },
  currentCityWeather: {},
  favoriteCities: []
};

const weatherReducer = (state = INITIAL_STATE, action = {}) => {
  const {type, payload} = action;
  let newState;
  switch (type) {
    case WeatherActionTypes.UPDATE_CURRENT_CITY:
      newState = {...state, currentCity: {...state.currentCity, ...payload}};
      break;
    case WeatherActionTypes.UPDATE_CURRENT_CITY_WEATHER:
      newState = {...state, currentCityWeather: {...state.currentCityWeather, ...payload}};
      break;
    case WeatherActionTypes.ADD_CITY_TO_FAVORITES:
      newState = {...state, favoriteCities: [...state.favoriteCities, payload]};
      break;
    case WeatherActionTypes.REMOVE_CITY_FROM_FAVORITES:
      newState =  {...state, favoriteCities: removeCityFromFavoritesArray(state.favoriteCities, payload)};
      break;
    // case VideosActionTypes.REMOVE_VIDEO_FROM_LIST:
    //   newState =  {...state, videosList: removeItemFromList(state.videosList, payload)};
    //   break;
    default:
      newState = state;
  }
  return newState;
};

export default weatherReducer;