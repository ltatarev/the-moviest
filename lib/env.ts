export function getEnvString(value: string | undefined): string {
  if (!value) {
    return '';
  }

  return process.env[value] || '';
}
