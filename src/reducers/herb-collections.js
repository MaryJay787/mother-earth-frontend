const initialState = {
    herbs: [],
    remedies: [],
    userHerbs: [],
    userRemedies: [],
    loggedInStatus: false
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case 'GET_HERBS': {
        return { ...state, herbs: action.data }
      }
      case 'GET_REMEDIES': {
        return { ...state, remedies: action.data }
      }
      case 'LOGIN': {
        return { ...state, loggedInStatus: true}
      }
      case 'LOGOUT': {
        return { ...state, loggedInStatus: false}
      }
      default: {
        return state;
      }
    }
  };