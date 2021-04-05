import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  POST_START,
  POST_SUCCESS,
  POST_FAILURE
} from "../actions";


const initialState = {
  smurfs: [],
  isLoading: false,
  error: "",
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
      case FETCH_START:
          return {
              ...state,
              isLoading: true,
              error: ''
          };
      case FETCH_SUCCESS:
          return {
              ...state,
              smurfs: action.payload,
              isLoading: false,
              error: ''
          };
      case FETCH_FAILURE:
          return {
              ...state,
              isLoading: false,
              error: action.payload
          }
      case POST_START: 
          return {
              ...state,
              smurfs: [...state.smurfs],
              isLoading: true,
              error: '',
          };
      case POST_SUCCESS:
          return {
              ...state,
              smurfs: action.payload,
              isLoading: false,
              error: '',
          }
      case POST_FAILURE:
          return {
              ...state,
              isLoading: false,
              error: action.payload
          }
          default:
              return state;
  }
};

export default reducer;

//Task List:
//1. Add in the initialState needed to hold: 
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//2. Setup your reducer to take the state and action as peremeters
//3. Add in cases to your reducer to handle:
//      - The start of an api call
//      - The end of an api call
//      - The adding a smurf to the smurf list when added into payload
//      - Setting Error Text
//      - Any other state changes you see as necessary