import http, { RefinedParams, ResponseType } from 'k6/http';

const ENDPOINT = 'https://api-dev.laudio.com/manager/team?type=active';

const get = (params: RefinedParams<ResponseType>) => {
  return http.get(ENDPOINT, params);
};

const teamHelper = {
  endpoint: ENDPOINT,
  get
};

export default teamHelper;
