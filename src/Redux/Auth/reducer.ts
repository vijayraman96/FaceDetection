import { GET_ACCESS_TOKEN } from '../../apollo/ApplicationService/ApplicationMutationRequest';
import { AnyObject } from '../types/index'
import {
    LOADING_START,
    LOADING_STOP,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    LOGOUT_SUCCESS,
    SIGNUP_FAILED,
    SIGNUP_SUCCESS,
    GET_PROFILE,
    IS_FIRST,
    IS_LOADING_START,
    IS_LOADING_STOP,
    IS_LOGIN_LOADING_START,
    IS_LOGIN_LOADING_STOP,
} from './types';

const InitialState: any = {
    user: {},
    profile: {},
    sessionToken: '',
    isLogin: false,
    loading: false,
    isLoading: false,
};

const Reducer = (state = InitialState, action: any): any => {
    const { type, payload } = action;
    // console.log(payload,"payloadpayload");

    switch (type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLogin: true,
                // isLoading: false,
                loading: false,
                user: payload.user,
                sessionToken: payload.sessionToken,
                response: payload.response
            };
        case LOGIN_FAILED:
            return {
                ...state,
                authenticating: false,
                isLogin: false,
                loading: false,
                isLoading: false,
                user: {},
                creator: {},
                profile: {},
                sessionToken: '',
                // login_count: 0,
                // accessed_count: 0,
            };
        case SIGNUP_SUCCESS:
            return {
                ...state,
                authenticating: false,
                isLogin: true,
                isLoading: false,
                loading: false,
                user: payload.user,
                profile: payload.profile,
                sessionToken: payload.sessionToken,
                response: payload.response,
                // login_count: payload.login_count,
                // accessed_count: payload.user_accessed_count,
            };
        case IS_LOADING_START: ///loading to check if affliated
            return {
                ...state,
                isLoading: true,
            };
        case IS_LOADING_STOP:
            return {
                ...state,
                isLoading: false,
            };
        case IS_LOGIN_LOADING_START:
            return {
                ...state,
                authenticating: true,
            };
        case IS_LOGIN_LOADING_STOP:
            return {
                ...state,
                authenticating: false,
            };
            return {
                ...state,
                is_affliated: payload,
            };
        case LOADING_START:
            return {
                ...state,
                loading: true,
                // initialLoginRoute: 'VerifyMobile',
            };
        case LOADING_STOP:
            return {
                ...state,
                loading: false,
            };

        case LOGOUT_SUCCESS:
            return {
                ...InitialState,
                initialLoginRoute: 'OnBoarding',
                loading: false,
            };

        default:
            return state;
    }
};

export default Reducer;

 