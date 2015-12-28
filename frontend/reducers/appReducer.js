import { appActionTypes } from 'constants/actionTypes';

const INITIAL_STATE = {};

function setState(state) {
    let newState = { ...state, ...window.pdo };
    window.pdo = "RESTRICTED CONTENT";
    return newState;
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case appActionTypes.SET_STATE:
            return setState(state, action.state);
    }
    return state;
};