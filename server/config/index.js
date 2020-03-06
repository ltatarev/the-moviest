const _ = require("lodash");

const root = "../client/dist/index.html";

function requireEnv(variableName, defaultValue) {
  const value = _.get(process, `env.${variableName}`) || defaultValue;
  if (_.isUndefined(value)) {
    throw new Error(`Required env variable '${variableName}' is not defined`);
  }
  return value;
}

module.exports = { requireEnv, root };
