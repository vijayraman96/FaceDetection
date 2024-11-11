import {
    SET_ACCESS_TOKEN,
    SET_USER_ID,
    SET_FIRST,
    SET_USER_LOCAL,
    FLUSH_LOCAL,
  } from './types';
  
  interface State {
    accessToken: string;
    user_id: string;
    isFirst: boolean;
  }
  
  const InitialState: any = {
    accessToken: '',
    user_id: '',
    isFirst: true,
  };
  
  interface Action {
    type: string;
    payload?: any;
  }
  
  const Reducer = (state = InitialState, action: Action): any => {
    const {type, payload} = action;
    switch (type) {
      case SET_ACCESS_TOKEN:
        return {
          ...state,
          accessToken: payload,
        };
      case SET_USER_ID:
        return {
          ...state,
          user_id: payload,
        };
      case SET_FIRST:
        return {
          ...state,
          isFirst: payload,
        };
      case SET_USER_LOCAL:
        let val = payload ? payload : {};
        return {
          ...state,
          ...val,
        };
      case FLUSH_LOCAL:
        return {
          accessToken: '',
          user_id: '',
          isFirst: false,
        };
      default:
        return state;
    }
  };
  
  export default Reducer;
  