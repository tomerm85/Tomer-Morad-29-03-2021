import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.scss';
import Header from './components/header/header';
import CurrentCityWeather from './pages/current-city-weather/current-city-weather';
import Favorites from './pages/favorites/favorites';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <>
          <div className="App">
            <Route path='/' exact component={CurrentCityWeather} />
            <Route path='/favorites' component={Favorites} />
          </div>
        </>
      </Switch>
    </Router>
  );
}

export default App;
