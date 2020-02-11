import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Congrutation.scss';

const Congratulation = (props) => (
  <div className={Styles.Congratulation}>
    <h2>Поздравляем!</h2>
    <p>Вы прошли викторину и  набрали {props.sumPoints} из 30</p>
    <button onClick={props.restart}>Попробовать ещё раз</button>
  </div>
);

Congratulation.propTypes = {
  sumPoints: PropTypes.number,
  restart: PropTypes.func,
};

export default Congratulation;
