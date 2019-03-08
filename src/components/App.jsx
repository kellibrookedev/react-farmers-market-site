import React from 'react';
import MarketScheduleBox from './MarketScheduleBox';
import ProduceCalendarBox from './ProduceCalendarBox';

function App() {
  return (
    <div className="container">
      <style jsx>{`
        h1 {
          text-align: center;
          font-family: cursive;
        }
        `}</style>
    <h1>Avery's Organics</h1>
      <MarketScheduleBox/>
      <ProduceCalendarBox/>
    </div>
  );
}

export default App;
