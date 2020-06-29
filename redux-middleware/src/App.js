import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='age'>
          You Age: <span>{this.props.age}</span>
        </div>
        <button className='ageUp' onClick={this.props.onAgeUp}>
          Age UP
        </button>
        <button className='ageDown' onClick={this.props.onAgeDown}>
          Age DOWN
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    age: state.age,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAgeUp: () => dispatch({ type: 'AGE_UP', value: 1 }),
    onAgeDown: () => dispatch({ type: 'AGE_DOWN', value: 1 }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
