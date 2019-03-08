import React from 'react';
import PropTypes from 'prop-types';

function EventDetailBox(props) {
  return (
    <div>
      <style jsx>{`
        .outer-box {
          border: 1px black solid;
          border-radius: 5px;
          width: 30%;
          height: 150px;
          float: left;
          background-color: lightblue;
          margin: 5px;
        }
        h5 {
          margin-top: 10px;
          text-align: center;
        }
        .row {
          margin: 0px 0px;
          padding: 0px 0px;
        }

        .col.s4 {
          text-align: right;
        }
        `}</style>
      <div className="outer-box">
      <h5>{props.day}</h5>

        <div className="row">
          <div className="col s4">
            <strong>Location </strong>
          </div>
          <div className="col s8">
            {props.location}
          </div>
        </div>

        <div className="row">
          <div className="col s4">
            <strong>Booth </strong>
          </div>
          <div className="col s8">
            {props.booth}
          </div>
        </div>

        <div className="row">
          <div className="col s4">
            <strong>Hours </strong>
          </div>
          <div className="col s8">
            {props.hours}
          </div>
        </div>

      </div>

    </div>
  );
}

EventDetailBox.propTypes = {
  day: PropTypes.string,
  location: PropTypes.string,
  booth: PropTypes.string,
  hours: PropTypes.string
};

export default EventDetailBox;
