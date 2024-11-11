import {DocumentNode} from 'graphql';
import {
  ApolloClient,
  NormalizedCacheObject,
  ApolloQueryResult,
  FetchPolicy,
} from '@apollo/client';
import ClientProvider from './ApolloService';

type Response = {
  data?: any;
  message?: string;
  networkError?: any;
  graphQLErrors?: {message: string}[];
};

const graphHandler = () => {
  let inProgress = false;

  const parseGenericResponse = (response: Response): boolean => {
    if (response.data) {
      return true;
    } else if (response.message) {
      let error: any = '';
      let log: any = '';
      try {
        error = JSON.parse(response.message);
        log = JSON.parse(error.message);
      } catch (e) {}
      return true;
    } else if (response.networkError) {
    } else if (response.graphQLErrors && response.graphQLErrors.length > 0) {
      return true;
    } else if (response) {
      return true;
    }
    return false;
  };

  const invoke = (
    request: DocumentNode,
    variables: Record<string, any> = {},
    serviceType: number = 0,
    canToast: boolean = false,
    fetchPolicy?: any,
    showError: boolean = true,
  ): Promise<ApolloQueryResult<any>> => {
    inProgress = true;
    let service: ApolloClient<NormalizedCacheObject> | null = null;

    switch (serviceType) {
      case 0:
        service = ClientProvider.getProfile();
        break;
      case 1:
        service = ClientProvider.getApplication();
        break;
      case 2:
        service = ClientProvider.getAdmin();
        break;
      case 3:
        service = ClientProvider.getCache();
        break;
      default:
        break;
    }

    if (!service) {
      inProgress = false;
      return Promise.reject(new Error('Invalid service type'));
    }

    return new Promise(async (resolve, reject) => {
      try {
        let response: any;
        if (JSON.stringify(request).includes('query')) {
          response = await service.query({
            query: request,
            variables,
            fetchPolicy: !fetchPolicy ? 'cache-only' : 'network-only',
          });
        } else {
          response = await service.mutate({
            mutation: request,
            variables,
          });
        }
        const toResolve = canToast ? parseGenericResponse({...response}) : true;
        if (toResolve) {
          resolve(response);
        } else {
          reject(response);
        }
        inProgress = false;
      } catch (error: any) {
        if (showError) {
          parseGenericResponse(error);
        }
        reject(error);
        inProgress = false;
      }
    });
  };

  return {invoke, inProgress};
};

export default graphHandler;

export enum serviceType {
  profileService = 0,
  applicationService = 1,
  adminService = 2,
  cacheService = 3,
}
