/*
Smoke test is a regular load test, configured for minimal load. 
You want to run a smoke test as a sanity check every time you write a new script or modify an existing script.

You want to run a smoke test to:
    Verify that your test script doesn't have errors.
    Verify that your system doesn't throw any errors when under minimal load.

Source: https://k6.io/docs/test-types/smoke-testing/
*/

import { Options } from 'k6/options';

export const VUS = 1;
export const DURATION = '1m';
export const THRESHOLDS = {
  http_req_duration: ['p(99)<2500'], // 99% of requests must complete below 2.5s
  checks: ['rate>0.99'] // the rate of successful checks should be higher than 99%
};

export const OPTIONS: Options = {
  vus: VUS,
  duration: DURATION,
  thresholds: THRESHOLDS
};
