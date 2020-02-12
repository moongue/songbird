import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Style from './Layout.scss';

class Layout extends Component {
  render() {
    return (
      <div className={Style.Wrapper}>
        {this.props.children}
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
