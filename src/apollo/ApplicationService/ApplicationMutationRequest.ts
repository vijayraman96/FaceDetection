import {gql} from '@apollo/client';

export const CREATE_POST_GQL = gql`
  mutation createPost($create_request: CreatePostRequest!) {
    createPost(create_request: $create_request) {
      status
      error
      message
      version
      service
      post {
        created_at
        created_by
        updated_at
        updated_by
        post_id
        post_number
        user_id
        store_id
        social_provider_post_id
        social_provider_post_data
        social_provider_post_urls {
          image_url_id
          key
          sort_order
          image_type
          url
        }
        post_title
        post_description
        social_provider
        post_type
        post_images_url {
          image_url_id
          key
          sort_order
          image_type
          url
        }
        post_status
      }
    }
  }
`;
export const UPDATE_POST_GQL = gql`
  mutation updatePost($update_request: UpdatePostRequest!) {
    updatePost(update_request: $update_request) {
      status
      error
      message
      version
      service
      post {
        created_at
        created_by
        updated_at
        updated_by
        post_id
        post_number
        user_id
        store_id
        social_provider_post_id
        social_provider_post_data
        social_provider_post_urls {
          image_url_id
          key
          sort_order
          image_type
          url
        }
        post_title
        post_description
        social_provider
        post_type
        post_images_url {
          image_url_id
          key
          sort_order
          image_type
          url
        }
        post_status
      }
    }
  }
`;
export const PUBLISH_POST_GQL = gql`
  mutation publishPost($post_id: String!) {
    publishPost(post_id: $post_id) {
      status
      error
      message
      version
      service
      post {
        created_at
        created_by
        updated_at
        updated_by
        post_id
        post_number
        user_id
        store_id
        social_provider_post_id
        post_title
        post_description
        social_provider
        post_type
        post_images_url {
          key
          sort_order
          image_type
          url
        }
        post_status
      }
      post_stats {
        created_at
        created_by
        updated_at
        updated_by
        post_id
        total_views
        total_likes
        total_shares
        total_comments
        total_bookmarks
        total_activity
      }
      post_documents {
        created_at
        created_by
        updated_at
        updated_by
        post_document_id
        user_id
        store_id
        post_id
        post_document_type
        post_document_status
        post_document_name
        post_document_url
        post_document_description
        provider_u_id
        provider_thumbnail_url
        provider_preview_url
        provider_ready_to_stream
        provider_file_size
        provider_stream_duration
        provider_playback_hls_url
        provider_playback_dash_url
        sent_to_upload
      }
    }
  }
`;
export const DRAFT_POST_GQL = gql`
  mutation draftPost($post_id: String!) {
    draftPost(post_id: $post_id) {
      status
      error
      message
      version
      service
      post {
        created_at
        created_by
        updated_at
        updated_by
        post_id
        post_number
        user_id
        store_id
        social_provider_post_id
        post_title
        post_description
        social_provider
        post_type
        post_images_url {
          key
          sort_order
          image_type
          url
        }
        post_status
      }
      post_stats {
        created_at
        created_by
        updated_at
        updated_by
        post_id
        total_views
        total_likes
        total_shares
        total_comments
        total_bookmarks
        total_activity
      }
      post_documents {
        created_at
        created_by
        updated_at
        updated_by
        post_document_id
        user_id
        store_id
        post_id
        post_document_type
        post_document_status
        post_document_name
        post_document_url
        post_document_description
        provider_u_id
        provider_thumbnail_url
        provider_preview_url
        provider_ready_to_stream
        provider_file_size
        provider_stream_duration
        provider_playback_hls_url
        provider_playback_dash_url
        sent_to_upload
      }
    }
  }
`;
export const ADD_YT_REFRESH_TOKEN = gql`
  mutation addRefreshToken($add_request: AddRefreshTokenRequest!) {
    addRefreshToken(add_request: $add_request) {
      status
      error
      message
      version
      service
      creator_credential {
        creator_id
        provider_platform_type
        provider_client_access_token
        expiry_at
      }
    }
  }
`;
export const ADD_CREATOR_CREDENTIAL = gql`
  mutation addCreatorCredential($add_request: AddCreatorCredentialRequest!) {
    addCreatorCredential(add_request: $add_request) {
      status
      error
      message
      version
      service
      creator_credential {
        created_at
        created_by
        updated_at
        updated_by
        creator_credential_id
        creator_id
        provider_platform_type
        provider_key
        provider_secret
        provider_client_refresh_token
        provider_client_access_token
        provider_account_id
        provider_account_url
        provider_account_type
        provider_scopes
        provider_info
        provider_access_token_seconds
        provider_access_token_expiry
        active
      }
    }
  }
`;
export const GET_ACCESS_TOKEN = gql`
  mutation getAccessToken($add_request: AddRefreshTokenRequest!) {
    getAccessToken(add_request: $add_request) {
      status
      error
      message
      version
      service
      creator_credential {
        creator_id
        provider_platform_type
        provider_client_access_token
        expiry_at
      }
    }
  }
`;
export const INIT_YT_DATA = gql`
  mutation initYoutubeData($add_request: AddInitYoutubeDataRequest!) {
    initYoutubeData(add_request: $add_request) {
      status
      error
      message
      version
      service
    }
  }
`;
export const UPDATE_CAMPAGIN_CREATOR = gql`
  mutation updateCampaignCreator(
    $update_request: UpdateCampaignCreatorRequest!
  ) {
    updateCampaignCreator(update_request: $update_request) {
      status
      error
      message
      version
      service
      campaign_creator {
        created_at
        created_by
        updated_at
        updated_by
        campaign_creator_id
        campaign_id
        campaign_type
        brand_id
        creator_id
        creator_campaign_url
        price
        quantity
        soft_limit
        hard_limit
        is_url_generated
        active
      }
    }
  }
`;
export const GENERATE_CREATOR_CAMPAIGN_LINK = gql`
  mutation generateCampaignLink($campaign_creator_id: String!) {
    generateCampaignLink(campaign_creator_id: $campaign_creator_id) {
      status
      error
      message
      version
      service
      campaign_creator {
        created_at
        created_by
        updated_at
        updated_by
        campaign_creator_id
        campaign_id
        campaign_type
        brand_id
        creator_id
        campaign_creator_uid
        creator_campaign_url
        price
        quantity
        soft_limit
        hard_limit
        is_url_generated
        active
      }
    }
  }
`;
export const READ_NOTIFICATIONS_GQL = gql`
  query readNotifications($readReq: UpdateInAppNotificationIdsRequest!) {
    readNotifications(readReq: $readReq) {
      status
      error
      message
      version
      service
    }
  }
`;
export const READ_NOTIFICATION_GQL = gql`
  query readNotification($in_app_notification_id: String!) {
    readNotification(in_app_notification_id: $in_app_notification_id) {
      status
      error
      message
      version
      service
    }
  }
`;
export const ADD_USER_META_GQL = gql`
  mutation addUserMeta($add_request: CreateUserMetaRequest!) {
    addUserMeta(add_request: $add_request) {
      status
      error
      message
      version
      service
      user_meta {
        created_at
        created_by
        updated_at
        updated_by
        user_meta_id
        creator_id
        instagram_handle
        primary_account
        profile_social_links {
          provider
          link
        }
        page_social_links {
          provider
          link
        }
        instagram_image_urls {
          image_url_id
          key
          sort_order
          image_type
          url
        }
        business_account
        public_account
        is_skipped
      }
    }
  }
`;
export const UPDATE_USER_META_GQL = gql`
  mutation updateUserMeta($update_request: UpdateUserMetaRequest!) {
    updateUserMeta(update_request: $update_request) {
      status
      error
      message
      version
      service
      user_meta {
        created_at
        created_by
        updated_at
        updated_by
        user_meta_id
        creator_id
        instagram_handle
        primary_account
        profile_social_links {
          provider
          link
        }
        page_social_links {
          provider
          link
        }
        instagram_image_urls {
          image_url_id
          key
          sort_order
          image_type
          url
        }
        business_account
        public_account
        is_skipped
      }
    }
  }
`;
export const ADD_USER_KYC = gql`
  mutation addUserKyc($add_request: AddUserKycRequest!) {
    addUserKyc(add_request: $add_request) {
      status
      error
      message
      version
      service
      user_kyc {
        created_at
        created_by
        updated_at
        updated_by
        user_kyc_id
        entity_id
        entity_type
        vendor_id
        pan
        gst
        vpa
        account_holder
        account_number
        ifsc
        account_type
        business_type
        status
        active
      }
    }
  }
`;
export const UPDATE_USER_KYC = gql`
  mutation updateUserKyc($update_request: UpdateUserKycRequest!) {
    updateUserKyc(update_request: $update_request) {
      status
      error
      message
      version
      service
      user_kyc {
        created_at
        created_by
        updated_at
        updated_by
        user_kyc_id
        entity_id
        entity_type
        vendor_id
        pan
        gst
        vpa
        account_holder
        account_number
        ifsc
        account_type
        business_type
        status
        active
      }
    }
  }
`;
