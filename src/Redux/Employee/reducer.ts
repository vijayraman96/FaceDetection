import { GET_ACCESS_TOKEN } from '../../apollo/ApplicationService/ApplicationMutationRequest';
import { AnyObject } from '../types/index'
import {
    SET_EMPLOYEE_DETAILS,
    UPDATE_EMPLOYEE_DETAILS,
    EMPLOYEE_DETAILS
   
} from './types';

const InitialState: any = {
    employee: {},
    loading: false,
    isLoading: false,
};

const Reducer = (state = InitialState, action: any): any => {
    const { type, payload } = action;
    // console.log(payload,"payloadpayload");

    switch (type) {
        case SET_EMPLOYEE_DETAILS:
            return {
                ...state,
                employee: payload,
                loading: false,
            };
        case UPDATE_EMPLOYEE_DETAILS:
            return {
                ...state,
                employee: {
                    ...state.employee,
                    ...payload,
                },
                loading: false,
            };
        default:
            return state;
    }
};

export default Reducer;

 