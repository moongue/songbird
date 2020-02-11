import React, { Component } from 'react';
import PropTypes from 'prop-types';
import birdsData from '../../data/dataBirds';
import Question from '../../components/Question/Question';
import Variants from '../../components/Variants/Variants';
import VariantsStyles from '../../components/Variants/Variants.scss';
import Styles from './Quiz.scss';
import NavQuizStyles from '../../components/NavQuiz/NavQuiz.scss';
import ButtonStep from '../../components/ButtonStep/ButtonStep';
import Congratulation from '../../components/Congratulation/Congratulation';

class Quiz extends Component {
  state = {
    truthAnswer: false,
    showInf: false,
    chooseBird: null,
    sumPoints: 0,
    points: 6,
    step: 0,
    buttonNextStep: false,
    indexAnswers: new Set(),
    idBirdOnQuestion: Math.floor(Math.random() * 5),
  };

  changeCurrentStep = () => {
    const elements = document.querySelectorAll(`.${NavQuizStyles.NavQuiz__item}`);
    elements.forEach((item, index) => {
      item.classList.remove(`${NavQuizStyles.NavQuiz__item_active}`);
      if (index === this.state.step) {
        item.classList.add(`${NavQuizStyles.NavQuiz__item_active}`);
      }
    });
  };

  variantsHandler = (index) => {
    const { target } = event;
    const { sumPoints, indexAnswers, buttonNextStep } = this.state;
    let { points } = this.state;
    if (!indexAnswers.has(index)) {
      points = points === 0 ? 0 : --points;
    }
    if (!buttonNextStep) {
      if (index === this.state.idBirdOnQuestion) {
        this.setState({
          sumPoints: sumPoints + points,
          truthAnswer: true,
          buttonNextStep: true,
        });
        this.props.updateData(sumPoints + points);
      }
      if (index === this.state.idBirdOnQuestion) {
        target.classList.add(`${VariantsStyles.Variants__item_correct}`);
      } else {
        target.classList.add(`${VariantsStyles.Variants__item_uncorrect}`);
      }
    }
    this.setState({
      points,
      showInf: true,
      chooseBird: index,
      indexAnswers: indexAnswers.add(index),
    });
  };

  nextStepHandler = () => {
    let { step } = this.state;
    this.setState({
      points: 6,
      showInf: false,
      truthAnswer: false,
      step: ++step,
      buttonNextStep: false,
      indexAnswers: new Set(),
    });
  };

  restartHandler = () => {
    new Promise((resolve) => {
      resolve(this.setState({
        points: 6,
        showInf: false,
        truthAnswer: false,
        sumPoints: 0,
        step: 0,
        buttonNextStep: false,
        indexAnswers: new Set(),
      }));
    }).then(() => this.props.updateData(this.state.sumPoints));
  };

  render() {
    const {
      showInf, chooseBird, truthAnswer, step, idBirdOnQuestion, buttonNextStep, sumPoints
    } = this.state;
    setTimeout(() => this.changeCurrentStep(), 0);
    if (step === 6) {
      return (
        <>
          <Congratulation sumPoints={sumPoints} restart={this.restartHandler}/>
          {sumPoints === 30 ? <h1>Hello!</h1> : null}
        </>
      );
    }
    return [
      truthAnswer
        ? <Question
          kindBird={false}
          showDescr={false}
          key={'Question'}
          name={birdsData[step][idBirdOnQuestion].name}
          imgSrc={birdsData[step][idBirdOnQuestion].image}
          audio={birdsData[step][idBirdOnQuestion].audio}
        />
        : <Question
          kindBird={false}
          showDescr={false}
          key={'Question'}
          name="******"
          imgSrc="https://birds-quiz.netlify.com/static/media/bird.06a46938.jpg"
          audio={birdsData[step][idBirdOnQuestion].audio}
        />,
      <div key={'Quiz-row'} className={Styles.Row}>
        <Variants key={'Variants'}>
          {birdsData[step].map((item, index) => (
            <li onClick={this.variantsHandler.bind(this, index)}
                className={VariantsStyles.Variants__item}
                key={item.name}>{item.name}</li>
          ))}
        </Variants>

        <div className={Styles.Inf}>
          {showInf
            ? <Question
              showDescr={true}
              description={birdsData[step][chooseBird].description}
              kindBird={true}
              kind={birdsData[step][chooseBird].species}
              name={birdsData[step][chooseBird].name}
              imgSrc={birdsData[step][chooseBird].image}
              audio={birdsData[step][chooseBird].audio}
            />
            : <div>Послушайте плеер<br/>
              Выберите птицу из списка</div>
          }
        </div>
      </div>,
      <ButtonStep nextStepHandler={this.nextStepHandler}
                  active={buttonNextStep}
                  key={'ButtonStep'}/>
    ];
  }
}

Quiz.propTypes = {
  updateData: PropTypes.func,
};

export default Quiz;
