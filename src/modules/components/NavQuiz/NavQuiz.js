import React from 'react';
import PropTypes from 'prop-types';
import Styles from './NavQuiz.scss';

const NavQuiz = (props) => (
  <ul className={Styles.NavQuiz}>
    {props.children}
  </ul>
);

NavQuiz.propTypes = {
  children: PropTypes.node,
};

export default NavQuiz;
