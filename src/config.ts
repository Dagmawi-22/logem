import * as fs from "fs";

export interface LoggerConfig {
  enabled: boolean;
  environment: "dev" | "prod" | "test" | string;
  logApi?: boolean;
  logErrors?: boolean;
  logFilePath?: string;
  globalErrorHandling?: boolean;
}

let config: LoggerConfig = {
  enabled: true,
  environment: "dev",
  logApi: true,
  logErrors: true,
  logFilePath: "logs.txt",
  globalErrorHandling: true,
};

export const initLogger = (userConfig: Partial<LoggerConfig>) => {
  config = { ...config, ...userConfig };
  if (config.globalErrorHandling) {
    if (
      !process
        .listeners("uncaughtException")
        .some(
          (l: Function) =>
            (l as Function).name === "logemUncaughtExceptionHandler"
        )
    ) {
      process.on(
        "uncaughtException",
        function logemUncaughtExceptionHandler(err: Error) {
          const { logFilePath } = config;
          const timestamp = new Date().toISOString();
          const logLine = `[${timestamp}] [UNCAUGHT_EXCEPTION] ${
            err.stack || err
          }\n`;
          fs.appendFileSync(logFilePath || "logs.txt", logLine);
          console.error(logLine);
        }
      );
    }
    if (
      !process
        .listeners("unhandledRejection")
        .some(
          (l: Function) =>
            (l as Function).name === "logemUnhandledRejectionHandler"
        )
    ) {
      process.on(
        "unhandledRejection",
        function logemUnhandledRejectionHandler(reason: any) {
          const { logFilePath } = config;
          const timestamp = new Date().toISOString();
          const logLine = `[${timestamp}] [UNHANDLED_REJECTION] ${
            reason && reason.stack ? reason.stack : reason
          }\n`;
          fs.appendFileSync(logFilePath || "logs.txt", logLine);
          console.error(logLine);
        }
      );
    }
  }
};

export const getLoggerConfig = () => config;
