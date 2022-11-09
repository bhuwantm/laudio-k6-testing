import { check, sleep } from 'k6';
import { Options } from 'k6/options';

import loginHelper from '../helpers/login.helper';

export const options: Options = {
  vus: 10,
  iterations: 10
};

export default function () {
  const res = loginHelper.validPost();
  check(res, {
    'is status 200': r => r.status === 200
  });

  sleep(1);
}
