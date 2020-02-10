import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Question.scss';

const Question = (props) => (
  <div className={Styles.Question}>
    <div className={Styles.Question__img}>
      <img src={props.imgSrc} alt="Bird"/>
    </div>
    <div className={Styles.Right}>
      <p className={Styles.Question__name}>{props.name}</p>
      <audio className={Styles.Question__audio} controls>
        <source src={props.audio} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  </div>
);

Question.propTypes = {
  imgSrc: PropTypes.string,
  name: PropTypes.string,
  audio: PropTypes.string,
};

export default Question;
