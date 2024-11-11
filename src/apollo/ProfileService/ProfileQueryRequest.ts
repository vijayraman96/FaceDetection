import {gql} from '@apollo/client';

export const IS_MOBILE_EXIST = gql`
  query isMobileExists($mobile_number: String!) {
    isMobileExists(mobile_number: $mobile_number) {
      status
      error
      message
      version
      service
      exists
    }
  }
`;
export const GET_OTP = gql`
  mutation sendCreatorMobileOtp($otp_req: SendOtpRequest!) {
    sendCreatorMobileOtp(otp_req: $otp_req) {
      status
      error
      message
      version
      service
    }
  }
`;
export const GET_CREATOR_BY_HANDLE = gql`
  query getCreatorByHandle($creator_handle: String!) {
    getCreatorByHandle(creator_handle: $creator_handle) {
      status
      error
      message
      version
      service
      exists
    }
  }
`;
