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
      { title: 'Водоплавающие', active: false },
      { title: 'Лесные', active: false },
      { title: 'Всеядные', active: false },
      { title: 'Хищные', active: false },
      { title: 'Насекомоядные', active: false },
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
};

Header.propTypes = {
  points: PropTypes.number,
};

export default Header;
