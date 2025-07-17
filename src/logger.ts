import { getLoggerConfig } from "./config";

export const log = (...args: any[]) => {
  const { enabled, environment } = getLoggerConfig();
  if (!enabled || environment === "prod") return;

  console.log("[LOG]:", ...args);
};

export const warn = (...args: any[]) => {
  const { enabled, environment } = getLoggerConfig();
  if (!enabled || environment === "production") return;

  console.warn("[WARN]:", ...args);
};

export const error = (...args: any[]) => {
  const { enabled, environment } = getLoggerConfig();
  if (!enabled || environment === "prod") return;

  console.error("[ERROR]:", ...args);
};
