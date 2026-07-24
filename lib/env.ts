import { EnvParam } from './types';

export function getEnvString(value: EnvParam): string {
  const result = value ? process.env[value] : undefined;

  if (!result) {
    throw new Error(
      `Missing environment variable: ${value}. Please define it inside .env.local (see .env.example).`,
    );
  }

  return result;
}
