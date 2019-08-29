const initialState = {
    herbs: [],
    remedies: [],
    plants: [],
    userHerbs: [],
    userRemedies: [],
    loggedInStatus: false,
    user: {},
    activeItem: 'bio'
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case 'GET_HERBS': {
        return { ...state, herbs: action.herbs }
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
      case 'SAVE_USER': {
        return {...state, user: action.user}
      }
      case 'CHANGE_ACTIVE': {
        return {...state, activeItem: action.name}
      }
      case 'GET_PLANTS': {
        return { ...state, plants: action.plants }
      }
      default: {
        return state;
      }
    }
  };