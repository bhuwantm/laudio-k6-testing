import { sleep } from 'k6';
import { Options } from 'k6/options';

import loginHelper from '../helpers/loginHelper';

export const options: Options = {
  vus: 10,
  iterations: 10
};

export default function () {
  loginHelper.validPost();
  sleep(1);
}
