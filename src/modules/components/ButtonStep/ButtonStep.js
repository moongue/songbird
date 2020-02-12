import React from 'react';
import PropsTypes from 'prop-types';
import Styles from './ButtonStep.scss';

const ButtonStep = (props) => (
  <button
    onClick={props.nextStepHandler}
    className={Styles.ButtonStep}
    disabled={!props.active} >
    Next Level
  </button>
);

ButtonStep.propTypes = {
  active: PropsTypes.bool,
  nextStepHandler: PropsTypes.func,
};

export default ButtonStep;
