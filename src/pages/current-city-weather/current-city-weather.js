import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import './current-city-weather.scss';
import { weatherApiKey } from '../../config';
import { updateCurrentCityWeather } from '../../redux/weather/weather.actions';
import Autocomplete from '../../components/autocomplete/autocomplete';
import DetailedWeather from '../../components/detailed-weather/detailed-weather';

const CurrentCityWeather = () => {
  const dispatch = useDispatch();
  const currentCity = useSelector(state => state.weather.currentCity) || {};

  const fetchCurrentDayWeather = async () => {
    const {cityCode = ''} = currentCity;
    try {
      // `http://dataservice.accuweather.com/currentconditions/v1/${cityCode}?apikey=${weatherApiKey}&details=true`
      const response = await axios.get(`http://localhost:8001/currentconditions/v1/215854`);
      const {data = []} = response;
      if (data.length > 0) {
        dispatch(updateCurrentCityWeather({currentDay: data[0]}));
      }
    } catch(error) {
      console.log(error);
    }
  };

  const fetchFiveDayForecast = async () => {
    const {cityCode = ''} = currentCity;
    try {
      // `http://localhost:8001/forecasts/v1/daily/5day/${cityCode}`
      const response = await axios.get(`http://localhost:8001/forecasts/v1/daily/5day/215854`);
      const {data = {}} = response;
      if (Object.keys(data).length > 0) {
        dispatch(updateCurrentCityWeather({fiveDaysForecast: data}));
      }
    } catch(error) {
      console.log(error);
    }
  };

  const fetchWeatherData = async () => {
    await Promise.all([fetchCurrentDayWeather(), fetchFiveDayForecast()]);
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);

  return (
    <div className="current-city-page">
      <Autocomplete />
      <DetailedWeather /> 
    </div>
  );
};

export default CurrentCityWeather;
