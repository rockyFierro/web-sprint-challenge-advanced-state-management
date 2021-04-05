  
import React, { useState } from "react";
import { connect } from "react-redux";
import { postSmurf } from "../actions/index.js"

const AddForm = (props) => {
  const [smurf, setSmurf] = useState({
    name: "",
    age: "",
    height: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    props.postSmurf(smurf);
    document.getElementById("smurfForm").reset();
  };

  const inputHandler = (e) => {
    e.preventDefault();
    setSmurf({ ...smurf, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={submitHandler} id="smurfForm" className="form">
        <label htmlFor="name">
          <input
          className="input"
            type="text"
            name="name"
            value={props.name}
            placeholder="name"
            id="name"
            onChange={inputHandler}
          />
        </label>
        <label htmlFor="age">
          <input
            className="input"
            type="text"
            name="age"
            value={props.age}
            placeholder="age"
            id="age"
            onChange={inputHandler}
          />
        </label>
        <label htmlFor="height">
          <input
            className="input"
            type="text"
            name="height"
            value={props.height}
            placeholder="height"
            id="height"
            onChange={inputHandler}
          />
        </label>
        <button className="btn">Add a Smurf</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    error: state.error,
  };
};

export default connect(mapStateToProps, { postSmurf })(AddForm);

//Task List:
//1. Add in all necessary import components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Add state holding name, position, nickname and description to component.
//4. Build form DOM to include inputs for name, position and description of the component.
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//      - MAKE SURE TO CORRECTLY CONNECT LABELS TO YOUR FORM INPUTS. USE THE PATERN OF SHOWN FOR NAME.
//5. Build eventhandler and listener needed to change the state.
//6. Build eventhandler and listener needed to submit a new smurf and dispatch it's assosated action.
//7. Ensure that the included alert code only displays when error text is passed in from redux.
//4. DO NOT DELETE THE data-testid FIELD FROM THE ERROR ALERT! This is used for sprint grading.
//8. Style as necessary.