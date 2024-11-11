import { gql } from '@apollo/client';

export const ADMIN_LOGIN = gql`
 mutation loginAdmin ($login_request: LoginAdminRequest!) {
    loginAdmin (login_request: $login_request) {
        status
        error
        message
        version
        service
        user{
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
        user_session{
            created_at
            created_by
            updated_at
            updated_by
            session_token
            user_id
            device_id
            company_id
            org_id
            user_type
            login_method
            last_accessed
            expiry
        }
    }
}
`;

