module.exports = Object.assign(require('./env.js'), {
  NODE_ENV: 'standalone',
  COZY_FIELDS: `{"connector": "mykonnector", "account": "noid"}`,
  DEBUG: '*'
})
