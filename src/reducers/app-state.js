const initialState = {
    herbs: [],
    remedies: [],
    plants: [],
    userHerbs: [],
    userRemedies: [],
    loggedInStatus: false,
    user: {},
    activeItem: 'bio',
    clicked: false
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case 'GET_HERBS': {
        return { ...state, herbs: action.herbs }
      }
      case 'GET_REMS': {
        return { ...state, remedies: action.remedies }
      }
      case 'GET_PLANTS': {
        return { ...state, plants: action.plants }
      }
      case 'LOGOUT': {
        return { ...state, loggedInStatus: false}
      }
      case 'SAVE_USER': {
        return {...state, user: action.user}
      }
      case 'CHANGE_ACTIVE': {
        return {...state, activeItem: action.name }
      }
      case 'LOGIN': {
        return { ...state, loggedInStatus: true}
      }
      case 'COLLECTION_CLICKED':{
        return { ...state, clicked: true}
      }
      case 'GET_USER_HERBS': {
        return { ...state, userHerbs: action.data}
      }
      case 'GET_USER_REMS': {
        return { ...state, userRemedies: action.data}
      }
      default: {
        return state;
      }
    }
  };