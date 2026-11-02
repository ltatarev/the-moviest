#!/usr/bin/env node
// Prints the env values the studio needs:
//
//   node scripts/hash-studio-password.mjs
//
// The password is read from the terminal without echo (or from stdin when
// piped), never from an argument, so it stays out of shell history.
// Keep the hash format in sync with `lib/studio/session.ts`.
import crypto from 'node:crypto';
import { promisify } from 'node:util';

const scrypt = promisify(crypto.scrypt);
const N = 2 ** 15;
const r = 8;
const p = 1;
const MIN_LENGTH = 20;

function readHidden(prompt) {
  return new Promise((resolve, reject) => {
    const { stdin, stdout } = process;
    let value = '';

    stdout.write(prompt);
    stdin.setRawMode(true);
    stdin.resume();
    stdin.setEncoding('utf8');

    const onData = (char) => {
      if (char === '\u0003') {
        stdin.setRawMode(false);
        stdout.write('\n');
        reject(new Error('Cancelled'));
      } else if (char === '\r' || char === '\n') {
        stdin.setRawMode(false);
        stdin.pause();
        stdin.off('data', onData);
        stdout.write('\n');
        resolve(value);
      } else if (char === '\u007f' || char === '\b') {
        value = value.slice(0, -1);
      } else {
        value += char;
      }
    };

    stdin.on('data', onData);
  });
}

async function readPiped() {
  let data = '';

  for await (const chunk of process.stdin) {
    data += chunk;
  }

  return data.replace(/\r?\n$/, '');
}

async function main() {
  let password;

  if (process.stdin.isTTY) {
    password = await readHidden('Studio password: ');
    const again = await readHidden('Repeat it: ');

    if (password !== again) {
      throw new Error('The two passwords differ.');
    }
  } else {
    password = await readPiped();
  }

  if (password.length < MIN_LENGTH) {
    throw new Error(
      `Use at least ${MIN_LENGTH} characters (a password manager can generate one).`,
    );
  }

  const salt = crypto.randomBytes(16);
  const hash = await scrypt(password, salt, 32, {
    N,
    r,
    p,
    maxmem: 256 * N * r,
  });
  const stored = [
    'scrypt',
    N,
    r,
    p,
    salt.toString('base64url'),
    hash.toString('base64url'),
  ].join(':');

  console.log('\nAdd these to Vercel (Production) and to .env.local:\n');
  console.log(`STUDIO_PASSWORD_HASH=${stored}`);
  console.log(
    `STUDIO_SESSION_SECRET=${crypto.randomBytes(32).toString('base64url')}`,
  );
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
