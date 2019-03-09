import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Header';
import MarketScheduleBox from './MarketScheduleBox';
import ProduceCalendarBox from './ProduceCalendarBox';

function App() {
  return (
    <div className="container">
      <Header/>
      <Switch>
      <Route exact path='/' component={MarketScheduleBox}/>
      <Route path='/calendar' component={ProduceCalendarBox}/>
      </Switch>
    </div>
  );
}

export default App;
