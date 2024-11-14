import {ApolloClient, InMemoryCache, HttpLink} from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  // GRAPH_PROFILE_URL,
  // GRAPH_APPLICATION_URL,
  // GRAPH_ADMIN_URL,
  // GRAPH_CACHE_URL,
} from '@env';

const GRAPH_PROFILE_URL = 'https://63dvxipzx2j3zn5skyegy3mkwa0qavvl.lambda-url.ap-south-1.on.aws/face-recon/api/graphql';
// const GRAPH_PROFILE_URL = 'http://192.168.1.6:7002/api/profile/graphql';
// const GRAPH_APPLICATION_URL =
//   'http://192.168.1.33:7001/api/application/graphql';
// const GRAPH_APPLICATION_URL =
//   'https://dev-alb.fromaround.com/api/application/graphql';
// const GRAPH_ADMIN_URL = 'https://dev-alb.fromaround.com/api/admin/graphql';
// const GRAPH_ADMIN_URL = 'http://192.168.1.6:7003/api/admin/graphql';
// export const GRAPH_DOCUMENT_URL =
//   'https://szsjvegyj7nakddczwbh6mtwya0urpsf.lambda-url.ap-south-1.on.aws/api/profile/v1/document-service/upload';
// console.log(GRAPH_PROFILE_URL,GRAPH_APPLICATION_URL,"resdfdfdfdssdd");

// console.log(GRAPH_CACHE_URL, 'GRAPH_CACHE_URL');
class CommonDataManager {
  private static instance: CommonDataManager | null = null;
  private cache: InMemoryCache;
  private profileClient: ApolloClient<any>;
  private applicationClient: ApolloClient<any>;
  private adminClient: ApolloClient<any>;
  private cacheClient: ApolloClient<any>;
  private profileToken: string | null = null;
  private applicationToken: string | null = null;
  private adminToken: string | null = null;
  private cacheToken: string | null = null;

  private constructor() {
    this.cache = new InMemoryCache({addTypename: false});
    this.profileClient = this.createApolloClient(GRAPH_PROFILE_URL);
    this.applicationClient = this.createApolloClient(GRAPH_PROFILE_URL);
    this.adminClient = this.createApolloClient(GRAPH_PROFILE_URL);
    this.cacheClient = this.createApolloClient(GRAPH_PROFILE_URL);
  }

  public static getInstance(): CommonDataManager {
    if (CommonDataManager.instance === null) {
      CommonDataManager.instance = new CommonDataManager();
    }
    return CommonDataManager.instance;
  }

  private createApolloClient(uri: string): ApolloClient<any> {
    const token = this.profileToken;
    uri === GRAPH_PROFILE_URL
      ? this.profileToken
      : uri === GRAPH_PROFILE_URL
      ? this.applicationToken
      : uri === GRAPH_PROFILE_URL
      ? this.cacheClient
      : this.adminToken;
    // console.log(token, 'token');

    const httpLink = new HttpLink({
      uri,
      fetch: (uri: any, options: any) => {
        options.headers = {
          ...options.headers,
          'x-access-token': token || '',
        };
        return fetch(uri, options);
      },
    });

    return new ApolloClient({
      link: httpLink,
      cache: this.cache,
    });
  }

  public getProfile(): ApolloClient<any> {
    if (!this.profileClient) {
      this.profileClient = this.createApolloClient(GRAPH_PROFILE_URL);
    }
    return this.profileClient;
  }

  public getApplication(): ApolloClient<any> {
    if (!this.applicationClient) {
      this.applicationClient = this.createApolloClient(GRAPH_PROFILE_URL);
    }
    return this.applicationClient;
  }
  public getAdmin(): ApolloClient<any> {
    if (!this.adminClient) {
      this.adminClient = this.createApolloClient(GRAPH_PROFILE_URL);
    }
    return this.adminClient;
  }
  public getCache(): ApolloClient<any> {
    if (!this.cacheClient) {
      this.cacheClient = this.createApolloClient(GRAPH_PROFILE_URL);
    }
    return this.cacheClient;
  }

  public setProfileToken(token: string): void {
    this.profileToken = token;
    this.profileClient = this.createApolloClient(GRAPH_PROFILE_URL);
  }

  public async setAppToken(token: string): Promise<void> {
    this.applicationToken = token;
    this.applicationClient = this.createApolloClient(GRAPH_PROFILE_URL);
    await AsyncStorage.setItem('Frame-Application-Token', token);
  }
  public setAdminToken(token: string): void {
    this.adminToken = token;
    this.adminClient = this.createApolloClient(GRAPH_PROFILE_URL);
  }
  public setCacheToken(token: string): void {
    this.cacheToken = token;
    this.cacheClient = this.createApolloClient(GRAPH_PROFILE_URL);
  }

  public async clear(): Promise<void> {
    this.profileToken = null;
    this.applicationToken = null;
    this.adminToken = null;
    this.cacheToken = null;
    this.profileClient = this.createApolloClient(GRAPH_PROFILE_URL);
    this.applicationClient = this.createApolloClient(GRAPH_PROFILE_URL);
    this.adminClient = this.createApolloClient(GRAPH_PROFILE_URL);
    this.cacheClient = this.createApolloClient(GRAPH_PROFILE_URL);
    await AsyncStorage.removeItem('Frame-Application-Token');
  }
}

export default CommonDataManager.getInstance();
