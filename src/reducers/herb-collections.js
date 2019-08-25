const initialState = {
    herbs: [],
    remedies: [],
    userHerbs: [],
    userRemedies: []
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case 'GET_HERBS': {
        return { ...state, herbs: action.data }
      }
      case 'GET_REMEDIES': {
        return { ...state, remedies: action.data }
      }
      default: {
        return state;
      }
    }
  };