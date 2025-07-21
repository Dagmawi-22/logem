import { getLoggerConfig } from "./config";
import * as fs from "fs";

export const logError = (message: string, errorObj?: any) => {
  const { enabled, logErrors, environment, logFilePath } = getLoggerConfig();
  if (!enabled || !logErrors || environment === "prod") return;

  const timestamp = new Date().toISOString();
  const logLine = `[${timestamp}] [ErrorLogger] ${message} ${
    errorObj ? JSON.stringify(errorObj) : ""
  }\n`;
  fs.appendFileSync(logFilePath || "logs.txt", logLine);
  console.error(logLine);
};
