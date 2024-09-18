const ENV_CONFIG = {
  GMAIL_ID: process.env.GMAIL_ID,
  GMAIL_APP_PASS: process.env.GMAIL_APP_PASS,
};

Object.freeze(ENV_CONFIG);

module.exports = ENV_CONFIG;
