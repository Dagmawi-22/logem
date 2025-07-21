import { getLoggerConfig } from "./config";
import * as fs from "fs";

export const logApiRequest = (
  url: string,
  method: string,
  status: number,
  success: boolean,
  timeMs: number
) => {
  const { enabled, logApi, environment, logFilePath } = getLoggerConfig();
  if (!enabled || !logApi || environment === "prod") return;

  const timestamp = new Date().toISOString();
  const logLine = `[${timestamp}] [API] ${method.toUpperCase()} ${url} -> ${status} (${
    success ? "✅" : "❌"
  }) in ${timeMs}ms\n`;
  fs.appendFileSync(logFilePath || "logs.txt", logLine);
  console.log(logLine);
};
