import {
    SET_ACCESS_TOKEN,
    SET_USER_ID,
    SET_FIRST,
    SET_USER_LOCAL,
    FLUSH_LOCAL,
  } from './types';
  import { Dispatch } from 'redux';
  
  // Define the action types
  interface SetAccessTokenAction {
    type: typeof SET_ACCESS_TOKEN;
    payload: string;
  }
  
  interface SetUserIDAction {
    type: typeof SET_USER_ID;
    payload: string;
  }
  
  interface SetFirstAction {
    type: typeof SET_FIRST;
    payload: boolean;
  }
  
  interface SetUserLocalAction {
    type: typeof SET_USER_LOCAL;
    payload: string;
  }
  
  interface FlushLocalAction {
    type: typeof FLUSH_LOCAL;
  }
  
  type AppActions =
    | SetAccessTokenAction
    | SetUserIDAction
    | SetFirstAction
    | SetUserLocalAction
    | FlushLocalAction;
  
  // Action creators with types
  export const setToken = (token: string) => async (dispatch: Dispatch<AppActions>) => {
    dispatch({
      type: SET_ACCESS_TOKEN,
      payload: token,
    });
  };
  
  export const setUserID = (id: string) => async (dispatch: Dispatch<AppActions>) => {
    dispatch({
      type: SET_USER_ID,
      payload: id,
    });
  };
  
  export const setFirst = (bool: boolean) => async (dispatch: Dispatch<AppActions>) => {
    dispatch({
      type: SET_FIRST,
      payload: bool,
    });
  };
  
//   export const setLocalData = (token: string) => async (dispatch: Dispatch<AppActions>) => {
//     dispatch({
//       type: SET_USER_LOCAL,
//       payload: token,
//     });
//   };
  
//   export const setFlushLocal = () => async (dispatch: Dispatch<AppActions>) => {
//     dispatch({
//       type: FLUSH_LOCAL,
//     });
//   };
  