const express = require('express') //импортируем express т.к. будем использовать express.Router()
const { getLocation, saveLocation } = require('../controllers/location') //импортируем контроллер
const router = express.Router()

router.get('/location', getLocation) //задаем handler get запросов
router.post('/location', saveLocation) //задаем handler post запросов

module.exports = router //экспортируем наш роутер чтобы использовать в index.js
