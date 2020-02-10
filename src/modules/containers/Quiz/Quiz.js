import React, { Component } from 'react';
import Question from '../../components/Question/Question';
import birdsData from '../../data/dataBirds';

class Quiz extends Component {
  state = {
    truthAnswer: false,
    step: 0,
    idBirdOnQuestion: Math.floor(Math.random() * 5),
  };

  render() {
    const { truthAnswer, step, idBirdOnQuestion } = this.state;
    return (
      truthAnswer
        ? <Question
          name={birdsData[step][idBirdOnQuestion].name}
          imgSrc={birdsData[step][idBirdOnQuestion].image}
          audio={birdsData[step][idBirdOnQuestion].audio}
          />
        : <Question
          name='******'
          imgSrc='https://birds-quiz.netlify.com/static/media/bird.06a46938.jpg'
          audio={birdsData[step][idBirdOnQuestion].audio}
          />
    );
  }
}

export default Quiz;
