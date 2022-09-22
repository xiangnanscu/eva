// https://pm2.keymetrics.io/docs/usage/application-declaration/
require('dotenv').config()

console.log(process.env)

module.exports = {
  apps: [
    {
      name: 'eva',
      exec_mode: 'cluster',
      instances: 1,
      script: './.output/server/index.mjs',
      env: {
        NODE_ENV: "development",
        XXXX: "YYYY",
      },
      env_production: {
        NITRO_PORT: "8000",
        NITRO_HOST: "0.0.0.0",
        NODE_ENV: "production",
      },
      // watch: ["pages", "server"],
      // watch_delay: 1000,
      // ignore_watch: ["node_modules"],
    }
  ]
}