import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import * as taskActions from './actions/task'
import { bindActionCreators } from 'redux'
import { Main } from "./Main.jsx"

const App = (props) => (
  <div>
    <Main
      {...props}
    />
  </div>
)

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(taskActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
