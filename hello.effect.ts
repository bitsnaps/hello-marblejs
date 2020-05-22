import { r } from '@marblejs/core';
import { mapTo } from 'rxjs/operators';

export const hello$ = r.pipe(
  r.matchPath('/hello'),
  r.matchType('GET'),
  r.useEffect(req$ => req$.pipe(
    mapTo({ body: 'Hello, world!' }),
  )));
