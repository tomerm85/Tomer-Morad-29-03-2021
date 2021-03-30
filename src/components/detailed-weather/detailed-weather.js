import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import DayItem from '../day-item/day-item';
import { addCityToFavorites, removeCityFromFavorites, updateCurrentCity } from '../../redux/weather/weather.actions';
import whiteHeartSrc from '../../assets/white-heart.svg';
import redHeartSrc from '../../assets/red-heart.svg';
import './detailed-weather.scss';

const DetailedWeather = () => {
  const dispatch = useDispatch();
  const currentCity = useSelector(state => state.weather.currentCity) || {};
  const currentCityWeather = useSelector(state => state.weather.currentCityWeather) || {};
  const {cityName = '', isFavorite} = currentCity;
  const favoriteHeartSrc = isFavorite ? redHeartSrc : whiteHeartSrc;
  const favoriteButtonText = isFavorite ? 'Remove From Favorites' : 'Add to Favorites';
  const {currentDay = {}, fiveDaysForecast = {}} = currentCityWeather;
  const {DailyForecasts = []} = fiveDaysForecast;
  const isToRenderFiveDaysForecast = !!DailyForecasts.length;
  const isCurrentDayDataReady = !!Object.keys(currentDay).length;
  const {WeatherText = '', RealFeelTemperature = {}, Photos = []} = currentDay;
  const {Metric: {Value} = {}} = RealFeelTemperature;
  const cityImgUrl = Photos.length && Photos[0].PortraitLink;

  const toggleCity = () => {
    currentCity.isFavorite = !currentCity.isFavorite;
    if (currentCity.isFavorite) {
      dispatch(addCityToFavorites(currentCity));
    } else {
      dispatch(removeCityFromFavorites(currentCity));
    }
    dispatch(updateCurrentCity({isFavorite: currentCity.isFavorite}));
  }

  return (
    <>
      {isCurrentDayDataReady && (
        <div className="detailed-weather">
          <div className="city-and-favorites-bar">
            <div className="city-details">
              <img src={cityImgUrl} alt="city-pic" />
              <div className="city-name-and-temperature">
                <div className="city-text">{cityName}</div>
                <div className="city-temperature">{Value}&#176;c</div>
              </div>
    
            </div>
            <div className="add-to-favorites-section">
              <img src={favoriteHeartSrc} alt="favorite-heart" />
              <button type="button" className="add-to-favorites-button" onClick={toggleCity}>{favoriteButtonText}</button>
            </div>
          </div>
          <h1>{WeatherText}</h1>
          {isToRenderFiveDaysForecast && (
            <div className="five-days-forecast-section">
              {DailyForecasts.map((dayItem, index) => {
                const key = `${dayItem.EpochDate}_${index}`;
                return <DayItem key={key} day={dayItem} />
              })}
            </div>
          )}
      </div>
      )}
    </>
  );
};

export default DetailedWeather;
