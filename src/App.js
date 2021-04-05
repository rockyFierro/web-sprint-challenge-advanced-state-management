import React, { Component } from "react";
import AddForm from './components/AddForm';
import SmurfDisplay from './components/SmurfDisplay';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
//redux
import { connect } from 'react-redux';
import { fetchSmurfs } from './actions'

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-primary">
          <h2 className="navbar-brand">Smurf Village Database</h2>
        </nav>
        <main>
          <AddForm/>
          <SmurfDisplay/>
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state: state
  }
}

export default connect( mapStateToProps , { fetchSmurfs })(App);

//Task List:
//1. Add in SmurfDisplay and AddForm into your application.