import { check, sleep } from 'k6';
import { Options } from 'k6/options';

import loginHelper from '../helpers/login.helper';
import * as smokeDefaults from '../defaults/smoke.defaults';

export const options: Options = smokeDefaults.OPTIONS;

export default function () {
  const res = loginHelper.validPost();
  check(res, {
    'is status 200': r => r.status === 200
  });

  sleep(1);
}
