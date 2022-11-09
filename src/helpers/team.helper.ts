import http, { RefinedParams, ResponseType } from 'k6/http';

const ENDPOINT = 'https://api-dev.laudio.com/manager/team?type=active';

const tags = {
  name: 'TEAM'
};

export type TeamResponse = {
  data: object;
  message: string;
};

const get = (params: RefinedParams<ResponseType>) => {
  return http.get(ENDPOINT, params);
};

const teamHelper = {
  endpoint: ENDPOINT,
  tags,
  get
};

export default teamHelper;
