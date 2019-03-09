import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <style jsx>{`
        div {
          text-align: center;
          font-family: cursive;
        }
        `}</style>
      <h1>Avery's Organics</h1>
      <Link to='/'>Market Schedule</Link> | <Link to='/calendar'>Produce Calendar</Link>
    </div>
  );
}

export default Header;
