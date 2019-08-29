import { createStore, combineReducers } from 'redux';
import appState from './reducers/app-state';


const rootReducer = combineReducers({
    herbs: appState,
});

export default createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);