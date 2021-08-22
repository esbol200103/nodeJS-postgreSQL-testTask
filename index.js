const express = require('express') //импортируем express
const app = express() //создаем пустое приложение
const config = require('./config') //импортируем файл конфигураций

app.use(express.json()) //даем приложению доступ к обработке json файлов(req/res)

require('./routes')(app) //импортируем наши роуты и запускаем их

app.listen(config.PORT) //задаем порт нашему приложению
