import React from 'react';
import PropTypes from 'prop-types';

function MonthDetailBox(props) {
  return (
    <div>
      <style jsx>{`
        .outer-box{
          border: 1px black solid;
          border-radius: 5px;
          width: 30%;
          height: 330px;
          float: left;
          background-color: lightyellow;
          margin: 5px;
          padding: 10px;
          text-align: center;
        }
        .plant-div {
          float: left;
          margin-right: 3px;
        }
        h5 {
          margin-top: 0px;
        }
        `}</style>
      <div className="outer-box">
        <h5>{props.month}</h5>
            {props.selection.map((aPlant, index) =>
              <div className="plant-div">{aPlant} |</div>
            )}

      </div>

    </div>
  );
}

MonthDetailBox.propTypes = {
  month: PropTypes.string,
  selection: PropTypes.arrayOf(PropTypes.string)
};

export default MonthDetailBox;
