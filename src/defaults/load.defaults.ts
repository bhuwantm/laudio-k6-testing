/*
Load Testing is a type of Performance Testing used to determine a system's behavior under both normal and peak conditions.
It is used to ensure that the application performs satisfactorily when many users access it at the same time.

You should run a Load Test to:
    Assess the current performance of your system under typical and peak load.
    Make sure you continue to meet the performance standards as you make changes to your system (code and infrastructure).
*/

import { Options } from 'k6/options';

export const STAGES = [
  { duration: '1m', target: 100 }, // simulate ramp-up of traffic from 1 to 100 users over 1 minute.
  { duration: '2m', target: 100 }, // stay at 100 users for 2 minutes.
  { duration: '1m', target: 0 } // ramp-down to 0 users
];

export const THRESHOLDS = {
  http_req_duration: ['p(99)<2500'], // 99% of requests must complete below 2.5s
  checks: ['rate>0.99'] // the rate of successful checks should be higher than 99%
};

export const OPTIONS: Options = {
  stages: STAGES,
  thresholds: THRESHOLDS
};
