import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Variants.scss';

const Variants = (props) => (
    <ul className={Styles.Variants}>
      {props.children}
    </ul>
);


Variants.propTypes = {
  children: PropTypes.node,
};

export default Variants;
