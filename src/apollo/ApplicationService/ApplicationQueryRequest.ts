import { gql } from '@apollo/client';

export const GET_BRAND_LIST = gql`
  query getBrandList(
    $active: Boolean
    $pagination: PaginationFilter
    $dateFilter: DateFilter
    $brand_ids: [String!]
    $brand_name: String
    $brand_domain: String
    $business_email: String
    $cs_email: String
    $business_mobile_number: String
    $cs_mobile_number: String
    $shopify_url: String
    $website_url: String
    $account_number: String
    $bank_name: String
    $bank_ifsc: String
    $account_name: String
    $gst_number: String
    $pan_number: String
    $brand_hashtags: [String!]
    $brand_note: String
    $last_sync_ts: DateTimeISO
    $plugin_sync_status: PluginSyncStatus
    $onboarding_status: BrandOnboardingStatus
    $brand_platform_type: BrandPlatformType
    $plugin: Boolean
    $is_kyc_completed: Boolean
    $is_agreement_completed: Boolean
    $is_agreed: Boolean
    $is_admin_onboarded: Boolean
    $is_toolkit_added: Boolean
    $is_shopify_sync_completed: Boolean
    $is_policy_updated: Boolean
    $is_product_sync_completed: Boolean
    $is_info_updated: Boolean
  ) {
    getBrandList(
      active: $active
      pagination: $pagination
      dateFilter: $dateFilter
      brand_ids: $brand_ids
      brand_name: $brand_name
      brand_domain: $brand_domain
      business_email: $business_email
      cs_email: $cs_email
      business_mobile_number: $business_mobile_number
      cs_mobile_number: $cs_mobile_number
      shopify_url: $shopify_url
      website_url: $website_url
      account_number: $account_number
      bank_name: $bank_name
      bank_ifsc: $bank_ifsc
      account_name: $account_name
      gst_number: $gst_number
      pan_number: $pan_number
      brand_hashtags: $brand_hashtags
      brand_note: $brand_note
      last_sync_ts: $last_sync_ts
      plugin_sync_status: $plugin_sync_status
      onboarding_status: $onboarding_status
      brand_platform_type: $brand_platform_type
      plugin: $plugin
      is_kyc_completed: $is_kyc_completed
      is_agreement_completed: $is_agreement_completed
      is_agreed: $is_agreed
      is_admin_onboarded: $is_admin_onboarded
      is_toolkit_added: $is_toolkit_added
      is_shopify_sync_completed: $is_shopify_sync_completed
      is_policy_updated: $is_policy_updated
      is_product_sync_completed: $is_product_sync_completed
      is_info_updated: $is_info_updated
    ) {
      status
      error
      message
      version
      service
      pagination {
        page_number
        item_count
        total_count
      }
      brands {
        created_at
        created_by
        updated_at
        updated_by
        brand_id
        brand_name
        brand_number
        brand_domain
        brand_description
        business_mobile_number
        cs_mobile_number
        cs_mobile_number_verfied
        business_email
        cs_email
        cs_email_verfied
        brand_image_urls {
          image_url_id
          key
          sort_order
          image_type
          url
        }
        brand_page_image_urls {
          image_url_id
          key
          sort_order
          image_type
          url
        }
        brand_content_meta {
          key
          value
        }
        address {
          line_1
          line_2
          region
          town_city
          postcode
          state_id
          country_id
        }
        social_urls {
          provider
          link
        }
        shopify_url
        website_url
        account_name
        bank_name
        account_number
        bank_ifsc
        bank_vpa
        gst_number
        pan_number
        is_kyc_completed
        is_info_updated
        is_product_sync_completed
        is_product_approved
        is_shopify_sync_completed
        brand_platform_type
        plugin
        is_policy_updated
        is_agreement_completed
        is_agreed
        is_admin_onboarded
        is_toolkit_added
        onboarding_status
        default_mark_down
        default_creator_commission
        brand_hashtags
        brand_note
        last_sync_ts
        plugin_sync_status
        active
      }
    }
  }
`;
export const GET_NONAFFLIATEDBRAND_LIST = gql`
  query getNonAffiliatedBrand(
    $active: Boolean
    $pagination: PaginationFilter
    $dateFilter: DateFilter
    $brand_ids: [String!]
    $brand_name: String
    $brand_domain: String
    $business_email: String
    $cs_email: String
    $business_mobile_number: String
    $cs_mobile_number: String
    $shopify_url: String
    $website_url: String
    $account_number: String
    $bank_name: String
    $bank_ifsc: String
    $account_name: String
    $gst_number: String
    $pan_number: String
    $brand_hashtags: [String!]
    $brand_note: String
    $last_sync_ts: DateTimeISO
    $plugin_sync_status: PluginSyncStatus
    $onboarding_status: BrandOnboardingStatus
    $brand_platform_type: BrandPlatformType
    $plugin: Boolean
    $is_kyc_completed: Boolean
    $is_agreement_completed: Boolean
    $is_agreed: Boolean
    $is_admin_onboarded: Boolean
    $is_toolkit_added: Boolean
    $is_shopify_sync_completed: Boolean
    $is_policy_updated: Boolean
    $is_product_sync_completed: Boolean
    $is_info_updated: Boolean
    $creator_id: String
  ) {
    getNonAffiliatedBrand(
      active: $active
      pagination: $pagination
      dateFilter: $dateFilter
      brand_ids: $brand_ids
      brand_name: $brand_name
      brand_domain: $brand_domain
      business_email: $business_email
      cs_email: $cs_email
      business_mobile_number: $business_mobile_number
      cs_mobile_number: $cs_mobile_number
      shopify_url: $shopify_url
      website_url: $website_url
      account_number: $account_number
      bank_name: $bank_name
      bank_ifsc: $bank_ifsc
      account_name: $account_name
      gst_number: $gst_number
      pan_number: $pan_number
      brand_hashtags: $brand_hashtags
      brand_note: $brand_note
      last_sync_ts: $last_sync_ts
      plugin_sync_status: $plugin_sync_status
      onboarding_status: $onboarding_status
      brand_platform_type: $brand_platform_type
      plugin: $plugin
      is_kyc_completed: $is_kyc_completed
      is_agreement_completed: $is_agreement_completed
      is_agreed: $is_agreed
      is_admin_onboarded: $is_admin_onboarded
      is_toolkit_added: $is_toolkit_added
      is_shopify_sync_completed: $is_shopify_sync_completed
      is_policy_updated: $is_policy_updated
      is_product_sync_completed: $is_product_sync_completed
      is_info_updated: $is_info_updated
      creator_id: $creator_id
    ) {
      status
      error
      message
      version
      service
      pagination {
        page_number
        item_count
        total_count
      }
      brands {
        created_at
        created_by
        updated_at
        updated_by
        brand_id
        brand_name
        brand_number
        brand_domain
        brand_description
        business_mobile_number
        cs_mobile_number
        cs_mobile_number_verfied
        business_email
        cs_email
        cs_email_verfied
        brand_image_urls {
          image_url_id
          key
          sort_order
          image_type
          url
        }
        brand_page_image_urls {
          image_url_id
          key
          sort_order
          image_type
          url
        }
        brand_content_meta {
          key
          value
        }
        address {
          line_1
          line_2
          region
          town_city
          postcode
          state_id
          country_id
        }
        social_urls {
          provider
          link
        }
        shopify_url
        website_url
        account_name
        bank_name
        account_number
        bank_ifsc
        bank_vpa
        gst_number
        pan_number
        is_kyc_completed
        is_info_updated
        is_product_sync_completed
        is_product_approved
        is_shopify_sync_completed
        brand_platform_type
        plugin
        is_policy_updated
        is_agreement_completed
        is_agreed
        is_admin_onboarded
        is_toolkit_added
        onboarding_status
        default_mark_down
        default_creator_commission
        brand_hashtags
        brand_note
        last_sync_ts
        plugin_sync_status
        active
      }
    }
  }
`;
export const GET_BRAND_POLICY_BYBRAND = gql`
  query getBrandPolicyByBrand($brand_id: String!) {
    getBrandPolicyByBrand(brand_id: $brand_id) {
      status
      error
      message
      version
      service
      brand_policy {
        created_at
        created_by
        updated_at
        updated_by
        brand_policy_id
        brand_id
        brand_agreement
        return_policy
        allow_discount
        allow_cod
        return_policy_period
        cool_down_period
        return_address {
          line_1
          line_2
          region
          town_city
          postcode
          state_id
          country_id
        }
        return_pickup
        auto_approval
        approval_grades
        active
      }
    }
  }
`;
export const GET_BRAND = gql`
  query getBrand($brand_id: String!) {
    getBrand(brand_id: $brand_id) {
      status
      error
      message
      version
      service
      brand {
        created_at
        created_by
        updated_at
        updated_by
        brand_id
        brand_name
        brand_domain
        brand_description
        business_mobile_number
        cs_mobile_number
        business_email
        cs_email
        brand_image_urls {
          key
          sort_order
          image_type
          url
        }
        brand_page_image_urls {
          key
          sort_order
          image_type
          url
        }
        brand_content_meta {
          key
          value
        }
        address {
          line_1
          line_2
          region
          town_city
          postcode
          state_id
          country_id
        }
        social_urls {
          provider
          link
        }
        shopify_url
        website_url
        account_name
        bank_name
        account_number
        bank_ifsc
        bank_vpa
        gst_number
        pan_number
        is_kyc_completed
        is_info_updated
        is_product_sync_completed
        is_shopify_sync_completed
        brand_platform_type
        plugin
        is_policy_updated
        is_agreement_completed
        is_agreed
        is_admin_onboarded
        is_toolkit_added
        onboarding_status
        default_mark_down
        default_creator_commission
        brand_hashtags
        brand_note
        last_sync_ts
        plugin_sync_status
        active
      }
    }
  }
`;
export const GET_INSTA_POST = gql`
  query getPostUrl($post_request: PostDataRequest!) {
    getPostUrl(post_request: $post_request) {
      status
      error
      message
      version
      service
      post {
        id
        title
        description
        media_type
        media_url
        sub_posts {
          id
          title
          description
          media_type
          media_url
          thumbnail_urls {
            height
            width
            url
          }
        }
        thumbnail_urls {
          height
          width
          url
        }
      }
    }
  }
`;
export const GET_POST_LIST = gql`
  query getPostList(
    $active: Boolean
    $pagination: PaginationFilter
    $dateFilter: DateFilter
    $post_id: String
    $brand_id: String
    $store_id: String
    $post_ids: [String!]
    $creator_id: String
    $post_title: String
    $post_description: String
    $post_type: PostDocumentType
    $social_provider_post_id: String
    $post_statuses: [PostStatus!]
    $post_product_statuses: [PostProductStatus!]
    $social_provider: SocialProvider
  ) {
    getPostList(
      active: $active
      pagination: $pagination
      dateFilter: $dateFilter
      post_id: $post_id
      brand_id: $brand_id
      store_id: $store_id
      post_ids: $post_ids
      creator_id: $creator_id
      post_title: $post_title
      post_description: $post_description
      post_type: $post_type
      social_provider_post_id: $social_provider_post_id
      post_statuses: $post_statuses
      post_product_statuses: $post_product_statuses
      social_provider: $social_provider
    ) {
      status
      error
      message
      version
      service
      pagination {
        page_number
        item_count
        total_count
      }
      posts {
        created_at
        created_by
        updated_at
        updated_by
        post_id
        post_number
        user_id
        store_id
        social_provider_post_id
        social_provider_post_data {
          id
          title
          description
          media_type
          media_url
          sub_posts {
            id
            title
            description
            media_type
            media_url
          }
          thumbnail_urls {
            height
            width
            url
          }
        }
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
export const GET_CREATOR_DASHBOARD_INFO = gql`
  query getCreatorDashboardInfo(
    $active: Boolean
    $pagination: PaginationFilter
    $dateFilter: DateFilter
    $creator_status: CreatorStatus
    $user_id: String
    $user_ids: [String!]
    $creator_handle: String
    $creator_grade: CreatorGrade
    $favourite_category_ids: [String!]
    $email: String
    $emails: [String!]
  ) {
    getCreatorDashboardInfo(
      active: $active
      pagination: $pagination
      dateFilter: $dateFilter
      creator_status: $creator_status
      user_id: $user_id
      user_ids: $user_ids
      creator_handle: $creator_handle
      creator_grade: $creator_grade
      favourite_category_ids: $favourite_category_ids
      email: $email
      emails: $emails
    ) {
      status
      error
      message
      version
      service
      pagination {
        page_number
        item_count
        total_count
      }
      creators {
        creator {
          created_at
          created_by
          updated_at
          updated_by
          user_id
          email
          creator_handle
          creator_description
          secondary_social_links {
            provider
            link
          }
          primary_social_links {
            provider
            link
          }
          languages
          favourite_category_ids
          device_id
          city_id
          password
          creator_grade
          active
          affliate_listing
          campaigns
          is_gst_exempt
          creator_status
        }
        user {
          created_at
          created_by
          updated_at
          updated_by
          user_id
          user_types
          user_name
          first_name
          last_name
          gender
          dob
          mobile_number
          mobile_number_verified
          email
          email_verified
          address {
            label
            mobile_number
            line_1
            line_2
            region
            town_city
            postcode
            state_id
            country_id
          }
          profile_images {
            image_url_id
            key
            sort_order
            image_type
            url
          }
          social_urls {
            provider
            link
          }
          alternate_email
          country_id
          state_id
          city_id
          active
        }
        creator_social_data {
          created_at
          created_by
          updated_at
          updated_by
          creator_social_data_id
          creator_id
          social_provider
          social_handle
          follower_count
          feed_count
          reel_count
          shorts_count
          total_media_count
          reach_count
          stories
          likes
          saves
          shares
          comments
          click_score
          average_watch_mins
          engagement_score
          conversion_score
          reached_city_data {
            key
            value
          }
          reached_age_data {
            key
            value
          }
          reached_gender_data {
            key
            value
          }
          impressions
          profile_views
          accounts_engaged
          data_range_days
          from_date_seconds
          to_date_seconds
          is_conversion_score_calculated
          active
        }
        total_orders_value
        total_orders_in_progress
        total_orders_earning
        total_ppc_clicks
        total_ppc_earning
        total_ppc_campaigns
      }
    }
  }
`;
export const GET_POST_PRODUCT_LIST = gql`
  query getPostProductList(
    $active: Boolean
    $pagination: PaginationFilter
    $dateFilter: DateFilter
    $category_name: String
    $post_id: String
    $post_ids: [String!]
    $brand_id: String
    $category_id: String
    $product_id: String
    $product_ids: [String!]
    $creator_id: String
    $post_product_status: PostProductStatus
  ) {
    getPostProductList(
      active: $active
      pagination: $pagination
      dateFilter: $dateFilter
      category_name: $category_name
      post_id: $post_id
      post_ids: $post_ids
      brand_id: $brand_id
      category_id: $category_id
      product_id: $product_id
      product_ids: $product_ids
      creator_id: $creator_id
      post_product_status: $post_product_status
    ) {
      status
      error
      message
      version
      service
      pagination {
        page_number
        item_count
        total_count
      }
      post_products {
        created_at
        created_by
        updated_at
        updated_by
        post_product_id
        post_id
        category_id
        brand_id
        product_id
        creator_id
        post_product_status
      }
    }
  }
`;
export const GET_CATEGORISED_BRAND_PRODUCT_LIST = gql`
  query getCategorizedBrandProductsInfo(
    $active: Boolean
    $pagination: PaginationFilter
    $dateFilter: DateFilter
    $title: String
    $category_id: String
    $brand_id: String
    $user_id: String
    $product_ids: [String!]
    $product_status: ProductStatus
    $inventory_type: InventoryType
    $category_title: String
  ) {
    getCategorizedBrandProductsInfo(
      active: $active
      pagination: $pagination
      dateFilter: $dateFilter
      title: $title
      category_id: $category_id
      brand_id: $brand_id
      user_id: $user_id
      product_ids: $product_ids
      product_status: $product_status
      inventory_type: $inventory_type
      category_title: $category_title
    ) {
      status
      error
      message
      version
      service
      pagination {
        page_number
        item_count
        total_count
      }
      categorized_product_items {
        products {
          created_at
          created_by
          updated_at
          updated_by
          product_id
          user_id
          platform_product_id
          brand_id
          category_id
          sort_order
          product_title
          product_description
          product_type
          product_image_urls {
            image_url_id
            key
            sort_order
            image_type
            url
          }
          total_inventory
          total_variants
          tracks_inventory
          has_only_default_variant
          has_out_of_stock_variants
          product_status
          product_options {
            platform_option_id
            name
            sort_order
            values
          }
          tags
          is_gift_card
          active
        }
        category {
          created_at
          created_by
          updated_at
          updated_by
          category_id
          sort_order
          category_title
          category_description
          category_images {
            image_url_id
            key
            sort_order
            image_type
            url
          }
          category_meta {
            key
            value
          }
          category_status
          active
        }
      }
    }
  }
`;
export const GET_POST_INFO = gql`
  query getPostInfo(
    $active: Boolean
    $pagination: PaginationFilter
    $dateFilter: DateFilter
    $post_id: String
    $brand_id: String
    $store_id: String
    $post_ids: [String!]
    $creator_id: String
    $post_title: String
    $post_description: String
    $post_type: PostDocumentType
    $social_provider_post_id: String
    $post_statuses: [PostStatus!]
    $post_product_statuses: [PostProductStatus!]
    $social_provider: SocialProvider
  ) {
    getPostInfo(
      active: $active
      pagination: $pagination
      dateFilter: $dateFilter
      post_id: $post_id
      brand_id: $brand_id
      store_id: $store_id
      post_ids: $post_ids
      creator_id: $creator_id
      post_title: $post_title
      post_description: $post_description
      post_type: $post_type
      social_provider_post_id: $social_provider_post_id
      post_statuses: $post_statuses
      post_product_statuses: $post_product_statuses
      social_provider: $social_provider
    ) {
      status
      error
      message
      version
      service
      pagination {
        page_number
        item_count
        total_count
      }
      post_items {
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
        products {
          created_at
          created_by
          updated_at
          updated_by
          product_id
          user_id
          platform_product_id
          brand_id
          category_id
          sort_order
          product_title
          product_description
          product_type
          product_image_urls {
            image_url_id
            key
            sort_order
            image_type
            url
          }
          total_inventory
          total_variants
          tracks_inventory
          has_only_default_variant
          has_out_of_stock_variants
          product_status
          product_options {
            platform_option_id
            name
            sort_order
            values
          }
          tags
          is_gift_card
          active
        }
      }
    }
  }
`;
export const GET_ORDER_INFO = gql`
  query getOrderInfo(
    $active: Boolean
    $pagination: PaginationFilter
    $dateFilter: DateFilter
    $order_ids: [String!]
    $order_numbers: [String!]
    $order_group_numbers: [String!]
    $order_statuses: [OrderStatus!]
    $order_group_number: String
    $platform_order_number: String
    $customer_id: String
    $creator_id: String
    $product_id: String
    $variant_id: String
    $brand_id: String
    $order_id: String
    $order_status: OrderStatus
    $payin_statuses: [PayinStatus!]
    $sort_type: SortType
    $sort_by: OrderSortBy
  ) {
    getOrderInfo(
      active: $active
      pagination: $pagination
      dateFilter: $dateFilter
      order_ids: $order_ids
      order_numbers: $order_numbers
      order_group_numbers: $order_group_numbers
      order_statuses: $order_statuses
      order_group_number: $order_group_number
      platform_order_number: $platform_order_number
      customer_id: $customer_id
      creator_id: $creator_id
      product_id: $product_id
      variant_id: $variant_id
      brand_id: $brand_id
      order_id: $order_id
      order_status: $order_status
      payin_statuses: $payin_statuses
      sort_type: $sort_type
      sort_by: $sort_by
    ) {
      status
      error
      message
      version
      service
      pagination {
        page_number
        item_count
        total_count
      }
      order_items {
        order {
          created_at
          created_by
          updated_at
          updated_by
          order_id
          order_number
          platform_order_number
          order_group_number
          cart_id
          customer_id
          creator_id
          brand_id
          product_id
          variant_id
          item_count
          item_cost
          order_status
          address {
            line_1
            line_2
            region
            town_city
            postcode
            state_id
            country_id
          }
          shipping_cost
          total_tax
          total_discount
          total_cost
          platform_draft_order_id
          platform_order_id
          platform_order_item_id
          platform_variant_id
          pending_return {
            platform_type
            platform_return_id
            platform_return_line_item_id
            quantity
            return_status
            created_at
            updated_at
          }
          completed_returns {
            platform_type
            platform_return_id
            platform_return_line_item_id
            quantity
            return_status
            created_at
            updated_at
          }
          mobile_number
          email
          delivered_at
        }
        payin {
          created_at
          created_by
          updated_at
          updated_by
          payin_id
          user_id
          currency_code
          payer_email
          payer_remark
          payment_reason
          payin_status
          payment_date
          amount
          cgst
          sgst
          igst
          total_amount
          gateway_transaction {
            transaction_id
            amount
            payment_status
            gateway_order_id
            gateway_payment_id
            gateway_payment_signature
            gateway_receipt_id
            gateway_refund_speed
            refunded_amount
            updated_at
            updated_by
            created_at
            created_by
            gateway_txn_info
            gateway_api_url
          }
          comment
          payment_provider_id
          total_refund_amount
          pending_refunds {
            transaction_id
            refund_id
            refund_amount
            refund_status
            gateway_order_id
            gateway_payment_id
            gateway_payment_signature
            gateway_receipt_id
            gateway_refund_speed
            order_id
            gateway_txn_id
            gateway_refund_txn_id
            gateway_refund_txn_info
            gateway_validate_refund_txn_info
            updated_at
            updated_by
            created_at
            created_by
          }
          completed_refunds {
            transaction_id
            refund_id
            refund_amount
            refund_status
            gateway_order_id
            gateway_payment_id
            gateway_payment_signature
            gateway_receipt_id
            gateway_refund_speed
            order_id
            gateway_txn_id
            gateway_refund_txn_id
            gateway_refund_txn_info
            gateway_validate_refund_txn_info
            updated_at
            updated_by
            created_at
            created_by
          }
          refund_type
          order_group_number
          campaign_id
          refund_status
          provider_name
        }
        user {
          created_at
          created_by
          updated_at
          updated_by
          user_id
          user_types
          user_name
          first_name
          last_name
          gender
          dob
          mobile_number
          mobile_number_verified
          email
          email_verified
          address {
            line_1
            line_2
            region
            town_city
            postcode
            state_id
            country_id
          }
          profile_images {
            image_url_id
            key
            sort_order
            image_type
            url
          }
          social_urls {
            provider
            link
          }
          alternate_email
          country_id
          state_id
          city_id
          active
        }
      }
    }
  }
`;
export const GET_ORDER_LIST_BY_GROUPID = gql`
  query getOrderListByGroupId(
    $active: Boolean
    $pagination: PaginationFilter
    $dateFilter: DateFilter
    $order_ids: [String!]
    $order_numbers: [String!]
    $order_group_numbers: [String!]
    $order_statuses: [OrderStatus!]
    $payin_statuses: [PayinStatus!]
    $order_group_number: String
    $customer_id: String
    $creator_id: String
    $product_id: String
    $variant_id: String
    $brand_id: String
    $order_id: String
    $order_status: OrderStatus
    $sort_type: SortType
    $sort_by: OrderSortBy
  ) {
    getOrderListByGroupId(
      active: $active
      pagination: $pagination
      dateFilter: $dateFilter
      order_ids: $order_ids
      order_numbers: $order_numbers
      order_group_numbers: $order_group_numbers
      order_statuses: $order_statuses
      order_group_number: $order_group_number
      customer_id: $customer_id
      creator_id: $creator_id
      product_id: $product_id
      variant_id: $variant_id
      brand_id: $brand_id
      order_id: $order_id
      order_status: $order_status
      payin_statuses: $payin_statuses
      sort_type: $sort_type
      sort_by: $sort_by
    ) {
      status
      error
      message
      version
      service
      pagination {
        page_number
        item_count
        total_count
      }
      orders {
        payin {
          created_at
          created_by
          updated_at
          updated_by
          payin_id
          user_id
          currency_code
          payer_email
          payer_remark
          payment_reason
          payin_status
          payment_date
          amount
          cgst
          sgst
          igst
          total_amount
          gateway_transaction {
            transaction_id
            amount
            payment_status
            gateway_order_id
            gateway_payment_id
            gateway_payment_signature
            gateway_receipt_id
            gateway_refund_speed
            refunded_amount
            updated_at
            updated_by
            created_at
            created_by
            gateway_txn_info
            gateway_api_url
          }
          comment
          payment_provider_id
          total_refund_amount
          pending_refunds {
            transaction_id
            refund_id
            refund_amount
            refund_status
            gateway_order_id
            gateway_payment_id
            gateway_payment_signature
            gateway_receipt_id
            gateway_refund_speed
            order_id
            gateway_txn_id
            gateway_refund_txn_id
            gateway_refund_txn_info
            gateway_validate_refund_txn_info
            updated_at
            updated_by
            created_at
            created_by
          }
          completed_refunds {
            transaction_id
            refund_id
            refund_amount
            refund_status
            gateway_order_id
            gateway_payment_id
            gateway_payment_signature
            gateway_receipt_id
            gateway_refund_speed
            order_id
            gateway_txn_id
            gateway_refund_txn_id
            gateway_refund_txn_info
            gateway_validate_refund_txn_info
            updated_at
            updated_by
            created_at
            created_by
          }
          refund_type
          order_group_number
          campaign_id
          refund_status
          provider_name
        }
        orders {
          order {
            created_at
            created_by
            updated_at
            updated_by
            order_id
            order_number
            platform_order_number
            order_group_number
            cart_id
            customer_id
            creator_id
            brand_id
            product_id
            variant_id
            creator_commission_amount
            item_count
            item_cost
            order_status
            address {
              line_1
              line_2
              region
              town_city
              postcode
              state_id
              country_id
            }
            shipping_cost
            total_tax
            total_discount
            total_cost
            platform_draft_order_id
            platform_order_id
            platform_order_item_id
            platform_variant_id
            pending_return {
              platform_type
              platform_return_id
              platform_return_line_item_id
              quantity
              return_status
              created_at
              updated_at
            }
            completed_returns {
              platform_type
              platform_return_id
              platform_return_line_item_id
              quantity
              return_status
              created_at
              updated_at
            }
            mobile_number
            email
            delivered_at
          }
          product {
            created_at
            created_by
            updated_at
            updated_by
            product_id
            user_id
            platform_product_id
            brand_id
            category_id
            sort_order
            product_title
            product_description
            product_type
            product_image_urls {
              image_url_id
              key
              sort_order
              image_type
              url
            }
            total_inventory
            total_variants
            tracks_inventory
            has_only_default_variant
            has_out_of_stock_variants
            product_status
            product_options {
              platform_option_id
              name
              sort_order
              values
            }
            tags
            is_gift_card
            active
          }
          variant {
            created_at
            created_by
            updated_at
            updated_by
            variant_id
            platform_variant_id
            product_id
            brand_id
            category_id
            sort_order
            variant_title
            variant_description
            variant_image_urls {
              image_url_id
              key
              sort_order
              image_type
              url
            }
            variant_status
            variant_attributes {
              attribute_type
              attribute_value
            }
            active
          }
          brand {
            created_at
            created_by
            updated_at
            updated_by
            brand_id
            brand_name
            brand_number
            brand_domain
            brand_description
            business_mobile_number
            cs_mobile_number
            cs_mobile_number_verfied
            business_email
            cs_email
            cs_email_verfied
            brand_image_urls {
              image_url_id
              key
              sort_order
              image_type
              url
            }
            brand_page_image_urls {
              image_url_id
              key
              sort_order
              image_type
              url
            }
            brand_content_meta {
              key
              value
            }
            social_urls {
              provider
              link
            }
            shopify_url
            website_url
            account_name
            bank_name
            account_number
            bank_ifsc
            bank_vpa
            gst_number
            pan_number
            is_kyc_completed
            is_info_updated
            is_product_sync_completed
            is_product_approved
            is_shopify_sync_completed
            brand_platform_type
            plugin
            is_policy_updated
            is_agreement_completed
            is_agreed
            is_admin_onboarded
            is_toolkit_added
            onboarding_status
            default_mark_down
            default_creator_commission
            brand_hashtags
            brand_note
            last_sync_ts
            plugin_sync_status
            active
          }
          creator {
            created_at
            created_by
            updated_at
            updated_by
            user_id
            email
            creator_handle
            creator_description
            secondary_social_links {
              provider
              link
            }
            primary_social_links {
              provider
              link
            }
            languages
            favourite_category_ids
            device_id
            city_id
            password
            creator_grade
            active
            affliate_listing
            campaigns
          }
        }
      }
    }
  }
`;
export const GET_CREATOR_APPLICATION_LIST = gql`
  query getAffiliatedBrand(
    $active: Boolean
    $pagination: PaginationFilter
    $dateFilter: DateFilter
    $sort_type: SortType
    $sort_by: SocialDataSortBy
    $creator_id: String
    $brand_audience_id: String
    $brand_id: String
    $brand_name: String
  ) {
    getAffiliatedBrand(
      active: $active
      pagination: $pagination
      dateFilter: $dateFilter
      sort_type: $sort_type
      sort_by: $sort_by
      creator_id: $creator_id
      brand_audience_id: $brand_audience_id
      brand_id: $brand_id
      brand_name: $brand_name
    ) {
      status
      error
      message
      version
      service
      pagination {
        page_number
        item_count
        total_count
      }
      brands {
        created_at
        created_by
        updated_at
        updated_by
        brand_id
        brand_name
        brand_number
        brand_domain
        brand_description
        business_mobile_number
        cs_mobile_number
        cs_mobile_number_verfied
        business_email
        cs_email
        cs_email_verfied
        brand_image_urls {
          image_url_id
          key
          sort_order
          image_type
          url
        }
        brand_page_image_urls {
          image_url_id
          key
          sort_order
          image_type
          url
        }
        brand_content_meta {
          key
          value
        }
        address {
          line_1
          line_2
          region
          town_city
          postcode
          state_id
          country_id
        }
        social_urls {
          provider
          link
        }
        shopify_url
        website_url
        account_name
        bank_name
        account_number
        bank_ifsc
        bank_vpa
        gst_number
        pan_number
        is_kyc_completed
        is_info_updated
        is_product_sync_completed
        is_product_approved
        is_shopify_sync_completed
        brand_platform_type
        plugin
        is_policy_updated
        is_agreement_completed
        is_agreed
        is_admin_onboarded
        is_toolkit_added
        onboarding_status
        default_mark_down
        default_creator_commission
        brand_hashtags
        brand_note
        last_sync_ts
        plugin_sync_status
        active
      }
    }
  }
`;
export const GET_BRAND_AUDIENCE_LIST = gql`
  query getBrandAudienceList(
    $active: Boolean
    $pagination: PaginationFilter
    $dateFilter: DateFilter
    $sort_type: SortType
    $sort_by: SocialDataSortBy
    $creator_id: String
    $brand_audience_id: String
    $brand_id: String
  ) {
    getBrandAudienceList(
      active: $active
      pagination: $pagination
      dateFilter: $dateFilter
      sort_type: $sort_type
      sort_by: $sort_by
      creator_id: $creator_id
      brand_audience_id: $brand_audience_id
      brand_id: $brand_id
    ) {
      status
      error
      message
      version
      service
      pagination {
        page_number
        item_count
        total_count
      }
      brand_audiences {
        created_at
        created_by
        updated_at
        updated_by
        brand_audience_id
        creator_id
        brand_id
        active
      }
    }
  }
`;
export const GET_CATEGORY_LIST = gql`
  query getCategoryList(
    $active: String
    $pagination: PaginationFilter
    $dateFilter: DateFilter
    $title: String
    $category_ids: [String!]
  ) {
    getCategoryList(
      active: $active
      pagination: $pagination
      dateFilter: $dateFilter
      title: $title
      category_ids: $category_ids
    ) {
      status
      error
      message
      version
      service
      pagination {
        page_number
        item_count
        total_count
      }
      categories {
        created_at
        created_by
        updated_at
        updated_by
        category_id
        sort_order
        category_title
        category_description
        category_images {
          key
          sort_order
          image_type
          url
        }
        category_meta {
          key
          value
        }
        category_status
        active
      }
    }
  }
`;
export const GET_ALLUSER_META_LIST = gql`
  query getAllUserMetaList(
    $active: Boolean
    $pagination: PaginationFilter
    $dateFilter: DateFilter
    $user_meta_id: String
    $instagram_handle: String
    $creator_id: String
    $business_account: Boolean
    $is_skipped: Boolean
    $public_account: Boolean
    $primary_account: PrimaryAccount
  ) {
    getAllUserMetaList(
      active: $active
      pagination: $pagination
      dateFilter: $dateFilter
      user_meta_id: $user_meta_id
      instagram_handle: $instagram_handle
      creator_id: $creator_id
      business_account: $business_account
      is_skipped: $is_skipped
      public_account: $public_account
      primary_account: $primary_account
    ) {
      status
      error
      message
      version
      service
      pagination {
        page_number
        item_count
        total_count
      }
      user_metas {
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
export const GET_PRODUCT_INFO = gql`
  query getProductsInfo(
    $active: Boolean
    $pagination: PaginationFilter
    $dateFilter: DateFilter
    $title: String
    $category_id: String
    $brand_id: String
    $user_id: String
    $product_ids: [String!]
    $product_status: ProductStatus
    $inventory_type: InventoryType
  ) {
    getProductsInfo(
      active: $active
      pagination: $pagination
      dateFilter: $dateFilter
      title: $title
      category_id: $category_id
      brand_id: $brand_id
      user_id: $user_id
      product_ids: $product_ids
      product_status: $product_status
      inventory_type: $inventory_type
    ) {
      status
      error
      message
      version
      service
      pagination {
        page_number
        item_count
        total_count
      }
      product_items {
        product {
          created_at
          created_by
          updated_at
          updated_by
          product_id
          user_id
          platform_product_id
          brand_id
          category_id
          sort_order
          product_title
          product_description
          product_type
          product_image_urls {
            key
            sort_order
            image_type
            url
          }
          total_inventory
          total_variants
          tracks_inventory
          has_only_default_variant
          has_out_of_stock_variants
          product_status
          product_options {
            platform_option_id
            name
            sort_order
            values
          }
          tags
          is_gift_card
          active
        }
        brand_commission_config {
          created_at
          created_by
          updated_at
          updated_by
          brand_commission_config_id
          config_type
          commission_type
          brand_id
          product_id
          cgst_percent
          sgst_percent
          igst_percent
          mark_down
          creator_discount
          platform_commission_percent
          active
        }
        campaign_commission_config {
          created_at
          created_by
          updated_at
          updated_by
          commission_config_id
          campaign_id
          campaign_type
          commission_type
          brand_id
          product_id
          cgst_percent
          sgst_percent
          igst_percent
          mark_down
          creator_discount
          platform_commission_percent
          active
        }
        variant_items {
          variant {
            created_at
            created_by
            updated_at
            updated_by
            variant_id
            platform_variant_id
            product_id
            brand_id
            category_id
            sort_order
            variant_title
            variant_description
            variant_status
            active
          }
          inventory {
            created_at
            created_by
            updated_at
            updated_by
            inventory_id
            platform_inventory_id
            brand_id
            product_id
            variant_id
            inventory_type
            sku
            campaign_id
            inventory_count
            variant_cost
            compare_at_price
            available_for_sale
            requires_shipping
            active
          }
        }
      }
    }
  }
`;
export const GET_PRODUCT_INFO_GQL = gql`
  query getAllProductsInfo(
    $active: Boolean
    $pagination: PaginationFilter
    $dateFilter: DateFilter
    $title: String
    $category_id: String
    $brand_id: String
    $user_id: String
    $product_ids: [String!]
    $product_status: ProductStatus
    $inventory_type: InventoryType
  ) {
    getAllProductsInfo(
      active: $active
      pagination: $pagination
      dateFilter: $dateFilter
      title: $title
      category_id: $category_id
      brand_id: $brand_id
      user_id: $user_id
      product_ids: $product_ids
      product_status: $product_status
      inventory_type: $inventory_type
    ) {
      status
      error
      message
      version
      service
      pagination {
        page_number
        item_count
        total_count
      }
      product_items {
        product {
          created_at
          created_by
          updated_at
          updated_by
          product_id
          user_id
          platform_product_id
          brand_id
          category_id
          sort_order
          product_title
          product_description
          product_type
          product_image_urls {
            key
            sort_order
            image_type
            url
          }
          total_inventory
          total_variants
          tracks_inventory
          has_only_default_variant
          has_out_of_stock_variants
          product_status
          product_options {
            platform_option_id
            name
            sort_order
            values
          }
          tags
          is_gift_card
          active
        }
        variant_items {
          variant {
            created_at
            created_by
            updated_at
            updated_by
            variant_id
            platform_variant_id
            product_id
            brand_id
            category_id
            sort_order
            variant_title
            variant_description
            variant_image_urls {
              key
              sort_order
              image_type
              url
            }
            variant_status
            variant_attributes {
              attribute_type
              attribute_value
            }
            active
          }
          inventory {
            created_at
            created_by
            updated_at
            updated_by
            inventory_id
            platform_inventory_id
            brand_id
            product_id
            variant_id
            inventory_type
            sku
            campaign_id
            inventory_count
            variant_cost
            compare_at_price
            available_for_sale
            requires_shipping
            active
          }
        }
      }
    }
  }
`;
export const GET_INTEREST_LIST = gql`
  query getInterestList(
    $active: Boolean
    $pagination: PaginationFilter
    $dateFilter: DateFilter
    $interest_name: String
    $interest_description: String
  ) {
    getInterestList(
      active: $active
      pagination: $pagination
      dateFilter: $dateFilter
      interest_name: $interest_name
      interest_description: $interest_description
    ) {
      status
      error
      message
      version
      service
      pagination {
        page_number
        item_count
        total_count
      }
      interests {
        created_at
        created_by
        updated_at
        updated_by
        interest_id
        interest_name
        interest_description
        active
      }
    }
  }
`;
export const GET_CREATOR_INTEREST_LIST = gql`
  query getCreatorInterestList(
    $active: Boolean
    $pagination: PaginationFilter
    $dateFilter: DateFilter
    $creator_id: String
    $creator_ids: [String!]
    $interest_name: String
    $interest_id: String
  ) {
    getCreatorInterestList(
      active: $active
      pagination: $pagination
      dateFilter: $dateFilter
      creator_id: $creator_id
      creator_ids: $creator_ids
      interest_name: $interest_name
      interest_id: $interest_id
    ) {
      status
      error
      message
      version
      service
      pagination {
        page_number
        item_count
        total_count
      }
      creator_interests {
        created_at
        created_by
        updated_at
        updated_by
        creator_interest_id
        creator_id
        interest_id
        interest_name
        active
      }
    }
  }
`;
export const GET_CREATOR_CREDENTIAL_LIST = gql`
  query getCreatorCredentialList(
    $active: Boolean
    $pagination: PaginationFilter
    $dateFilter: DateFilter
    $creator_id: String
    $creator_credential_id: String
    $provider_platform_types: [SocialProvider!]
    $provider_account_id: String
    $provider_account_type: String
  ) {
    getCreatorCredentialList(
      active: $active
      pagination: $pagination
      dateFilter: $dateFilter
      creator_id: $creator_id
      creator_credential_id: $creator_credential_id
      provider_platform_types: $provider_platform_types
      provider_account_id: $provider_account_id
      provider_account_type: $provider_account_type
    ) {
      status
      error
      message
      version
      service
      pagination {
        page_number
        item_count
        total_count
      }
      creator_credentials {
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
export const GET_CREATOR_INVITE_LIST = gql`
  query getCreatorInviteList(
    $active: Boolean
    $pagination: PaginationFilter
    $dateFilter: DateFilter
    $emails: [String!]
    $brand_id: String
    $invite_statuses: [CreatorInviteStatus!]
  ) {
    getCreatorInviteList(
      active: $active
      pagination: $pagination
      dateFilter: $dateFilter
      emails: $emails
      brand_id: $brand_id
      invite_statuses: $invite_statuses
    ) {
      status
      error
      message
      version
      service
      pagination {
        page_number
        item_count
        total_count
      }
      creator_invites {
        created_at
        created_by
        updated_at
        updated_by
        invite_id
        email
        brand_id
        invite_status
      }
    }
  }
`;
export const GET_INTEREST = gql`
  query getInterest($interest_id: String!) {
    getInterest(interest_id: $interest_id) {
      status
      error
      message
      version
      service
      interest {
        created_at
        created_by
        updated_at
        updated_by
        interest_id
        interest_name
        interest_description
        active
      }
    }
  }
`;
export const GET_CREATOR_COMMISSION = gql`
  query getCreatorCommission($commission_request: CreatorCommissionRequest!) {
    getCreatorCommission(commission_request: $commission_request) {
      status
      error
      message
      version
      service
      commission
    }
  }
`;
export const GET_APPLIED_CREATOR_INFO = gql`
  query getAppliedCreatorInfo(
    $active: Boolean
    $pagination: PaginationFilter
    $dateFilter: DateFilter
    $sort_type: SortType
    $sort_by: SocialDataSortBy
    $brand_id: String
    $user_id: String
    $application_statuses: [CreatorInviteStatus!]
    $emails: [String!]
  ) {
    getAppliedCreatorInfo(
      active: $active
      pagination: $pagination
      dateFilter: $dateFilter
      sort_type: $sort_type
      sort_by: $sort_by
      brand_id: $brand_id
      user_id: $user_id
      application_statuses: $application_statuses
      emails: $emails
    ) {
      status
      error
      message
      version
      service
      pagination {
        page_number
        item_count
        total_count
      }
      creator_application_items {
        creator_interests {
          created_at
          created_by
          updated_at
          updated_by
          interest_id
          interest_name
          interest_description
          active
        }
        creator {
          created_at
          created_by
          updated_at
          updated_by
          user_id
          email
          creator_handle
          creator_description
          secondary_social_links {
            provider
            link
          }
          primary_social_links {
            provider
            link
          }
          languages
          favourite_category_ids
          device_id
          city_id
          password
          creator_grade
          active
          affliate_listing
          campaigns
        }
        user {
          created_at
          created_by
          updated_at
          updated_by
          user_id
          user_types
          user_name
          first_name
          last_name
          gender
          dob
          mobile_number
          mobile_number_verified
          email
          email_verified
          address {
            line_1
            line_2
            region
            town_city
            postcode
            state_id
            country_id
          }
          profile_images {
            image_url_id
            key
            sort_order
            image_type
            url
          }
          social_urls {
            provider
            link
          }
          alternate_email
          country_id
          state_id
          city_id
          active
        }
        brand {
          created_at
          created_by
          updated_at
          updated_by
          brand_id
          brand_name
          brand_number
          brand_domain
          brand_description
          business_mobile_number
          cs_mobile_number
          cs_mobile_number_verfied
          business_email
          cs_email
          cs_email_verfied
          brand_image_urls {
            image_url_id
            key
            sort_order
            image_type
            url
          }
          brand_page_image_urls {
            image_url_id
            key
            sort_order
            image_type
            url
          }
          brand_content_meta {
            key
            value
          }
          address {
            line_1
            line_2
            region
            town_city
            postcode
            state_id
            country_id
          }
          social_urls {
            provider
            link
          }
          shopify_url
          website_url
          account_name
          bank_name
          account_number
          bank_ifsc
          bank_vpa
          gst_number
          pan_number
          is_kyc_completed
          is_info_updated
          is_product_sync_completed
          is_shopify_sync_completed
          brand_platform_type
          plugin
          is_policy_updated
          is_agreement_completed
          is_agreed
          is_admin_onboarded
          is_toolkit_added
          onboarding_status
          default_mark_down
          default_creator_commission
          brand_hashtags
          brand_note
          last_sync_ts
          plugin_sync_status
          active
        }
        creator_social_data {
          created_at
          created_by
          updated_at
          updated_by
          creator_social_data_id
          creator_id
          social_provider
          social_handle
          follower_count
          feed_count
          reel_count
          shorts_count
          total_media_count
          reach_count
          stories
          likes
          saves
          shares
          comments
          click_score
          average_watch_mins
          engagement_score
          conversion_score
          reached_city_data {
            key
            value
          }
          reached_age_data {
            key
            value
          }
          reached_gender_data {
            key
            value
          }
          impressions
          profile_views
          accounts_engaged
          data_range_days
          from_date_seconds
          to_date_seconds
          is_conversion_score_calculated
          active
        }
        creator_application {
          created_at
          created_by
          updated_at
          updated_by
          application_id
          brand_id
          creator_id
          application_status
        }
      }
    }
  }
`;
export const GET_CREATOR_PRODUCT_TAX_DATA = gql`
  query getCreatorProductTaxData($creator_id: String!, $product_id: String!) {
    getCreatorProductTaxData(creator_id: $creator_id, product_id: $product_id) {
      status
      error
      message
      version
      service
      product_tax_items {
        product_id
        variant_id
        platform_commission_percent
        creator_commission_percent
        platform_commission_amount
        mark_down_amount
        creator_commission_amount
        platform_price
        actual_price
        discount_amount
        discount_percent
        discounted_price
      }
    }
  }
`;
export const ADD_CREATOR_INTEREST = gql`
  mutation addCreatorInterest($add_request: CreateCreatorInterestRequest!) {
    addCreatorInterest(add_request: $add_request) {
      status
      error
      message
      version
      service
      creator_interest {
        created_at
        created_by
        updated_at
        updated_by
        creator_interest_id
        creator_id
        interest_id
        active
      }
    }
  }
`;
export const GET_CREATOR_APPLICATION_INFO = gql`
  query getCreatorApplicationInfo(
    $active: Boolean
    $pagination: PaginationFilter
    $dateFilter: DateFilter
    $sort_type: SortType
    $sort_by: SocialDataSortBy
    $brand_id: String
    $user_id: String
    $application_statuses: [CreatorInviteStatus!]
    $emails: [String!]
  ) {
    getCreatorApplicationInfo(
      active: $active
      pagination: $pagination
      dateFilter: $dateFilter
      sort_type: $sort_type
      sort_by: $sort_by
      brand_id: $brand_id
      user_id: $user_id
      application_statuses: $application_statuses
      emails: $emails
    ) {
      status
      error
      message
      version
      service
      pagination {
        page_number
        item_count
        total_count
      }
      creator_application_items {
        creator_interests {
          created_at
          created_by
          updated_at
          updated_by
          interest_id
          interest_name
          interest_description
          active
        }
        creator {
          created_at
          created_by
          updated_at
          updated_by
          user_id
          email
          creator_handle
          creator_description
          secondary_social_links {
            provider
            link
          }
          primary_social_links {
            provider
            link
          }
          languages
          favourite_category_ids
          device_id
          city_id
          password
          creator_grade
          active
          affliate_listing
          campaigns
        }
        user {
          created_at
          created_by
          updated_at
          updated_by
          user_id
          user_types
          user_name
          first_name
          last_name
          gender
          dob
          mobile_number
          mobile_number_verified
          email
          email_verified
          address {
            line_1
            line_2
            region
            town_city
            postcode
            state_id
            country_id
          }
          profile_images {
            image_url_id
            key
            sort_order
            image_type
            url
          }
          social_urls {
            provider
            link
          }
          alternate_email
          country_id
          state_id
          city_id
          active
        }
        brand {
          created_at
          created_by
          updated_at
          updated_by
          brand_id
          brand_name
          brand_number
          brand_domain
          brand_description
          business_mobile_number
          cs_mobile_number
          cs_mobile_number_verfied
          business_email
          cs_email
          cs_email_verfied
          brand_image_urls {
            image_url_id
            key
            sort_order
            image_type
            url
          }
          brand_page_image_urls {
            image_url_id
            key
            sort_order
            image_type
            url
          }
          brand_content_meta {
            key
            value
          }
          address {
            line_1
            line_2
            region
            town_city
            postcode
            state_id
            country_id
          }
          social_urls {
            provider
            link
          }
          shopify_url
          website_url
          account_name
          bank_name
          account_number
          bank_ifsc
          bank_vpa
          gst_number
          pan_number
          is_kyc_completed
          is_info_updated
          is_product_sync_completed
          is_shopify_sync_completed
          brand_platform_type
          plugin
          is_policy_updated
          is_agreement_completed
          is_agreed
          is_admin_onboarded
          is_toolkit_added
          onboarding_status
          default_mark_down
          default_creator_commission
          brand_hashtags
          brand_note
          last_sync_ts
          plugin_sync_status
          active
        }
        creator_social_data {
          created_at
          created_by
          updated_at
          updated_by
          creator_social_data_id
          creator_id
          social_provider
          social_handle
          follower_count
          feed_count
          reel_count
          shorts_count
          total_media_count
          reach_count
          stories
          likes
          saves
          shares
          comments
          click_score
          average_watch_mins
          engagement_score
          conversion_score
          reached_city_data {
            key
            value
          }
          reached_age_data {
            key
            value
          }
          reached_gender_data {
            key
            value
          }
          impressions
          profile_views
          accounts_engaged
          data_range_days
          from_date_seconds
          to_date_seconds
          is_conversion_score_calculated
          active
        }
        creator_application {
          created_at
          created_by
          updated_at
          updated_by
          application_id
          brand_id
          creator_id
          application_status
        }
      }
    }
  }
`;
export const ADD_CREATOR_APPLICATION = gql`
  mutation createCreatorApplication(
    $create_request: CreatorApplicationRequest!
  ) {
    createCreatorApplication(create_request: $create_request) {
      status
      error
      message
      version
      service
      creator_application {
        created_at
        created_by
        updated_at
        updated_by
        application_id
        brand_id
        creator_id
        application_status
      }
    }
  }
`;
export const GET_BRAND_TOOLKIT = gql`
  query GetBrandToolKit($brand_domain: String!) {
    getBrandToolKit(brand_domain: $brand_domain) {
      status
      error
      message
      version
      service
      brand_tool_kits
    }
  }
`;
export const GET_CAMPAIGN_TOOLKIT = gql`
  query getCampaignToolKit($campaign_id: String!) {
    getCampaignToolKit(campaign_id: $campaign_id) {
      status
      error
      message
      version
      service
      campaign_tool_kits
    }
  }
`;
export const GET_CITY_LIST = gql`
  query getCityList(
    $active: Boolean
    $pagination: PaginationFilter
    $dateFilter: DateFilter
    $name: String
    $country_id: String
    $state_id: String
    $city_id: String
    $is_operational: Boolean
  ) {
    getCityList(
      active: $active
      pagination: $pagination
      dateFilter: $dateFilter
      name: $name
      country_id: $country_id
      state_id: $state_id
      city_id: $city_id
      is_operational: $is_operational
    ) {
      status
      error
      message
      version
      service
      pagination {
        page_number
        item_count
        total_count
      }
      cities {
        created_at
        created_by
        updated_at
        updated_by
        city_id
        country_id
        state_id
        name
        short_code
        active
        is_operational
      }
    }
  }
`;
export const GET_ALL_BRAND_LIST = gql`
  query getAllBrandList(
    $active: Boolean
    $pagination: PaginationFilter
    $dateFilter: DateFilter
    $brand_name: String
    $brand_domain: String
    $business_email: String
    $cs_email: String
    $business_mobile_number: String
    $cs_mobile_number: String
    $shopify_url: String
    $website_url: String
    $account_number: String
    $bank_name: String
    $bank_ifsc: String
    $account_name: String
    $gst_number: String
    $pan_number: String
    $brand_hashtags: [String!]
    $brand_note: String
    $last_sync_ts: DateTimeISO
    $plugin_sync_status: PluginSyncStatus
    $onboarding_status: BrandOnboardingStatus
    $brand_platform_type: BrandPlatformType
    $plugin: Boolean
    $is_kyc_completed: Boolean
    $is_agreement_completed: Boolean
    $is_agreed: Boolean
    $is_admin_onboarded: Boolean
    $is_toolkit_added: Boolean
    $is_shopify_sync_completed: Boolean
    $is_policy_updated: Boolean
    $is_product_sync_completed: Boolean
    $is_info_updated: Boolean
  ) {
    getAllBrandList(
      active: $active
      pagination: $pagination
      dateFilter: $dateFilter
      brand_name: $brand_name
      brand_domain: $brand_domain
      business_email: $business_email
      cs_email: $cs_email
      business_mobile_number: $business_mobile_number
      cs_mobile_number: $cs_mobile_number
      shopify_url: $shopify_url
      website_url: $website_url
      account_number: $account_number
      bank_name: $bank_name
      bank_ifsc: $bank_ifsc
      account_name: $account_name
      gst_number: $gst_number
      pan_number: $pan_number
      brand_hashtags: $brand_hashtags
      brand_note: $brand_note
      last_sync_ts: $last_sync_ts
      plugin_sync_status: $plugin_sync_status
      onboarding_status: $onboarding_status
      brand_platform_type: $brand_platform_type
      plugin: $plugin
      is_kyc_completed: $is_kyc_completed
      is_agreement_completed: $is_agreement_completed
      is_agreed: $is_agreed
      is_admin_onboarded: $is_admin_onboarded
      is_toolkit_added: $is_toolkit_added
      is_shopify_sync_completed: $is_shopify_sync_completed
      is_policy_updated: $is_policy_updated
      is_product_sync_completed: $is_product_sync_completed
      is_info_updated: $is_info_updated
    ) {
      status
      error
      message
      version
      service
      pagination {
        page_number
        item_count
        total_count
      }
      brands {
        created_at
        created_by
        updated_at
        updated_by
        brand_id
        brand_name
        brand_domain
        brand_description
        business_mobile_number
        cs_mobile_number
        business_email
        cs_email
        brand_image_urls {
          image_url_id
          key
          sort_order
          image_type
          url
        }
        brand_page_image_urls {
          image_url_id
          key
          sort_order
          image_type
          url
        }
        brand_content_meta {
          key
          value
        }
        address {
          line_1
          line_2
          region
          town_city
          postcode
          state_id
          country_id
        }
        social_urls {
          provider
          link
        }
        shopify_url
        website_url
        account_name
        bank_name
        account_number
        bank_ifsc
        bank_vpa
        gst_number
        pan_number
        is_kyc_completed
        is_info_updated
        is_product_sync_completed
        is_shopify_sync_completed
        brand_platform_type
        plugin
        is_policy_updated
        is_agreement_completed
        is_agreed
        is_admin_onboarded
        is_toolkit_added
        onboarding_status
        default_mark_down
        default_creator_commission
        brand_hashtags
        brand_note
        last_sync_ts
        plugin_sync_status
        active
      }
    }
  }
`;
export const GET_CREATOR_SOCIAL_DATA_LIST = gql`
  query getCreatorSocialDataList(
    $active: Boolean
    $pagination: PaginationFilter
    $dateFilter: DateFilter
    $sort_type: SortType
    $sort_by: SocialDataSortBy
    $creator_social_data_id: String
    $social_handle: String
    $creator_id: String
    $creator_ids: [String!]
    $feed_count: Float
    $reel_count: Float
    $follower_count: Float
    $shorts_count: Float
    $total_media_count: Float
    $reach_count: Float
    $likes: Float
    $saves: Float
    $shares: Float
    $stories: Float
    $comments: Float
    $click_score: Float
    $average_watch_mins: Float
    $engagement_score: Float
    $conversion_score: Float
    $data_range_days: String
    $from_date_seconds: Float
    $to_date_seconds: Float
    $is_conversion_score_calculated: Boolean
    $social_provider: SocialProvider
  ) {
    getCreatorSocialDataList(
      active: $active
      pagination: $pagination
      dateFilter: $dateFilter
      sort_type: $sort_type
      sort_by: $sort_by
      creator_social_data_id: $creator_social_data_id
      social_handle: $social_handle
      creator_id: $creator_id
      creator_ids: $creator_ids
      feed_count: $feed_count
      reel_count: $reel_count
      follower_count: $follower_count
      shorts_count: $shorts_count
      total_media_count: $total_media_count
      reach_count: $reach_count
      likes: $likes
      saves: $saves
      shares: $shares
      stories: $stories
      comments: $comments
      click_score: $click_score
      average_watch_mins: $average_watch_mins
      engagement_score: $engagement_score
      conversion_score: $conversion_score
      data_range_days: $data_range_days
      from_date_seconds: $from_date_seconds
      to_date_seconds: $to_date_seconds
      is_conversion_score_calculated: $is_conversion_score_calculated
      social_provider: $social_provider
    ) {
      status
      error
      message
      version
      service
      pagination {
        page_number
        item_count
        total_count
      }
      creator_social_data {
        reach_count
        click_score
        engagement_score
        conversion_score
        active
      }
    }
  }
`;
export const GET_ALL_BRAND = gql`
  query getAllBrand($brand_id: String!) {
    getAllBrand(brand_id: $brand_id) {
      status
      error
      message
      version
      service
      brand {
        created_at
        created_by
        updated_at
        updated_by
        brand_id
        brand_name
        brand_domain
        brand_description
        business_mobile_number
        cs_mobile_number
        business_email
        cs_email
        brand_image_urls {
          image_url_id
          key
          sort_order
          image_type
          url
        }
        brand_page_image_urls {
          image_url_id
          key
          sort_order
          image_type
          url
        }
        brand_content_meta {
          key
          value
        }
        address {
          line_1
          line_2
          region
          town_city
          postcode
          state_id
          country_id
        }
        social_urls {
          provider
          link
        }
        shopify_url
        website_url
        account_name
        bank_name
        account_number
        bank_ifsc
        bank_vpa
        gst_number
        pan_number
        is_kyc_completed
        is_info_updated
        is_product_sync_completed
        is_shopify_sync_completed
        brand_platform_type
        plugin
        is_policy_updated
        is_agreement_completed
        is_agreed
        is_admin_onboarded
        is_toolkit_added
        onboarding_status
        default_mark_down
        default_creator_commission
        brand_hashtags
        brand_note
        last_sync_ts
        plugin_sync_status
        active
      }
    }
  }
`;

export const GET_CAMPAIGN_LIST = gql`
  query getCampaignList(
    $active: Boolean
    $pagination: PaginationFilter
    $dateFilter: DateFilter
    $campaign_id: String
    $campaign_name: String
    $brand_id: String
    $creator_ids: [String!]
    $variant_ids: [String!]
    $campaign_types: [CampaignType!]
    $campaign_status: CampaignStatus
  ) {
    getCampaignList(
      active: $active
      pagination: $pagination
      dateFilter: $dateFilter
      campaign_id: $campaign_id
      campaign_name: $campaign_name
      brand_id: $brand_id
      creator_ids: $creator_ids
      variant_ids: $variant_ids
      campaign_types: $campaign_types
      campaign_status: $campaign_status
    ) {
      status
      error
      message
      version
      service
      pagination {
        page_number
        item_count
        total_count
      }
      campaigns {
        created_at
        created_by
        updated_at
        updated_by
        campaign_id
        campaign_type
        brand_id
        campaign_name
        campaign_description
        variant_ids
        creator_ids
        start_date
        end_date
        campaign_image_urls {
          image_url_id
          key
          sort_order
          image_type
          url
        }
        campaign_status
        payin_id
        active
      }
    }
  }
`;
export const GET_CAMPAIGN_CRAETOR_INFO = gql`
  query getCampaignCreatorInfo(
    $active: Boolean
    $pagination: PaginationFilter
    $dateFilter: DateFilter
    $campaign_id: String
    $campaign_uid: String
    $campaign_ids: [String!]
    $campaign_creator_id: String
    $campaign_creator_uid: String
    $campaign_name: String
    $brand_id: String
    $creator_ids: [String!]
    $variant_ids: [String!]
    $campaign_types: [CampaignType!]
    $campaign_statuses: [CampaignStatus!]
    $campaign_status: CampaignStatus
    $creator_id: String
    $is_url_generated: Boolean
  ) {
    getCampaignCreatorInfo(
      active: $active
      pagination: $pagination
      dateFilter: $dateFilter
      campaign_id: $campaign_id
      campaign_uid: $campaign_uid
      campaign_ids: $campaign_ids
      campaign_creator_id: $campaign_creator_id
      campaign_creator_uid: $campaign_creator_uid
      campaign_name: $campaign_name
      brand_id: $brand_id
      creator_ids: $creator_ids
      variant_ids: $variant_ids
      campaign_types: $campaign_types
      campaign_statuses: $campaign_statuses
      campaign_status: $campaign_status
      creator_id: $creator_id
      is_url_generated: $is_url_generated
    ) {
      status
      error
      message
      version
      service
      pagination {
        page_number
        item_count
        total_count
      }
      data {
        campaign {
          created_at
          created_by
          updated_at
          updated_by
          campaign_id
          campaign_type
          brand_id
          campaign_name
          campaign_description
          campaign_uid
          variant_ids
          creator_ids
          start_date
          end_date
          campaign_image_urls {
            image_url_id
            key
            sort_order
            image_type
            url
          }
          campaign_status
          payin_id
          target_link
          cost_per_item
          number_of_items
          campaign_hashtags
          instructions_and_terms
          active
        }
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
        brand {
          created_at
          created_by
          updated_at
          updated_by
          brand_id
          brand_name
          brand_number
          brand_domain
          brand_description
          business_mobile_number
          cs_mobile_number
          cs_mobile_number_verfied
          business_email
          cs_email
          cs_email_verfied
          brand_image_urls {
            image_url_id
            key
            sort_order
            image_type
            url
          }
          brand_page_image_urls {
            image_url_id
            key
            sort_order
            image_type
            url
          }
          brand_content_meta {
            key
            value
          }
          address {
            label
            mobile_number
            line_1
            line_2
            region
            town_city
            postcode
            state_id
            country_id
          }
          social_urls {
            provider
            link
          }
          shopify_url
          website_url
          account_name
          bank_name
          account_number
          bank_ifsc
          bank_vpa
          gst_number
          pan_number
          is_kyc_completed
          is_info_updated
          is_product_sync_completed
          is_product_approved
          is_shopify_sync_completed
          brand_platform_type
          plugin
          is_policy_updated
          is_agreement_completed
          is_agreed
          is_admin_onboarded
          is_toolkit_added
          onboarding_status
          default_mark_down
          default_creator_commission
          brand_hashtags
          brand_note
          last_sync_ts
          plugin_sync_status
          active
        }
      }
    }
  }
`;
export const GET_CAMPAIGN_CRAETOR_EARNING = gql`
  query getCampaignCreatorEarning(
    $active: Boolean
    $pagination: PaginationFilter
    $dateFilter: DateFilter
    $campaign_id: String
    $campaign_ids: [String!]
    $campaign_name: String
    $brand_id: String
    $creator_ids: [String!]
    $variant_ids: [String!]
    $campaign_types: [CampaignType!]
    $campaign_statuses: [CampaignStatus!]
    $campaign_status: CampaignStatus
    $creator_id: String
    $is_url_generated: Boolean
  ) {
    getCampaignCreatorEarning(
      active: $active
      pagination: $pagination
      dateFilter: $dateFilter
      campaign_id: $campaign_id
      campaign_ids: $campaign_ids
      campaign_name: $campaign_name
      brand_id: $brand_id
      creator_ids: $creator_ids
      variant_ids: $variant_ids
      campaign_types: $campaign_types
      campaign_statuses: $campaign_statuses
      campaign_status: $campaign_status
      creator_id: $creator_id
      is_url_generated: $is_url_generated
    ) {
      status
      error
      message
      version
      service
      pagination {
        page_number
        item_count
        total_count
      }
      data {
        campaign {
          created_at
          created_by
          updated_at
          updated_by
          campaign_id
          campaign_type
          brand_id
          campaign_name
          campaign_description
          variant_ids
          creator_ids
          start_date
          end_date
          campaign_image_urls {
            image_url_id
            key
            sort_order
            image_type
            url
          }
          campaign_status
          payin_id
          target_link
          cost_per_item
          number_of_items
          campaign_hashtags
          active
        }
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
        brand {
          created_at
          created_by
          updated_at
          updated_by
          brand_id
          brand_name
          brand_number
          brand_domain
          brand_description
          business_mobile_number
          cs_mobile_number
          cs_mobile_number_verfied
          business_email
          cs_email
          cs_email_verfied
          brand_image_urls {
            image_url_id
            key
            sort_order
            image_type
            url
          }
          brand_page_image_urls {
            image_url_id
            key
            sort_order
            image_type
            url
          }
          brand_content_meta {
            key
            value
          }
          address {
            label
            mobile_number
            line_1
            line_2
            region
            town_city
            postcode
            state_id
            country_id
          }
          social_urls {
            provider
            link
          }
          shopify_url
          website_url
          account_name
          bank_name
          account_number
          bank_ifsc
          bank_vpa
          gst_number
          pan_number
          is_kyc_completed
          is_info_updated
          is_product_sync_completed
          is_product_approved
          is_shopify_sync_completed
          brand_platform_type
          plugin
          is_policy_updated
          is_agreement_completed
          is_agreed
          is_admin_onboarded
          is_toolkit_added
          onboarding_status
          default_mark_down
          default_creator_commission
          brand_hashtags
          brand_note
          last_sync_ts
          plugin_sync_status
          active
        }
        earning
      }
    }
  }
`;
export const GET_NOTIFICATION_LIST_GQL = gql`
  query getNotificationList(
    $active: Boolean
    $pagination: PaginationFilter
    $dateFilter: DateFilter
    $notification_status: InAppNotificationStatus
    $user_id: String
    $content_id: String
    $content_type: ContentType
    $in_app_notification_ids: [String!]
    $notification_channels: [NotificationChannel!]
  ) {
    getNotificationList(
      active: $active
      pagination: $pagination
      dateFilter: $dateFilter
      notification_status: $notification_status
      user_id: $user_id
      content_id: $content_id
      content_type: $content_type
      in_app_notification_ids: $in_app_notification_ids
      notification_channels: $notification_channels
    ) {
      status
      error
      message
      version
      service
      pagination {
        page_number
        item_count
        total_count
      }
      notifications {
        created_at
        created_by
        updated_at
        updated_by
        in_app_notification_id
        user_id
        notification_id
        notification_status
        content_id
        content_type
        subject
        description
        sent_at
        delivered_at
        read_at
      }
    }
  }
`;
export const GET_NOTIFICATION_GQL = gql`
  query getNotification($in_app_notification_id: String!) {
    getNotification(in_app_notification_id: $in_app_notification_id) {
      status
      error
      message
      version
      service
      notification {
        created_at
        created_by
        updated_at
        updated_by
        in_app_notification_id
        user_id
        notification_id
        notification_status
        content_id
        content_type
        subject
        description
        sent_at
        delivered_at
        read_at
      }
    }
  }
`;
export const GET_USER_KYC_BY_USER_ID = gql`
  query getUserKycByUserId($user_id: String!) {
    getUserKycByUserId(user_id: $user_id) {
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

export const GET_ATTENDANCE_LIST = gql`
 query GetAttendanceList ($active: Boolean, $pagination: PaginationFilter, $dateFilter: DateFilter, $employee_id: String, $accuracy: Float, $time_stamp: DateTimeISO, $attendance_id: String) {
    GetAttendanceList (active: $active, pagination: $pagination, dateFilter: $dateFilter, employee_id: $employee_id, accuracy: $accuracy, time_stamp: $time_stamp, attendance_id: $attendance_id) {
        status
        error
        message
        version
        service
        pagination {
            page_number
            item_count
            total_count
        }
        attendances {
            created_at
            created_by
            updated_at
            updated_by
            attendance_id
            employee_id
            time_stamp
            employee_image_url {
                key
                sort_order
                image_type
                url
            }
            accuracy
        }
    }
}
`;

export const GET_EMPLOYEE_INFO = gql`
  query GetEmployeeInfo ($user_id: String!) {
    GetEmployeeInfo (user_id: $user_id) {
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
