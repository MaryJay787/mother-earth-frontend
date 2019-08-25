import { createStore, combineReducers } from 'redux';
import herbCollections from './reducers/herb-collections';


const rootReducer = combineReducers({
  herbs: herbCollections,
});

export default createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);