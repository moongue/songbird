import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Layout from './hoc/Layout/Layout';
import Header from './containers/Header/Header';
import Quiz from './containers/Quiz/Quiz';
import './App.scss';

class App extends Component {
  render() {
    return (
      <Layout>
        <Header />
        <Quiz />
      </Layout>
    );
  }
}

export default App;
