import { EnvParam } from './types';

export function getEnvString(value: EnvParam): string {
  if (!value || !process.env[value]) {
    return '';
  }

  return process.env[value] || '';
}
