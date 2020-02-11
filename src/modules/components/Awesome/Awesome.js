import React from 'react';
import PropTypes from 'prop-types';
import Style from './Awesome.scss';

const Awesome = (props) => (
  <>
    <div className={Style.Awesome}>
      <h2>Невероятно!</h2>
      <p>
        Ты набрал максимальный бал.
        <br/>
        Ты наверное знаток птиц.
      </p>
      <a href="https://www.youtube.com/watch?v=5lCRsLjMeso" target={'_blank'}>Успокоится</a>
    </div>
    <div onClick={props.handlerClose} className={Style.Blocker} />
  </>
);

Awesome.propTypes = {
  handlerClose: PropTypes.func
}

export default Awesome;
