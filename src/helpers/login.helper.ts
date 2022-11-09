import http from 'k6/http';

import * as config from '../config';

const ENDPOINT = 'https://api-dev.laudio.com/auth/login';

const tags = {
  name: 'LOGIN'
};

type LoginResponse = {
  code: number;
  data: {
    accessToken: string;
    refreshToken: string;
    user: object;
    zendeskToken: string;
  };
  message: string;
};

const post = (email: string, password: string) => {
  const body = JSON.stringify({
    email: email,
    password: password
  });

  const params = {
    headers: config.DEFAULT_HEADERS,
    tags
  };

  return http.post(ENDPOINT, body, params);
};

const validPost = () => post(config.LOGIN_EMAIL, config.LOGIN_PASSWORD);

const invalidPost = () => post('random@random.com', 'random');

const getAccessToken = () => {
  const res = validPost();
  const resObj = res.json() as LoginResponse;
  return resObj.data.accessToken;
};

const loginHelper = {
  endpoint: ENDPOINT,
  tags: tags,
  post,
  validPost,
  invalidPost,
  getAccessToken
};

export default loginHelper;
