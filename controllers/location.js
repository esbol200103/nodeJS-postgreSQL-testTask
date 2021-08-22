const db = require('../db') //импортируем нашу БД

module.exports.getLocation = async (req, res) => {
  const { user_id, startTime, endTime } = req.query
  const isValidTimeStamp = (timestamp) => {
    return new Date(timestamp).getTime() > 0
  } //функция для валидации
  if (
    isNaN(user_id * 1) || //проверка является валидным user_id
    !isValidTimeStamp(startTime) ||
    !isValidTimeStamp(endTime)
  ) {
    res.status(400).send('invalid format')
  } // валидация тела запроса
  return db.query(
    `SELECT location FROM location 
    WHERE user_id=${user_id} 
    AND timePeriod >= '${startTime}' 
    AND timePeriod <= '${endTime}'`,
    //запрос в БД чтобы достать местоположения определенного пользователя за заданный интервал времени
    (err, locations) => {
      //callback для хэндлинга ошибки запроса select
      if (err || !locations) {
        res.status(400).send('select error')
      } else {
        res.json(locations.rows.map((i) => i.location)) //отправляем ответом только нужные данные
      }
    }
  )
}

module.exports.saveLocation = async (req, res) => {
  const { user_id, location } = req.body
  if (typeof user_id !== 'number' || typeof location !== 'string') {
    res.status(400).send('invalid format')
  } //валидация тела запроса
  return db.query(
    `INSERT INTO location (user_id, location, timePeriod) VALUES($1, $2, now()) RETURNING *`, //запрос в БД
    [user_id, location], //присваиваем значения $1 и $2
    (err, location) => {
      if (err || !location) {
        res.status(400).send('insert error')
      } else {
        res.json(location.rows[0]) //отправляем ответом объект из БД
      }
    } //callback для хэндлинга ошибки
  )
}
