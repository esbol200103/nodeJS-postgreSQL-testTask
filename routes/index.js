const locationRoute = require('./location') //импортируем роут

module.exports = (app) => {
  app.use('/api', locationRoute)
} //экспортируем роут как функцию для вызова в '../index.js'
