
type ApolloErrorResponse = {
    data?: any;
    message?: string;
    networkError?: any;
    graphQLErrors?: Array<{message: string}>;
  };
export const parseApolloError = (
    response: ApolloErrorResponse | any = {},
  ): string => {
    if (response.data) {
      return response.data;
    } else if (response.message) {
      let error: any = '';
      let log: any = '';
      try {
        error = JSON.parse(response.message);
        log = JSON.parse(error.message);
      } catch (e) {
        console.log('Response Parsing Error', e);
      }
      return log && log.message
        ? log.message.toString()
        : error.message
        ? error.message.toString()
        : error
        ? error.toString()
        : response.message.toString();
    } else if (response.networkError) {
      return response.networkError.toString();
    } else if (response.graphQLErrors && response.graphQLErrors.length > 0) {
      return response.graphQLErrors[0].message.toString();
    } else if (Array.isArray(response) && response.length > 0) {
      return parseApolloError(response[0]);
    } else if (response) {
      return response.toString();
    }
    return '';
  };