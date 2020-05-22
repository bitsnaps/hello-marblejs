import { httpListener } from '@marblejs/core';
import { logger$ } from '@marblejs/middleware-logger';
import { bodyParser$ } from '@marblejs/middleware-body';
import { api$ } from './api.effects';
import { hello$ } from './hello.effect';

const middlewares = [
  logger$(),
  bodyParser$(),
  // middleware3$
  // middleware4$
  // ...
];

const effects = [
  api$,
  hello$,
  // endpoint2$
  // endpoint3$
  // ...
];

export const listener = httpListener({
  middlewares,
  effects,
});
