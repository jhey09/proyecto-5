const mongoose = require('mongoose')

const url = `mongodb+srv://${process.env.USER_NAME}:${process.env.USER_PASS}@cluster0.${process.env.MONGO_ID}.mongodb.net/users?retryWrites=true&w=majority`


mongoose.connect(url)
  .then(() => {
    console.log('Base de datos MONGODB conectada')
  })
  .catch((error) => {
    console.error(error)
  })

module.exports = mongoose