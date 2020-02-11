import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Layout from './hoc/Layout/Layout';
import Header from './containers/Header/Header';
import Quiz from './containers/Quiz/Quiz';
import './App.scss';

class App extends Component {
  state = {
    sumPoints: 0,
    step: 0,
  };

  updateValue = ({ points, step }) => {
    this.setState({
      sumPoints: points,
      step,
    });
  };

  render() {
    return (
      <Layout>
        <Header points={this.state.sumPoints} steps={this.state.step}/>
        <Quiz updateData={this.updateValue}/>
      </Layout>
    );
  }
}

export default App;
