const Pool = require('pg').Pool //импортируем pg.Pool
const pool = new Pool({
  user: 'postgres', //указываем имя пользователя в postgres
  password: 'password', //указываем пароль для пользователя
  host: 'localhost', //указываем хостт
  port: '5432', //указываем порт
  database: 'node_postgres' //указываем название БД
})

module.exports = pool //экспортируем конфиги БД
