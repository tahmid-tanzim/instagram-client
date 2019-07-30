import { combineReducers } from 'redux';
import sidebarReducer from './sidebar';
import redirectToReducer from './redirect-to';

export default combineReducers({
    sidebar: sidebarReducer,
    redirectTo: redirectToReducer
});