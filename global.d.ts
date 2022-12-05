/* eslint-disable no-var */
import { connection } from '@types/mongoose';

declare global {
  var mongoose: connection;
}
