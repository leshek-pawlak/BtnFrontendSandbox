import fetch from 'isomorphic-fetch';

import urls from '../config/urls';

export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export function login(email, password, history, nextPath, provider = 'local') {
    return dispatch => {
        dispatch({
            type: LOGIN,
        });

        fetch(urls.login, {
            method: 'post',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                token: password,
                provider: provider,
            }),
        }).then(function(response) {
            if (response.status >= 300) {
                if (response.status >= 400 && response.status < 500) {
                    response.json().then(function(json) {
                        dispatch({
                            type: LOGIN_FAIL,
                            errorMessage: json.detail,
                            errorEmail: json.email ? json.email[0] : null,
                            errorToken: json.token ? json.token[0] : null,
                        });
                    });
                } else {
                    dispatch({
                        type: LOGIN_FAIL,
                        errorMessage: 'Something went wrong. Please try again.',
                    });
                }

                return Promise.reject();
            }

            return response.json();
        }).then(function(json) {
            setLogged(json.token, history, nextPath, json.user)(dispatch);
        }).catch(function() {
            // XXX: shall we log the errors?
        });
    };
}

export function setLogged(token, history, nextPath, profile = {}) {
    return dispatch => {
        dispatch({
            type: LOGIN_SUCCESS,
            token: token,
            profile: profile,
        });

        window.localStorage.setItem('logged', true);
        window.localStorage.setItem('token', token);

        history.pushState(null, nextPath);
    };
}
