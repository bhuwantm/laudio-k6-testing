import { check, sleep } from 'k6';
import { Options } from 'k6/options';
import { TeamResponse } from './../helpers/team.helper';

import * as config from '../config';
import loginHelper from '../helpers/login.helper';
import teamHelper from '../helpers/team.helper';

export const options: Options = {
  vus: 10,
  iterations: 100
};

export function setup() {
  const accessToken = loginHelper.getAccessToken();
  return {
    accessToken
  };
}

export default function (setupData: { accessToken: string }) {
  const params = {
    headers: {
      ...config.DEFAULT_HEADERS,
      authorization: `bearer ${setupData.accessToken}`
    },
    tags: teamHelper.tags
  };

  const res = teamHelper.get(params);
  check(res, {
    'is status 200': r => r.status === 200,
    'has data': r => {
      const resObj = r.json() as TeamResponse;
      return !!resObj?.data;
    }
  });

  sleep(1);
}
