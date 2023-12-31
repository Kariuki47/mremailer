const path = require('path');
const baseConfig = require('../common/config');

const root_dir = path.join(__dirname, '..');

module.exports = {
  ...baseConfig,
  ALLOW_SENDING_EMAILS:
    process.env.NODE_ENV === 'production' ||
    process.env.ALLOW_SENDING_EMAILS === 'true',
  APP_NAME: process.env.APP_NAME || 'MicroRealEstate',
  DOMAIN_URL:
    process.env.DOMAIN_URL || 'http://localhost:8083',
  PORT: process.env.PORT || 8082,
  GMAIL: {
    email: process.env.GMAIL_EMAIL || 'example@gmail.com',
    appPassword: process.env.GMAIL_APP_PASSWORD || 'wwww xxxx yyyy zzzz',
  },
  MAILGUN: {
    apiKey: process.env.MAILGUN_API_KEY || 'your_api_key',
    domain: process.env.MAILGUN_DOMAIN || 'mg.example.com',
  },
  API_URL:
    process.env.API_URL || 'http://localhost:8080',
  TEMPORARY_DIRECTORY:
    process.env.TEMPORARY_DIRECTORY || path.join(root_dir, '/tmp'),
  EMAIL: {
    FROM: process.env.EMAIL_FROM || 'Example <noreply@example.com>',
    REPLY_TO: process.env.EMAIL_REPLY_TO || 'customer-service@example.com',
    BCC: process.env.EMAIL_BCC || 'manager1@example.com,manager2@example.com',
  },
};
