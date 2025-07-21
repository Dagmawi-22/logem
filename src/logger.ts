import { getLoggerConfig } from "./config";
import * as fs from "fs";

export const log = (...args: any[]) => {
  const { enabled, environment, logFilePath } = getLoggerConfig();
  if (!enabled || environment === "prod") return;

  const timestamp = new Date().toISOString();
  const logLine = `[${timestamp}] [LOG]: ${args
    .map((a) => (typeof a === "string" ? a : JSON.stringify(a)))
    .join(" ")}\n`;
  fs.appendFileSync(logFilePath || "logs.txt", logLine);
  console.log(logLine);
};

export const warn = (...args: any[]) => {
  const { enabled, environment, logFilePath } = getLoggerConfig();
  if (!enabled || environment === "production") return;

  const timestamp = new Date().toISOString();
  const logLine = `[${timestamp}] [WARN]: ${args
    .map((a) => (typeof a === "string" ? a : JSON.stringify(a)))
    .join(" ")}\n`;
  fs.appendFileSync(logFilePath || "logs.txt", logLine);
  console.warn(logLine);
};

export const error = (...args: any[]) => {
  const { enabled, environment, logFilePath } = getLoggerConfig();
  if (!enabled || environment === "prod") return;

  const timestamp = new Date().toISOString();
  const logLine = `[${timestamp}] [ERROR]: ${args
    .map((a) => (typeof a === "string" ? a : JSON.stringify(a)))
    .join(" ")}\n`;
  fs.appendFileSync(logFilePath || "logs.txt", logLine);
  console.error(logLine);
};
