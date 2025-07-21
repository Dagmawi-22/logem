# logem

A minimal logger for React, React Native, and Node.js apps. Logs console messages, API request outcomes, and errors. Disabled by default in production.

## Features

- Logs to both console and a log file (with timestamps, Laravel-style)
- Global error capturing (Sentry-style): logs all uncaught exceptions and unhandled promise rejections by default
- Configurable log file location
- Easy to enable/disable features via config

## Installation

```bash
npm install @dagmawi222/logem
```

## Example

```js
import { initLogger, log, warn, error, logApiRequest, logError } from "logem";

initLogger({
  enabled: true,
  environment: process.env.NODE_ENV, // 'dev', 'prod', etc.
  logApi: true,
  logErrors: true,
  logFilePath: "logs.txt", // (optional) defaults to 'logs.txt' in your project root
  globalErrorHandling: true, // (optional) enable/disable global error logging (default: true)
});

log("App started");
warn("Something might be off");
error("Something failed");

logApiRequest("/api/user", "GET", 200, true, 120); // url, method, status, success, duration(ms)

try {
  throw new Error("Something went wrong");
} catch (err) {
  logError("User fetch failed", err);
}
```

## Log File Location

- By default, logs are written to `logs.txt` in your project root (where you run your app).
- You can change the log file location by setting `logFilePath` in `initLogger`.

## Global Error Logging

- By default, all uncaught exceptions and unhandled promise rejections are logged to the file and console.
- To disable this, set `globalErrorHandling: false` in `initLogger`.

---
