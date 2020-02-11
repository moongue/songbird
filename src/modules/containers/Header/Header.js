import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Style from './Header.scss';
import ScorePoints from '../../components/Score/ScorePoints';
import NavQuiz from '../../components/NavQuiz/NavQuiz';
import NavQuizStyles from '../../components/NavQuiz/NavQuiz.scss';

const img = require('./img/logo.svg');

class Header extends Component {
  state = {
    navQuiz: [
      { title: 'Разминка', active: true },
      { title: 'Воробьиные', active: false },
      { title: 'Лесные птицы', active: false },
      { title: 'Певчие птицы', active: false },
      { title: 'Хищные птицы', active: false },
      { title: 'Морские птицы', active: false },
    ]
  };

  render() {
    return (
      <header className={Style.Header}>
        <div className={Style.Top}>
          <a className={Style.Logo} href={'#'}>
            <img src={img} alt="Logo"/>
          </a>
          <ScorePoints points={this.props.points}/>
        </div>
        <NavQuiz>
          {this.state.navQuiz.map((li) => (
            <li key={li.title}
                className={li.active
                  ? (`${NavQuizStyles.NavQuiz__item} ${NavQuizStyles.NavQuiz__item_active}`)
                  : NavQuizStyles.NavQuiz__item}>{li.title}</li>
          ))}
        </NavQuiz>
      </header>
    );
  }
}

Header.defaulProps = {
  points: 0,
  step: 0
};

Header.propTypes = {
  points: PropTypes.number,
  step: PropTypes.number,
};

export default Header;
