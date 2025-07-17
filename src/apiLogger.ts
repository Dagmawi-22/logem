import { getLoggerConfig } from "./config";

export const logApiRequest = (
  url: string,
  method: string,
  status: number,
  success: boolean,
  timeMs: number
) => {
  const { enabled, logApi, environment } = getLoggerConfig();
  if (!enabled || !logApi || environment === "prod") return;

  console.log(
    `[API] ${method.toUpperCase()} ${url} -> ${status} (${
      success ? "✅" : "❌"
    }) in ${timeMs}ms`
  );
};
