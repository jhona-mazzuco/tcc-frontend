(() => {
  const fs = require("fs");
  require('dotenv').config();

  const data = `
export const environment = {
  production: "${process.env.PRODUCTION}",
  adminApi: "${process.env.ADMIN_API}",
  firebase: {
    apiKey: "${process.env.API_KEY}",
    authDomain: "${process.env.AUTH_DOMAIN}",
    projectId: "${process.env.PROJECT_ID}",
    storageBucket: "${process.env.STORAGE_BUCKET}",
    messagingSenderId: "${process.env.MESSAGING_SENDER_ID}",
    appId: "${process.env.APP_ID}",
  }
};
  `;

  fs.writeFileSync(`${__dirname}/src/environments/environment.ts`, data, { encoding: 'utf-8' });
})();
