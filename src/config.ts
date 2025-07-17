export interface LoggerConfig {
  enabled: boolean;
  environment: 'dev' | 'prod' | 'test' | string;
  logApi?: boolean;
  logErrors?: boolean;
}

let config: LoggerConfig = {
  enabled: false,
  environment: 'prod',
  logApi: true,
  logErrors: true,
};

export const initLogger = (userConfig: Partial<LoggerConfig>) => {
  config = { ...config, ...userConfig };
};

export const getLoggerConfig = () => config;
