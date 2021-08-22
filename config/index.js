if (process.env.NODE_ENV !== 'production') require('dotenv').config()
//импортируем dotenv чтобы задать глобальные конфигурации для dev staging

const config = {
  PORT: process.env.PORT
} //задаем порт

module.exports = config //экспортируем конфиги
