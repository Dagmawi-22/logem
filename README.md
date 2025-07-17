# logem

A minimal logger for React and React Native apps. Logs console messages, API request outcomes, and errors. Disabled by default in production.

## Installation

```bash
npm i @dagmawi222/logem
```

## Example

```bash
import {
  initLogger,
  log,
  warn,
  error,
  logApiRequest,
  logError,
} from 'logem';

initLogger({
  enabled: true,
  environment: process.env.NODE_ENV, // 'development', 'production', etc.
  logApi: true,
  logErrors: true,
});

log('App started');
warn('Something might be off');
error('Something failed');

logApiRequest('/api/user', 'GET', 200, true, 120); // url, method, status, success, duration(ms)

try {
  throw new Error('Something went wrong');
} catch (err) {
  logError('User fetch failed', err);
}
```

