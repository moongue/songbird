import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Question.scss';

const Question = (props) => (
  <div className={props.kind
    ? (`${Styles.Question} ${Styles.Question_small}`)
    : Styles.Question}>
    <div className={Styles.Question__img}>
      <img src={props.imgSrc} alt="Bird"/>
    </div>
    <div className={Styles.Right}>
      <p className={props.kind
        ? (`${Styles.Question__name} ${Styles.Question__name_small}`)
        : Styles.Question__name}>{props.name}</p>
      {props.kindBird ? <p className={Styles.Question__kind}>{props.kind}</p> : null}
      <audio src={props.audio} className={Styles.Question__audio} controls />
    </div>
    <div>{props.showDescr
      ? <p className={Styles.Question__description}>{props.description}</p>
      : null}</div>
  </div>
);

Question.propTypes = {
  showDescr: PropTypes.bool,
  description: PropTypes.string,
  imgSrc: PropTypes.string,
  name: PropTypes.string,
  audio: PropTypes.string,
  kindBird: PropTypes.bool,
  kind: PropTypes.string,
};

export default Question;
