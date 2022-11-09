import { sleep } from 'k6';
import { Options } from 'k6/options';

import * as config from '../config';
import loginHelper from '../helpers/loginHelper';
import teamHelper from '../helpers/teamHealper';

export const options: Options = {
  vus: 10,
  iterations: 10
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
    }
  };

  teamHelper.get(params);
  sleep(1);
}
