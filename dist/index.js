
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dogmoney-sdk.cjs.production.min.js')
} else {
  module.exports = require('./dogmoney-sdk.cjs.development.js')
}
