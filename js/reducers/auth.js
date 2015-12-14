import {
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
} from '../actions/auth';

export default function reducer(state = {logged: false}, action = {}) {
    switch (action.type) {
    case LOGIN:
        return {
            ...state,
            loggingIn: true,
            errorMessage: null,
            errorEmail: null,
            errorToken: null,
        };
    case LOGIN_SUCCESS:
        return {
            ...state,
            logged: true,
            loggingIn: false,
            userToken: action.token,
            errorMessage: null,
            errorEmail: null,
            errorToken: null,
        };
    case LOGIN_FAIL:
        return {
            ...state,
            logged: false,
            loggingIn: false,
            userToken: null,
            errorMessage: action.errorMessage,
            errorEmail: action.errorEmail,
            errorToken: action.errorToken,
        };
    default:
        return state;
    }
}
