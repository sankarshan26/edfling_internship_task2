// reducer.js

import { OPEN_SIDEBAR, CLOSE_SIDEBAR } from '../actions/sidebarActions';

const initialState = {
    isSidebarOpen: false,
};

const sidebarReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_SIDEBAR:
            return {...state, isSidebarOpen: true };
        case CLOSE_SIDEBAR:
            return {...state, isSidebarOpen: false };
        default:
            return state;
    }
};

export default sidebarReducer;