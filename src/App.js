import React, { Component } from 'react';
import { connect } from 'react-redux'; /* STEP1A: connect apps state to props */
import './App.css';

class App extends Component {

  handleOnClick() {
    this.props.dispatch({
      type: 'INCREASE_COUNT',
    });
  }

  render() {
    return (
      <div className="App">
        <button onClick={(event) => this.handleOnClick()}>
          Click
        </button>
        <p>{this.props.items.length}</p>
      </div>
    );
  }
};

// STEP 1B: CREATE FUNCTION TO LISTEN TO EVERY CHANGE IN STORE
const mapStateToProps = (state) => {
  return { items: state.items }
}

// STEP 1C: connect
export default connect(mapStateToProps)(App);
