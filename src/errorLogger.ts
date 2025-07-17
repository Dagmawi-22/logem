import { getLoggerConfig } from './config';

export const logError = (message: string, errorObj?: any) => {
  const { enabled, logErrors, environment } = getLoggerConfig();
  if (!enabled || !logErrors || environment === 'prod') return;

  console.error('[ErrorLogger]', message, errorObj || '');
};
