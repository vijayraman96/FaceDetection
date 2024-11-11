
import { Dispatch } from "redux";
import { SET_EMPLOYEE_DETAILS, UPDATE_EMPLOYEE_DETAILS } from "./types";
import Toast from "react-native-toast-message";
import { ADMIN_LOGIN } from "../../apollo/AdminService/AdminMutationRequest";
import ApolloService from "../../apollo/ApolloService";
import graphHandler from "../../apollo/graphHandler";
import { parseApolloError } from "../../utils/Functions/filter";
import { LOGIN_FAILED, IS_LOGIN_LOADING_STOP } from "../Auth/types";
import { setToken, setUserID } from "../Local/action";
import { CREATE_EMPLOYEE } from "../../apollo/ProfileService/ProfileMutationRequest";

export const rSetEmployeeDetails = (employee_details: any) => (dispatch: Dispatch<any> )  => {
  dispatch( {
        type: SET_EMPLOYEE_DETAILS,
        payload: employee_details,
    });
};

// Action creator for updating employee details
export const rUpdateEmployeeDetails = (create_request: any) => async (dispatch: Dispatch<any> )  => {
 
    try {
        const {data} = await graphHandler().invoke(
            CREATE_EMPLOYEE,
          {create_request: {...create_request}},
          1,
          false,
        );
        if (data && data.CreateEmployee && data.CreateEmployee.status === 'Success') {
        //   const sessionToken = data.loginAdmin.user_session.session_token;
        //   // console.log('sessionToken', sessionToken)
        //   ApolloService.setProfileToken(sessionToken);
        //   ApolloService.setAppToken(sessionToken);
        //   ApolloService.setAdminToken(sessionToken);
        //   ApolloService.setCacheToken(sessionToken);
    
          // dispatch(rCheckAffliated({creator_id: data.loginAdmin.user.user_id}));
        //   dispatch(
        //     loginSuccess(data.loginAdmin.user, sessionToken, data.loginAdmin),
        //   );
          // dispatch(rGetUserKYC(data.loginAdmin.user.user_id));
          // dispatch(rGetUserMeta(data.loginAdmin.user.user_id));
    
        //   dispatch(setToken(sessionToken));
        //   dispatch(setUserID(data.loginAdmin.user.user_id));
        console.log('data', data)
          Toast.show({
            type: 'success',
            text1: 'Successfully Created the Employee',
          });
        } else {
        //   dispatch({type: LOGIN_FAILED});
          Toast.show({
            type: 'error',
            text1: 'Login failed. Please check your credentials.',
          });
        }
      } catch (error) {
        console.log('rLogin Error', error);
        // dispatch({type: IS_LOGIN_LOADING_STOP});
        // dispatch({type: LOGIN_FAILED});
        Toast.show({
          type: 'error',
          text1: parseApolloError(error),
        });
      } finally {
        // dispatch({type: IS_LOGIN_LOADING_STOP});
      }
};