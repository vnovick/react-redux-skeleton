import { appActionTypes } from '../constants/actionTypes';

const INITIAL_STATE = {
  init: false
}


function setState(state, newState) {
    return { ...state, ...newState };
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case appActionTypes.INIT:
            return setState(state, action.state);
    }
    return state;
};