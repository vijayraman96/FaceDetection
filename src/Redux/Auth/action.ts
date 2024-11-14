// @ts-nocheck
import {Dispatch} from 'redux';
import graphHandler from '../../apollo/graphHandler';
import {
  LOGIN_CREATOR_GQL,
  SESSION_GQL,
  SIGNUP_CREATOR_GQL,
} from '../../apollo/ProfileService/ProfileMutationRequest';
import Toast from 'react-native-toast-message';
import {parseApolloError} from '../../utils/Functions/filter';
import {
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOADING_STOP,
  LOGOUT_SUCCESS,
  SET_ROUTE,
  LOADING_START,
  SIGNUP_SUCCESS,
  SIGNUP_FAILED,
  IS_FIRST,
  SET_BRAND,
  SEND_BRAND_INVITE,
  IS_AFFLIATED,
  IS_LOADING_START,
  IS_LOADING_STOP,
  IS_LOGIN_LOADING_START,
  IS_LOGIN_LOADING_STOP,
  SET_USER_META_DATA,
  SET_USER_KYC_DATA,
} from './types';
import ApolloService from '../../apollo/ApolloService';
import { setToken, setUserID} from '../Local/action';
import {GET_BRAND_AUDIENCE_LIST} from '../../apollo/ApplicationService/ApplicationQueryRequest';
import {CommonActions} from '@react-navigation/native';
// import {rGetUserKYC,rGetUserMeta, rSetUserKYC} from '../DataSet/action';
import { ADMIN_LOGIN } from '../../apollo/AdminService/AdminMutationRequest';

interface LoginData {
  user: any;
  sessionToken: string;
  response: any;
}

export const rLoginUser = (loginRequest: any) => async (dispatch: Dispatch<any> ) => {
  dispatch({type: IS_LOGIN_LOADING_START});
// console.log('login_request', login_request)
  const loginSuccess = (
    user: any,
    sessionToken: string,
    response: any,
  ): {type: string; payload: LoginData} => ({
    type: LOGIN_SUCCESS,
    payload: {user, sessionToken, response},
  });

  try {
    const {data} = await graphHandler().invoke(
      ADMIN_LOGIN,
      {login_request: {...loginRequest}},
      1,
      false,
    );
    if (data && data.loginAdmin && data.loginAdmin.status === 'Success') {
      const sessionToken = data.loginAdmin.user_session.session_token;
      // console.log('sessionToken', sessionToken)
      ApolloService.setProfileToken(sessionToken);
      ApolloService.setAppToken(sessionToken);
      ApolloService.setAdminToken(sessionToken);
      ApolloService.setCacheToken(sessionToken);

      // dispatch(rCheckAffliated({creator_id: data.loginAdmin.user.user_id}));
      dispatch(
        loginSuccess(data.loginAdmin.user, sessionToken, data.loginAdmin),
      );
      // dispatch(rGetUserKYC(data.loginAdmin.user.user_id));
      // dispatch(rGetUserMeta(data.loginAdmin.user.user_id));

      dispatch(setToken(sessionToken));
      dispatch(setUserID(data.loginAdmin.user.user_id));
      // Toast.show({
      //   type: 'success',
      //   text1: 'Login successful!',
      // });
    } else {
      dispatch({type: LOGIN_FAILED});
      Toast.show({
        type: 'error',
        text1: 'Login failed. Please check your credentials.',
      });
    }
  } catch (error) {
    console.log('rLogin Error', error);
    dispatch({type: IS_LOGIN_LOADING_STOP});
    dispatch({type: LOGIN_FAILED});
    Toast.show({
      type: 'error',
      text1: parseApolloError(error),
    });
  } finally {
    dispatch({type: IS_LOGIN_LOADING_STOP});
  }
};
// export const rRefreshSession =
//   (refresh_request: any) => async (dispatch: any) => {
//     dispatch({
//       type: LOADING_START,
//     });
//     try {
//       const {data} = await graphHandler().invoke(
//         SESSION_GQL,
//         {refresh_request: {...refresh_request}},
//         0,
//         false,
//         false,
//         false,
//       );
//       // console.log(data, 'datadatadata');

//       if (
//         data &&
//         data.refreshCreatorSession &&
//         data.refreshCreatorSession.status === 'Success'
//       ) {
//         const sessionToken = data.refreshCreatorSession.session.session_token;

//         ApolloService.setProfileToken(sessionToken);
//         ApolloService.setAppToken(sessionToken);
//         ApolloService.setAdminToken(sessionToken);
//         ApolloService.setCacheToken(sessionToken);

//         dispatch({
//           type: LOADING_STOP,
//         });
//         dispatch(
//           rCheckAffliated({
//             creator_id: data.refreshCreatorSession.user.user_id,
//           }),
//         );
//         dispatch(rGetUserKYC(data.refreshCreatorSession.user.user_id));
//         dispatch(rGetUserMeta(data.refreshCreatorSession.user.user_id));
//         dispatch({
//           type: LOGIN_SUCCESS,
//           payload: {
//             user: data.refreshCreatorSession.user,
//             creator: data.refreshCreatorSession.creator,
//             sessionToken: sessionToken,
//             response: data.refreshCreatorSession,
//           },
//         });
//         dispatch(setToken(sessionToken));

//         dispatch(setUserID(data.refreshCreatorSession.user.user_id));
//       } else {
//         // console.log(data);
//         dispatch({
//           type: LOGIN_FAILED,
//         });
//         dispatch({
//           type: LOADING_STOP,
//         });
//       }
//     } catch (error) {
//       dispatch({type: IS_LOGIN_LOADING_STOP});

//       // console.log('rRefreshSession', error);
//       dispatch({
//         type: LOGIN_FAILED,
//       });
//       dispatch(rLogout());
//       dispatch({
//         type: LOADING_STOP,
//       });
//     }
//   };
export const rLogout =
  (canToast = true) =>
  (dispatch: any): any => {
    try {
      // dispatch(setFlushLocal());
      dispatch(rSetUserMeta({}));
      dispatch({
        type: SET_ROUTE,
        payload: 'Login',
      });
      ApolloService.clear();
      if (canToast) {
        Toast.show({
          type: 'success',
          text1: 'You have logged out.',
        });
      }
      dispatch({
        type: LOGOUT_SUCCESS,
      });
    } catch (error) {
      console.log('Error while logout', error);
    }
  };
// export const rSignUp =
//   (signup_request: any, onError = (x: any) => {}) =>
//   async (dispatch: any) => {
//     dispatch({type: IS_LOGIN_LOADING_START});

//     try {
//       const user_session_info = await userDeviceInfo();
//       const {data} = await graphHandler().invoke(
//         SIGNUP_CREATOR_GQL,
//         {signup_request: {...signup_request}},
//         0,
//         false,
//       );

//       if (
//         data &&
//         data.signupCreator &&
//         data.signupCreator.status === 'Success' &&
//         data.signupCreator.user
//       ) {
//         const sessionToken = data.signupCreator.session.session_token;
//         // console.log('sessionToken reg:-=-=-=> ', sessionToken);
//         ApolloService.setProfileToken(sessionToken);
//         ApolloService.setAppToken(sessionToken);
//         ApolloService.setAdminToken(sessionToken);
//         ApolloService.setCacheToken(sessionToken);

//         dispatch(setToken(sessionToken));
//         dispatch(setUserID(data.signupCreator.user.user_id));
//         // dispatch(rSetUserKYC(user_kyc));

//         dispatch(
//           rCheckAffliated({creator_id: data.signupCreator.user.user_id}),
//         );
//         dispatch({type: IS_FIRST, payload: true});

//         dispatch({
//           type: SIGNUP_SUCCESS,
//           payload: {
//             user: data.signupCreator.user,
//             // profile: data.signupCreator.customer_profile,
//             // canShowScreener: data.signupCreator.show_multi_d_screener,
//             // login_count: data.signupCreator.user_screener_trial_count,
//             // user_accessed_count: data.signupCreator.user_accessed_count,
//             // isScreenerMandatory: data.signupCreator.multi_d_screener_mandatory,
//             sessionToken: sessionToken,
//             response: data.signupCreator,
//           },
//         });
//         Toast.show({
//           type: 'success',
//           text1: 'Signup successful.',
//         });
//         // dispatch(setToken(sessionToken));
//         // dispatch(setUserID(data.signupCreator.user.user_id));
//         // dispatch(rRefreshObjective(data.signupCreator.user.user_id));
//         // dispatch(rGetDataSet(data.signupCreator.user.user_id));
//         // dispatch(rGetMultiScreener(data.signupCreator.user.user_id));
//         // dispatch(rClearDeepLink());
//       } else {
//         dispatch({type: IS_LOGIN_LOADING_STOP});

//         Toast.show({
//           type: 'error',
//           text1: 'Something went to wrong. please try again',
//         });
//         onError('User Value Error');
//         dispatch({
//           type: SIGNUP_FAILED,
//         });
//       }
//     } catch (error) {
//       console.log(error);
//       console.log(parseApolloError(error));
//       Toast.show({
//         type: 'error',
//         text1: parseApolloError(error),
//       });
//       // dispatch({
//       //   type: SET_ROUTE,
//       //   payload: 'VerifyMobile',
//       // });
//       dispatch({
//         type: SIGNUP_FAILED,
//       });
//       dispatch({
//         type: LOADING_STOP,
//       });
//       dispatch({type: IS_LOGIN_LOADING_STOP});

//       dispatch({type: IS_LOADING_STOP});
//     }
//   };

