import {gql} from '@apollo/client';

export const CREATE_EMPLOYEE = gql`
mutation CreateEmployee ($create_request: AddEmployeeRequest!) {
    CreateEmployee (create_request: $create_request) {
        status
        error
        message
        version
        service
        user {
      created_at
      created_by
      updated_at
      updated_by
      user_id
      user_type
      user_name
      DOB
      mobile_number
      mobile_number_verified
      email
      email_verified
      password
      device_id
      active
      org_id
      company_id
      gender
    }
    employee {
      created_at
      created_by
      updated_at
      updated_by
      user_id
      email
      company_name
      employee_uid
      org_id
      designation
      employee_image_url {
        key
        sort_order
        image_type
        url
      }
    }
    }
}
`;

