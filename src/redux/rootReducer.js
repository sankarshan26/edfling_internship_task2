import { combineReducers } from 'redux';
import sidebarReducer from './reducers/sidebarReducer.js';

const rootReducer = combineReducers({
    sidebar: sidebarReducer,
});

export default rootReducer;