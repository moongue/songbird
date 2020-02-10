import React, { Component } from 'react';
import Style from './Header.scss';
import ScorePoints from '../../components/Score/ScorePoints';
import NavQuiz from '../../components/NavQuiz/NavQuiz';
import NavQuizStyles from '../../components/NavQuiz/NavQuiz.scss';

const img = require('./img/logo.svg');

class Header extends Component {
  state = {
    points: 0,
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
          <ScorePoints points={this.state.points}/>
        </div>
        <NavQuiz>
          {this.state.navQuiz.map((li) => (
            <li key={li.title}
                className={li.active ? (`${NavQuizStyles.NavQuiz__item} ${NavQuizStyles.NavQuiz__item_active}`
                ) : NavQuizStyles.NavQuiz__item}><a href={'#'}>{li.title}</a></li>
          ))}
        </NavQuiz>
      </header>
    );
  }
}

export default Header;
