import React from 'react';
import PropTypes from 'prop-types';
import Style from './ScorePoints.scss';

const ScorePoints = (props) => (
    <p className={Style.Score}>Score: {props.points}</p>
);

ScorePoints.propTypes = {
  points: PropTypes.number,
};

export default ScorePoints;
