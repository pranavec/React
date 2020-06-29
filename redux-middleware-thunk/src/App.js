import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';

import * as actionCreater from './store/actions/actions';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='age'>
          Your Age: <span>{this.props.age}</span>
        </div>
        <button className='ageUp' onClick={this.props.onAgeUp}>
          Age UP
        </button>
        <button className='ageDown' onClick={this.props.onAgeDown}>
          Age DOWN
        </button>
        {this.props.loading && <img src={logo} className='App-logo' />}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    age: state.age,
    loading: state.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAgeUp: () => dispatch(actionCreater.ageUp(1)),
    onAgeDown: () => dispatch(actionCreater.ageDown(1)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
