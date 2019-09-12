const initialState = {
    herbs: [],
    remedies: [],
    plants: [],
    userHerbs: [],
    userRemedies: [],
    loggedInStatus: false,
    notes: [],
    user: {},
    activeItem: 'bio',
    clicked: false, 
    herb_id: null,
    rem_id: null,
    one_herb: null,
    user_herb_collections: [],
    user_rem_collections: []
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
        return { ...state, userHerbs: action.data, user_herb_collections: action.user_herb_collects}
      }
      case 'GET_USER_REMS': {
        return { ...state, userRemedies: action.data, user_rem_collections: action.user_rem_collects}
      }
      case 'TRACK_HERB_NOTE': {
        return { ...state, herb_id: action.herb_id }
      }
      case 'TRACK_REM_NOTE': {
        return { ...state, rem_id: action.rem_id }
      }
      case 'ONE_HERB': {
        return { ...state, one_herb: action.data}
      }
      case 'GET_USER_NOTES': {
        return { ...state, notes: action.data}
      }
      case 'DELETE_NOTE': {
        const index = state.notes.indexOf(action.note)
        if (index > -1) {
          state.notes.splice(index, 1);
        }
        return { ...state, notes: state.notes}
      }
      case 'DELETE_REM': {
        const index = state.userRemedies.indexOf(action.remedy)
        if (index > -1) {
          state.userRemedies.splice(index, 1);
        }
        return { ...state }
      }
      case 'DELETE_HERB': {
        const index = state.userHerbs.indexOf(action.herb)
        if (index > -1) {
          state.userHerbs.splice(index, 1);
        }
        return { ...state }
      }
      case 'CLR_REM_TRACKER': {
        return { ...state, rem_id: null}
      }
      case 'CLR_HERB_TRACKER':{
        return {...state, herb_id: null}
      }
      case 'CLR_HERB_&_REM_TRACKER': {
        return {...state, herb_id: null, rem_id: null}
      }
      default: {
        return state;
      }
    }
  }; 